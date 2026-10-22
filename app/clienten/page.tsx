import type { Metadata } from "next";
import { Quotes } from "@/components/Quotes";
import { SectionHead } from "@/components/ui";
import { CLIENTS } from "@/lib/content";

export const metadata: Metadata = { title: "Cliënten over ons" };

export default function ClientsPage() {
  return (
    <section className="blk pgtop">
      <div className="wrap">
        <SectionHead
          level={1}
          label="Cliënten over ons"
          title={
            <>
              Wat zeggen onze cliënten<span className="qdot">?</span>
            </>
          }
          intro="Wij werken zowel voor multinationals als voor kleinere ondernemingen en non-profitorganisaties."
        />
        <p className="cl-intro">
          Met een groot deel van onze cliënten werken wij al jarenlang samen. Dit heeft geleid tot een sterke vertrouwensband en tot
          vermelding in de internationale gidsen{" "}
          <a href="https://chambers.com/" target="_blank" rel="noopener">
            Chambers
          </a>{" "}
          en{" "}
          <a href="https://www.legal500.com/" target="_blank" rel="noopener">
            Legal 500
          </a>
          .
        </p>
      </div>
      <div className="ticker" aria-label="Een greep uit onze cliënten">
        <div className="tkt">
          {CLIENTS.map((c) => (
            <span className="tk" key={c}>
              {c}
            </span>
          ))}
          {CLIENTS.map((c) => (
            <span className="tk" aria-hidden="true" key={`${c}-2`}>
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="wrap" style={{ marginTop: "clamp(56px,7vw,96px)" }}>
        <Quotes />
      </div>
    </section>
  );
}
