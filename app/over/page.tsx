import type { Metadata } from "next";
import { Accordion } from "@/components/Accordion";
import { SectionHead } from "@/components/ui";
import { IMG, NETWORKS, PARTNERS } from "@/lib/content";

export const metadata: Metadata = { title: "Over" };

export default function AboutPage() {
  return (
    <section className="blk about pgtop" id="sec-over" data-sec="over">
      <div className="wrap">
        <SectionHead
          level={1}
          label="Over"
          title="Over Höcker."
          intro={
            <>
              Het kan gebeuren dat u een advocaat nodig heeft. Dan wilt u worden bijgestaan door iemand waarop u kunt rekenen. Een advocaat die
              zich vastbijt, een advocaat die naast en voor u staat. Advocatuur is maatwerk én mensenwerk. Dat vergt expertise, precisie en een
              luisterend oor. Daarom geloven wij in korte lijnen en investeren wij in langdurige relaties. Wij zijn behalve uw advocaat ook uw
              vertrouweling. Uw <i>partner in law</i>.
            </>
          }
        />

        <div className="two" id="geloven" style={{ marginTop: "clamp(32px,4vw,56px)" }}>
          <div>
            <h2 className="h3">Waar wij in geloven</h2>
            <p>
              Wij denken met u mee wat de beste oplossing is. U heeft niets aan een advocaat die geheel zijn of haar eigen koers vaart, net zoals
              u niets heeft aan een jaknikker. Uw belang staat bij ons voorop. Op die manier kunnen wij u het best helpen. Wanneer u ons nodig
              heeft staan wij voor u klaar.
            </p>
          </div>
          <div className="pt">
            <p>
              Höcker Advocaten combineert de kennis en kunde van een groot kantoor met de persoonlijke aandacht van een klein kantoor. Onze
              advocaten zijn gespecialiseerd in ondernemingsrecht, arbeidsrecht, intellectueel eigendomsrecht, ICT, media &amp; marketing,
              algemeen belang en collectieve acties en geschillenoplossing. Wij werken voor multinationals en middelgrote ondernemingen in
              binnen- en buitenland.
            </p>
            <p>
              Wij behandelen ook zaken voor het algemeen belang. Omdat we iets willen bijdragen aan de samenleving, en omdat we nu eenmaal
              houden van ons vak.
            </p>
          </div>
        </div>

        <img className="collage" src={IMG.collage} alt="Advocaten van Höcker in gesprek aan tafel, met planten op de achtergrond" />

        <div className="two" id="internationaal" style={{ marginTop: "clamp(48px,6vw,80px)" }}>
          <div>
            <h2 className="h3">Internationaal</h2>
            <p>
              Al jaren werken wij intensief samen met advocaten over de hele wereld. Wij zijn lid van grote internationale netwerken. Zodat u
              ook over de grens zorgeloos zaken kunt doen.
            </p>
          </div>
          <div>
            {NETWORKS.map((n, i) => (
              <Accordion key={n.h} title={n.h} defaultOpen={i === 0}>
                <p>{n.b ?? <span className="tbd">Tekst volgt.</span>}</p>
                <p>
                  <a className="ext" href={n.u} target="_blank" rel="noopener">
                    Website {n.h} ↗
                  </a>
                </p>
              </Accordion>
            ))}
          </div>
        </div>

        <div id="samenwerking" style={{ marginTop: "clamp(56px,7vw,96px)" }}>
          <h2 className="h3">Samenwerkingsverbanden</h2>
          <div className="pgrid2">
            {PARTNERS.map((p) => (
              <div className="pcard" key={p.h}>
                <h3>{p.h}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
