import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { Arrow } from "@/components/icons";
import { SectionHead } from "@/components/ui";
import { IMG } from "@/lib/content";

export const metadata: Metadata = { title: "Jobs" };

const OPENINGS = [
  ["Open sollicitatie", "Advocaten, stagiairs en ondersteuning: vertel ons wie je bent."],
  ["Studentstage", "Een paar maanden meedraaien in de praktijk."],
];

export default function JobsPage() {
  const [big, topRight, bottomRight] = IMG.jobs;
  return (
    <section className="blk pgtop" id="sec-jobs" data-sec="jobs">
      <div className="wrap">
        <SectionHead
          level={1}
          label="Jobs"
          title="Geen gemiddelden."
          intro="Wij stellen de hoogste eisen aan onze mensen en ons werk. Zonder uren overwerk als statussymbool. Herken je jezelf daarin? Dan maken we graag kennis."
        />
        <div className="jobs-hero">
          <img className="a" src={big} alt="" />
          <div className="b">
            <img src={topRight} alt="" />
            <img src={bottomRight} alt="" />
          </div>
        </div>
        <div style={{ marginTop: "clamp(40px,5vw,64px)" }}>
          {OPENINGS.map(([title, text]) => (
            <CtaButton key={title} className="vrow" topic="Werken bij Höcker">
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <Arrow />
            </CtaButton>
          ))}
          <div className="vrow">
            <div>
              <h3>Actuele vacatures</h3>
              <p>Worden hier geplaatst zodra ze open staan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
