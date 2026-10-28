"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PEOPLE, TEAM_INTRO, TEAM_ROLES, teamRoleLabel, type TeamRole } from "@/lib/content";
import { SectionHead } from "./ui";

type Filter = "all" | TeamRole;

export function TeamBoard() {
  const [filter, setFilter] = useState<Filter>("all");
  const people = useMemo(
    () => PEOPLE.filter((p) => p.n && (filter === "all" || p.roles.includes(filter))),
    [filter],
  );

  return (
    <>
      <div className="thead">
        <SectionHead level={1} label="Team" title="Mensenwerk." intro={TEAM_INTRO} />
        <div className="tfilt" role="group" aria-label="Filter het team">
          <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
            Iedereen
          </button>
          {TEAM_ROLES.map((role) => (
            <button key={role.id} type="button" aria-pressed={filter === role.id} onClick={() => setFilter(role.id)}>
              {role.t}
            </button>
          ))}
        </div>
      </div>
      <ul className="tgrid">
        {people.map((p) => (
          <li key={p.id}>
            <Link className="tm" href={`/team/${p.id}`}>
              <span className="ph2">
                <img src={p.img} alt="" />
              </span>
              <b>{p.n}</b>
              <span className="roles">
                {p.roles.map((role) => (
                  <span key={role}>{teamRoleLabel(role)}</span>
                ))}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="tjoin">
        <div>
          <h2>Kom je ook ons team versterken?</h2>
          <p>Wij staan altijd open voor talent dat bij ons past. Geïnteresseerd? Stuur dan je open sollicitatie naar Mick Hurks.</p>
        </div>
        <Link className="btn" href="/team/mick-hurks">
          Neem contact met Mick op
        </Link>
      </div>
    </>
  );
}
