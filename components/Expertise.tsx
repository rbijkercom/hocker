"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { navState } from "@/lib/nav-state";

type Props = { label: string; tabs: { id: string; t: string }[]; panels: ReactNode[]; initial?: string };

export function Expertise({ label, tabs, panels, initial }: Props) {
  const [sel, setSel] = useState(initial && tabs.some((t) => t.id === initial) ? initial : tabs[0].id);
  const section = useRef<HTMLElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  function select(id: string) {
    setSel(id);
    if (matchMedia("(max-width:900px)").matches) tabRefs.current[id]?.scrollIntoView({ block: "nearest", inline: "center" });
  }

  useEffect(() => {
    if (!initial || !tabs.some((t) => t.id === initial)) return;
    select(initial);
    const smooth = navState.hydrated;
    requestAnimationFrame(() => {
      const el = section.current;
      if (!el) return;
      const hdr = document.getElementById("hdr")?.offsetHeight ?? 0;
      window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - hdr - 8, behavior: smooth ? "smooth" : "instant" });
    });
  }, [initial]);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const k = tabs.findIndex((t) => t.id === sel);
    let n = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") n = (k + 1) % tabs.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = (k - 1 + tabs.length) % tabs.length;
    if (n < 0) return;
    e.preventDefault();
    tabRefs.current[tabs[n].id]?.focus();
    select(tabs[n].id);
  }

  return (
    <section className="xp" id="expertise" ref={section}>
      <div className="inner">
        <div className="xhead">
          <span className="label">Expertise</span>
          <h2>
            Waar wij u bij helpen<span className="dot">.</span>
          </h2>
        </div>
        <div className="xgrid">
          <div className="xnav" role="tablist" aria-label={`Onderwerpen ${label}`} onKeyDown={onKeyDown}>
            {tabs.map((x, i) => (
              <button
                key={x.id}
                ref={(el) => {
                  tabRefs.current[x.id] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${x.id}`}
                aria-controls={`sub-${x.id}`}
                aria-selected={x.id === sel}
                tabIndex={x.id === sel ? 0 : -1}
                onClick={() => select(x.id)}
              >
                <span className="xi">0{i + 1}</span>
                <span>{x.t}</span>
              </button>
            ))}
          </div>
          <div className="xpanels">
            {tabs.map((x, i) => (
              <article key={x.id} className="xpanel" role="tabpanel" id={`sub-${x.id}`} aria-labelledby={`tab-${x.id}`} hidden={x.id !== sel}>
                {panels[i]}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
