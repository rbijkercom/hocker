"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CtaButton } from "./CtaButton";
import { SearchIcon } from "./icons";
import { SearchBox } from "./SearchBox";
import { useSite } from "./site-context";

const NAV = [
  ["specialismen", "Specialismen"],
  ["team", "Team"],
  ["clienten", "Cliënten over ons"],
  ["nieuws", "Nieuws"],
  ["jobs", "Jobs"],
  ["over", "Over"],
  ["contact", "Contact"],
] as const;

export function Header() {
  const pathname = usePathname();
  const { openSearch } = useSite();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [enSoon, setEnSoon] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setActive(pathname.split("/").filter(Boolean)[0] ?? null);
    // Highlight the menu item for the section in view (the home page shows several).
    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive((e.target as HTMLElement).dataset.sec ?? null)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    document.querySelectorAll("main [data-sec]").forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 8);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!enSoon) return;
    const t = setTimeout(() => setEnSoon(false), 1800);
    return () => clearTimeout(t);
  }, [enSoon]);

  const search = () => {
    setMenuOpen(false);
    openSearch();
  };

  const links = NAV.map(([r, label]) => (
    <Link key={r} href={`/${r}`} className={active === r ? "on" : undefined}>
      {label}
    </Link>
  ));

  return (
    <>
      <header className={`hdr${scrolled ? " sc" : ""}`} id="hdr">
        <div className="wrap">
          <Link className="logo" href="/" aria-label="Höcker Advocaten — home">
            <b>
              H<i>o</i>cker
            </b>
            <small>ADVOCATEN</small>
          </Link>
          <nav className="nav" aria-label="Hoofdmenu">
            {links}
            <button className="hsearch" type="button" aria-label="Zoeken (sneltoets /)" onClick={search}>
              <SearchIcon />
            </button>
            <span className="lang">
              <button type="button" onClick={() => setEnSoon(true)}>
                {enSoon ? "EN (volgt)" : "EN"}
              </button>{" "}
              / <span className="on">NL</span>
            </span>
            <CtaButton className="btn hbtn" />
          </nav>
          <button className="hsearch mob" type="button" aria-label="Zoeken" onClick={search}>
            <SearchIcon />
          </button>
          <button className="burger" type="button" aria-label="Menu openen" onClick={() => setMenuOpen(true)}>
            <span />
          </button>
        </div>
      </header>

      <div className={`mnav${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <div className="top">
          <Link className="logo" href="/">
            <b style={{ fontSize: 30 }}>
              H<i>o</i>cker
            </b>
            <small style={{ fontSize: 9 }}>ADVOCATEN</small>
          </Link>
          <button className="x" type="button" aria-label="Menu sluiten" onClick={() => setMenuOpen(false)}>
            ×
          </button>
        </div>
        <div style={{ marginBottom: 24 }}>
          <SearchBox id="qm" placeholder="Zoeken" />
        </div>
        {links}
        <CtaButton style={{ marginTop: 24, alignSelf: "flex-start" }} />
      </div>
    </>
  );
}
