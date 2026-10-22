"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "./icons";

export function Accordion({ title, defaultOpen = false, children }: { title: string; defaultOpen?: boolean; children: ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`acc${open ? " open" : ""}`}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        {title}
        <ChevronDown />
      </button>
      <div className="body">
        <div>{children}</div>
      </div>
    </div>
  );
}
