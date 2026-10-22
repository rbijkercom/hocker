import Link from "next/link";
import { Arrow } from "@/components/icons";
import { Intro } from "@/components/Intro";
import { SectionHead } from "@/components/ui";
import { IMG, NEWS, SPEC, SPEC_ORDER } from "@/lib/content";
import { dot } from "@/lib/text";

export default function Home() {
  const [feat, ...rest] = NEWS;
  return (
    <>
      <Intro />
      <img className="heroimg" src={IMG.hero} alt="Advocaat van Höcker in gesprek, in het licht van een groot raam" />

      <section className="direct" id="sec-specialismen" data-sec="specialismen">
        <div className="wrap">
          <div className="dpanel">
            <div className="dhead">
              <div>
                <span className="label">Direct naar</span>
                <h2>{dot("Waar wij goed in zijn.")}</h2>
              </div>
              <p>Zes praktijken, elk met vaste aanspreekpunten. Klik op een onderwerp en u staat er direct.</p>
            </div>
            <div className="srows">
              {SPEC_ORDER.map((k, i) => (
                <div className="srow" key={k}>
                  <span className="n">0{i + 1}</span>
                  <div className="sm">
                    <h3>
                      <Link href={`/specialismen/${k}`}>{SPEC[k].t}</Link>
                    </h3>
                    <p>{SPEC[k].short}</p>
                  </div>
                  <ul className="ss">
                    {SPEC[k].subs.map((x) => (
                      <li key={x.id}>
                        <Link href={`/specialismen/${k}/${x.id}`}>{x.t}</Link>
                      </li>
                    ))}
                  </ul>
                  <Link className="sgo" href={`/specialismen/${k}`} aria-label={`Naar ${SPEC[k].t}`}>
                    <Arrow />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="news blk" id="sec-nieuws" data-sec="nieuws">
        <div className="wrap">
          <div className="shrow">
            <SectionHead label="Nieuws" title="Actueel." />
            <Link className="more" href="/nieuws">
              Alle berichten
            </Link>
          </div>
          <div className="ngrid">
            <article className="feat">
              <div className="by">
                <span className="meta">
                  {feat.d} &nbsp;—&nbsp; {feat.a}
                </span>
                <img src={IMG.avatar} alt="" />
              </div>
              <h3>{feat.t}</h3>
              <p>{feat.x}</p>
              <Link className="more" href={`/nieuws/${feat.slug}`}>
                Lees verder
              </Link>
            </article>
            <div className="side">
              {rest.map((n) => (
                <Link key={n.slug} href={`/nieuws/${n.slug}`}>
                  <span className="meta">
                    {n.d} - {n.a}
                  </span>
                  <span className="t">{n.t}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
