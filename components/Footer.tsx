import Link from "next/link";
import { asset } from "@/lib/asset";
import { EMAIL, PHONE, PHONE_HREF } from "@/lib/content";
import { BackToTop } from "./BackToTop";
import { CtaButton } from "./CtaButton";

export function Footer() {
  return (
    <>
      <footer className="ftr">
        <div className="wrap">
          <div className="fcols">
            <div>
              <b>Höcker</b>
              <Link href="/info/klachtenregeling">Klachtenregeling</Link>
              <Link href="/info/privacy">Privacy</Link>
              <Link href="/info/algemene-voorwaarden">Algemene voorwaarden</Link>
              <Link href="/info/rechtsgebieden-registratie">Rechtsgebieden registratie</Link>
              <span>Fotografie: Hester Doove</span>
            </div>
            <div>
              <b>Snel naar</b>
              <Link href="/specialismen">Specialismen</Link>
              <Link href="/team">Team</Link>
              <Link href="/nieuws">Nieuws</Link>
              <Link href="/jobs">Jobs</Link>
            </div>
            <div>
              <b>Contact</b>
              <address>
                Apollolaan 153
                <br />
                1077 AS Amsterdam
              </address>
              <span style={{ marginTop: 8 }}>
                <a href={PHONE_HREF}>{PHONE}</a>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </span>
            </div>
          </div>
          <div className="badges">
            <img src={asset("logos/chambers-global-2026.png")} alt="Chambers Global 2026 — Höcker Advocaten" />
            <img src={asset("logos/chambers-europe-2026.png")} alt="Chambers Europe 2026 — Höcker Advocaten" />
            <img src={asset("logos/legal500-emea-2025.png")} alt="Legal 500 EMEA 2025 — Leading firm" />
            <img src={asset("logos/interlex.png")} alt="Member of Interlex" />
          </div>
        </div>
        <div className="wrap fbot">
          <span>© 2026 Höcker Advocaten</span>
          <BackToTop />
        </div>
      </footer>
      <div className="mbar" aria-label="Snel contact">
        <a href={PHONE_HREF}>Bel</a>
        <a href={`mailto:${EMAIL}`}>Mail</a>
        <CtaButton className="">Bel mij terug</CtaButton>
      </div>
    </>
  );
}
