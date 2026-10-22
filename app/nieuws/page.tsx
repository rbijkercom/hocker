import type { Metadata } from "next";
import Link from "next/link";
import { SectionHead } from "@/components/ui";
import { NEWS } from "@/lib/content";

export const metadata: Metadata = { title: "Nieuws" };

export default function NewsPage() {
  return (
    <section className="blk pgtop">
      <div className="wrap">
        <SectionHead level={1} label="Nieuws" title="Actueel." intro="Editorials, wetgeving en wat er speelt. Kort, want dat is ons uitgangspunt." />
        <div className="alist">
          {NEWS.map((n) => (
            <Link className="art" href={`/nieuws/${n.slug}`} key={n.slug}>
              <img src={n.img} alt="" />
              <div className="b">
                <span className="meta">
                  {n.d} - {n.a}
                </span>
                <h3>{n.t}</h3>
                {n.x && <p>{n.x.slice(0, 150)}…</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
