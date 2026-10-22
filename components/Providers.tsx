"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { EMAIL, personById, PHONE, PHONE_HREF, SPEC } from "@/lib/content";
import { navState } from "@/lib/nav-state";
import { ContactForm } from "./ContactForm";
import { SearchBox } from "./SearchBox";
import { SiteContext, type ContactRequest } from "./site-context";

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [contact, setContact] = useState<(ContactRequest & { key: number }) | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const contactOpenRef = useRef(false);
  const lastFocus = useRef<HTMLElement | null>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const drawer = useRef<HTMLElement>(null);

  const openContact = useCallback((req: ContactRequest = {}) => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    contactOpenRef.current = true;
    setSearchOpen(false);
    setContact((c) => ({ ...req, key: (c?.key ?? 0) + 1 }));
    setContactOpen(true);
  }, []);
  const closeContact = useCallback(() => {
    if (!contactOpenRef.current) return;
    contactOpenRef.current = false;
    setContactOpen(false);
    lastFocus.current?.focus?.();
  }, []);
  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  useEffect(() => {
    navState.hydrated = true;
    // Links from the old hash-routed prototype (#/team/...) still work.
    const h = location.hash;
    if (h.startsWith("#/") && h.length > 2) router.replace(`/${h.slice(2).replace(/\/?$/, "/")}`);
  }, [router]);

  const firstPath = useRef(true);
  useEffect(() => {
    contactOpenRef.current = false;
    setContactOpen(false);
    setSearchOpen(false);
    // Next scrolls the new page under the fixed header; start every page at the very top instead.
    if (firstPath.current) firstPath.current = false;
    else if (!location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("lock", contactOpen || searchOpen);
  }, [contactOpen, searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const t = setTimeout(() => searchInput.current?.focus(), 60);
    return () => clearTimeout(t);
  }, [searchOpen]);

  useEffect(() => {
    if (!contact) return;
    const t = setTimeout(() => drawer.current?.querySelector("input")?.focus(), 260);
    return () => clearTimeout(t);
  }, [contact]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (document.activeElement as HTMLElement | null)?.tagName ?? "";
      if (e.key === "/" && !/input|textarea|select/i.test(tag)) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        closeContact();
      }
    }
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [closeContact]);

  const site = useMemo(() => ({ openContact, openSearch, closeSearch }), [openContact, openSearch, closeSearch]);

  const person = contact?.person ? personById(contact.person) : undefined;
  const spec = contact?.spec ?? person?.spec;
  const topic = contact?.topic ?? (spec ? SPEC[spec].t : null);
  const forLine = person?.n ? (
    <>
      Voor <b>{person.n}</b>
      {person.spec && ` · ${SPEC[person.spec].t}`}
    </>
  ) : topic ? (
    <>
      Onderwerp: <b>{topic}</b>
    </>
  ) : null;

  return (
    <SiteContext.Provider value={site}>
      {children}

      <div
        className={`so${searchOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Zoeken"
        aria-hidden={!searchOpen}
        onClick={(e) => e.target === e.currentTarget && closeSearch()}
      >
        <div className="so-in wrap">
          <div className="so-top">
            <span className="label">Zoeken</span>
            <button className="x" type="button" aria-label="Sluiten" onClick={closeSearch}>
              ×
            </button>
          </div>
          <SearchBox id="qso" placeholder="Waar kunnen wij u mee helpen?" inputRef={searchInput} />
        </div>
      </div>

      <div className={`ovl${contactOpen ? " open" : ""}`} onClick={closeContact} />
      <aside
        ref={drawer}
        className={`cd${contactOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cdT"
        aria-hidden={!contactOpen}
      >
        <button className="x" type="button" aria-label="Sluiten" onClick={closeContact}>
          ×
        </button>
        <span className="label">Plan een gesprek</span>
        <h2 id="cdT">{person?.n ? `Contact met ${person.n.split(" ")[0]}` : "Kort lijntje."}</h2>
        <div className="cd-quick">
          <a href={PHONE_HREF}>
            <span className="label" style={{ fontSize: 10 }}>Bel direct</span>
            <b>{PHONE}</b>
          </a>
          <a href={`mailto:${EMAIL}${person?.n ? `?subject=${encodeURIComponent(`Voor ${person.n}`)}` : ""}`}>
            <span className="label" style={{ fontSize: 10 }}>Mail</span>
            <b>{EMAIL}</b>
          </a>
        </div>
        <div>{contact && <ContactForm key={contact.key} id="cdf" topic={topic} forLine={forLine} />}</div>
      </aside>
    </SiteContext.Provider>
  );
}
