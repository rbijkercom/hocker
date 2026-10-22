"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CONTACT_TOPICS } from "@/lib/content";

type Props = { id?: string; topic?: string | null; forLine?: ReactNode };

const REQUIRED = ["n", "t"];

export function ContactForm({ id, topic, forLine }: Props) {
  const [sent, setSent] = useState(false);
  const [bad, setBad] = useState<string[]>([]);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const empty = REQUIRED.filter((name) => !(form.elements.namedItem(name) as HTMLInputElement).value.trim());
    setBad(empty);
    if (empty.length) (form.elements.namedItem(empty[0]) as HTMLInputElement).focus();
    else setSent(true);
  }

  const cls = (name: string) => (bad.includes(name) ? "bad" : undefined);

  return (
    <form className={`cf${sent ? " sent" : ""}`} id={id} noValidate onSubmit={submit}>
      <div className="ok">
        <span>Dank u wel.</span> Wij bellen u binnen één werkdag terug.
        <br />
        <span className="demo">(Voorbeeldformulier: er is niets verzonden.)</span>
      </div>
      {forLine && <p className="cd-for fld">{forLine}</p>}
      <label className="fld">
        Naam
        <input name="n" autoComplete="name" required className={cls("n")} />
      </label>
      <label className="fld">
        Telefoonnummer
        <input name="t" type="tel" autoComplete="tel" required className={cls("t")} />
      </label>
      <label className="fld">
        <span>
          E-mail <span className="opt">(optioneel)</span>
        </span>
        <input name="e" type="email" autoComplete="email" />
      </label>
      <label className="fld">
        Onderwerp
        <select name="s" defaultValue={topic ?? undefined}>
          {CONTACT_TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="fld">
        Uw vraag, kort
        <textarea name="m" rows={3} />
      </label>
      <button className="btn fld" type="submit" style={{ justifySelf: "start" }}>
        Bel mij terug
      </button>
    </form>
  );
}
