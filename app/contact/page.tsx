import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CtaButton } from "@/components/CtaButton";
import { SectionHead } from "@/components/ui";
import { EMAIL, IMG, PHONE, PHONE_HREF } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="blk pgtop" id="sec-contact" data-sec="contact">
      <div className="wrap">
        <SectionHead level={1} label="Contact" title="Kort lijntje." intro="Bel, mail of laat uw nummer achter. U hoort binnen één werkdag van ons." />
        <div className="qcards">
          <a className="qc" href={PHONE_HREF}>
            <span className="label">Bellen</span>
            <b>{PHONE}</b>
            <small>Direct iemand aan de lijn</small>
          </a>
          <a className="qc" href={`mailto:${EMAIL}`}>
            <span className="label">Mailen</span>
            <b>{EMAIL}</b>
            <small>Antwoord binnen één werkdag</small>
          </a>
          <CtaButton className="qc">
            <span className="label">Terugbellen</span>
            <b>Bel mij terug</b>
            <small>Laat uw nummer achter</small>
          </CtaButton>
        </div>
        <div className="cgrid" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
          <div className="cinfo">
            <dl>
              <dt>Bezoekadres</dt>
              <dd>
                <address>
                  Apollolaan 153
                  <br />
                  1077 AS Amsterdam
                </address>
              </dd>
            </dl>
            <a className="more" href="https://www.google.com/maps/search/?api=1&query=Apollolaan+153+Amsterdam" target="_blank" rel="noopener">
              Plan uw route ↗
            </a>
            <img src={IMG.contact} alt="" style={{ marginTop: 40, width: "100%", aspectRatio: "3/2", objectFit: "cover" }} />
          </div>
          <ContactForm id="cf" />
        </div>
      </div>
    </section>
  );
}
