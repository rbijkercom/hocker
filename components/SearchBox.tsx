"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { findAll, SUGGEST, type Result, type ResultType } from "@/lib/search";
import { norm } from "@/lib/text";
import { CtaButton } from "./CtaButton";
import { SearchIcon } from "./icons";
import { useSite } from "./site-context";

const TYPE_IC: Partial<Record<ResultType, string>> = { Specialisme: "§", Expertise: "§", Nieuws: "N", Pagina: "→" };

function highlight(t: string, q: string): ReactNode {
  const nq = norm(q).trim().split(/\s+/)[0];
  const i = nq ? norm(t).indexOf(nq) : -1;
  if (i < 0) return t;
  return (
    <>
      {t.slice(0, i)}
      <mark>{t.slice(i, i + nq.length)}</mark>
      {t.slice(i + nq.length)}
    </>
  );
}

type Props = { id: string; placeholder?: string; inputRef?: React.Ref<HTMLInputElement> };

export function SearchBox({ id, placeholder = "Zoek op naam of onderwerp", inputRef }: Props) {
  const router = useRouter();
  const { closeSearch } = useSite();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [act, setAct] = useState(-1);
  const input = useRef<HTMLInputElement | null>(null);

  const results: Result[] = q.trim() ? findAll(q) : [];

  function show(value: string) {
    setQ(value);
    setAct(-1);
    setOpen(true);
  }

  function picked() {
    setOpen(false);
    setQ("");
    input.current?.blur();
    closeSearch();
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    const n = results.length;
    if (e.key === "ArrowDown" && n) {
      e.preventDefault();
      setAct((act + 1) % n);
    } else if (e.key === "ArrowUp" && n) {
      e.preventDefault();
      setAct((act - 1 + n) % n);
    } else if (e.key === "Enter" && n) {
      e.preventDefault();
      router.push(results[act >= 0 ? act : 0].href);
      picked();
    } else if (e.key === "Escape") {
      setOpen(false);
      setAct(-1);
    }
  }

  return (
    <div className="sbox">
      <span className="sic" aria-hidden="true">
        <SearchIcon />
      </span>
      <input
        ref={(el) => {
          input.current = el;
          if (typeof inputRef === "function") inputRef(el);
          else if (inputRef) inputRef.current = el;
        }}
        id={id}
        type="search"
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
        role="combobox"
        aria-label="Zoeken op de site"
        aria-expanded={open}
        aria-controls={`${id}-l`}
        aria-autocomplete="list"
        aria-activedescendant={act >= 0 ? `${id}-o${act}` : undefined}
        value={q}
        onChange={(e) => show(e.target.value)}
        onFocus={() => show(q)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        onKeyDown={onKeyDown}
      />
      {/* preventDefault on mousedown keeps focus in the input so a click can land before blur hides the list */}
      <div className="sres" id={`${id}-l`} role="listbox" hidden={!open} onMouseDown={(e) => e.preventDefault()}>
        {!q.trim() ? (
          <div className="sr-sug">
            <span>Veelgezocht</span>
            {SUGGEST.map((s) => (
              <button key={s} type="button" onClick={() => { show(s); input.current?.focus(); }}>
                {s}
              </button>
            ))}
          </div>
        ) : results.length ? (
          results.map((r, i) => (
            <Link key={r.href} className={`sr-i${i === act ? " act" : ""}`} role="option" id={`${id}-o${i}`} href={r.href} onClick={picked}>
              {r.img ? <img src={r.img} alt="" /> : <span className="ic">{TYPE_IC[r.type]}</span>}
              <span className="tx">
                <b>{highlight(r.t, q)}</b>
                <small>
                  {r.type} · {r.sub}
                </small>
              </span>
            </Link>
          ))
        ) : (
          <div className="sr-empty">
            Geen resultaat voor “{q}”.
            <CtaButton topic="Anders" />
          </div>
        )}
      </div>
    </div>
  );
}
