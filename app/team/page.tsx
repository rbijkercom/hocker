import type { Metadata } from "next";
import { SectionHead } from "@/components/ui";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <section className="blk pgtop">
      <div className="wrap">
        <SectionHead level={1} label="Team" title="Mensenwerk." />
        <div className="note" style={{ maxWidth: 640 }}>
          Dit onderdeel blijft hetzelfde als op de huidige website.
        </div>
      </div>
    </section>
  );
}
