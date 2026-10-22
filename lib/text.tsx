import { isValidElement, type ReactNode } from "react";

/** Colours the closing full stop of a heading green. */
export function dot(text: string): ReactNode {
  const v = text.trimEnd();
  if (!v.endsWith(".") || v.endsWith("..")) return text;
  return (
    <>
      {v.slice(0, -1)}
      <span className="dot">.</span>
    </>
  );
}

export function toText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toText).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return toText(node.props.children);
  return "";
}

export const norm = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
