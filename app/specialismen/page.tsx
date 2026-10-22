import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { SectionHead } from "@/components/ui";
import { SPEC, SPEC_ORDER } from "@/lib/content";

export const metadata: Metadata = { title: "Specialismen" };

export default function SpecialismsPage() {
  return (
    <section className="blk pgtop">
      <div className="wrap">
        <SectionHead
          level={1}
          label="Specialismen"
          title="Waar wij goed in zijn."
          intro="Zes praktijken, elk met vaste aanspreekpunten. Klik op een onderwerp en u staat er direct."
        />
        <div className="sg">
          {SPEC_ORDER.map((k, i) => (
            <article className="stile" key={k}>
              <Link className="stl" href={`/specialismen/${k}`}>
                <span className="sn">0{i + 1}</span>
                <span className="sarr">
                  <Arrow />
                </span>
                <h2>{SPEC[k].t}</h2>
                <p>{SPEC[k].short}</p>
              </Link>
              <ul>
                {SPEC[k].subs.map((x) => (
                  <li key={x.id}>
                    <Link href={`/specialismen/${k}/${x.id}`}>{x.t}</Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
