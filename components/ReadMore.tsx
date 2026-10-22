"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "./icons";

export function ReadMore({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="moretxt" id="moretxt" hidden={!open}>
        {children}
      </div>
      <button className={`readmore${open ? " open" : ""}`} type="button" aria-expanded={open} aria-controls="moretxt" onClick={() => setOpen(!open)}>
        <span>{open ? "Minder" : "Lees meer"}</span>
        <ChevronDown />
      </button>
    </>
  );
}
