"use client";

import { useState } from "react";
import { QUOTES } from "@/lib/content";
import { CtaButton } from "./CtaButton";
import { ChevronLeft, ChevronRight, QuoteMark } from "./icons";

export function Quotes({ start = 0 }: { start?: number }) {
  const [i, setI] = useState(start);
  const [moved, setMoved] = useState(false);
  const q = QUOTES[i];
  const step = (d: number) => {
    setI((i + QUOTES.length + d) % QUOTES.length);
    setMoved(true);
  };

  return (
    <>
      <figure className="qbox">
        <span className="qmark">
          <QuoteMark />
        </span>
        {/* Re-keyed so the fade animation restarts on every change. */}
        <div className={`qin${moved ? " fadeq" : ""}`} key={i}>
          <div className="qn">
            {i + 1} / {QUOTES.length}
          </div>
          <blockquote className="qt">“{q.t}”</blockquote>
          <figcaption className="qs">
            {q.s}
            {q.r && <small>{q.r}</small>}
          </figcaption>
        </div>
      </figure>
      <div className="qbar">
        <div className="arrows">
          <button type="button" aria-label="Vorige quote" onClick={() => step(-1)}>
            <ChevronLeft />
          </button>
          <button type="button" aria-label="Volgende quote" onClick={() => step(1)}>
            <ChevronRight />
          </button>
        </div>
        <CtaButton />
      </div>
    </>
  );
}
