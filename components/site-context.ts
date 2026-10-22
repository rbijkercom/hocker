"use client";

import { createContext, useContext } from "react";
import type { SpecKey } from "@/lib/content";

export type ContactRequest = { person?: string; spec?: SpecKey; topic?: string };

type Site = {
  openContact: (req?: ContactRequest) => void;
  openSearch: () => void;
  closeSearch: () => void;
};

export const SiteContext = createContext<Site | null>(null);

export function useSite() {
  const site = useContext(SiteContext);
  if (!site) throw new Error("useSite must be used inside <Providers>");
  return site;
}
