"use client";

import type { CSSProperties, ReactNode } from "react";
import { useSite, type ContactRequest } from "./site-context";

type Props = ContactRequest & { className?: string; style?: CSSProperties; children?: ReactNode };

/** Opens the "Plan een gesprek" drawer. */
export function CtaButton({ person, spec, topic, className = "btn", style, children = "Plan een gesprek" }: Props) {
  const { openContact } = useSite();
  return (
    <button className={className} style={style} type="button" onClick={() => openContact({ person, spec, topic })}>
      {children}
    </button>
  );
}
