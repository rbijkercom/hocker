import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import type { Person } from "@/lib/content";
import { dot } from "@/lib/text";
import { Arrow } from "./icons";

type HeadProps = { label: string; title: ReactNode; intro?: ReactNode; level?: 1 | 2 };

export function SectionHead({ label, title, intro, level = 2 }: HeadProps) {
  const H = level === 1 ? "h1" : "h2";
  return (
    <div className="sh">
      <span className="label">{label}</span>
      <H>{typeof title === "string" ? dot(title) : title}</H>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export function Crumbs({ items }: { items: [label: string, href?: string][] }) {
  return (
    <nav className="crumbs" aria-label="Kruimelpad">
      {items.map(([label, href], i) => (
        <Fragment key={label}>
          {i > 0 && <Arrow />}
          {href ? <Link href={href}>{label}</Link> : <span aria-current="page">{label}</span>}
        </Fragment>
      ))}
    </nav>
  );
}

export function PersonLink({ p }: { p: Person }) {
  return (
    <Link className="ex" href={`/team/${p.id}`}>
      <img src={p.img} alt={p.n ?? "Medewerker van Höcker"} />
      <b>{p.n ?? "Naam volgt"}</b>
    </Link>
  );
}

export function Avatars({ people }: { people: Person[] }) {
  return people.map((p) => (
    <Link key={p.id} href={`/team/${p.id}`} title={p.n ?? undefined}>
      <img src={p.img} alt={p.n ?? ""} />
    </Link>
  ));
}
