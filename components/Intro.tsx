"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { INTRO, KEEP } from "@/lib/content";
import { navState } from "@/lib/nav-state";
import { Replay } from "./icons";
import { SearchBox } from "./SearchBox";

/** Each word of INTRO; `delay` is set on the words that get struck through. */
const WORDS = (() => {
  let k = 0;
  let i = 0;
  return INTRO.split(" ").map((w) => {
    const keep = k < KEEP.length && w.replace(/[.,:;]/g, "") === KEEP[k];
    if (keep) k++;
    return { w, keep, delay: keep ? undefined : i++ * 17 };
  });
})();
const STRUCK = WORDS.filter((w) => !w.keep).length;

/** "De belangrijkste reden … gedeclareerde uren." is struck through until only "Höcker vermijdt lange teksten." is left. */
export function Intro() {
  const [done, setDone] = useState(navState.introPlayed);
  const [run, setRun] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const finRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const stage = stageRef.current, fin = finRef.current, para = paraRef.current;
    if (done || !stage || !fin || !para) return;
    let cancelled = false;
    const clones: HTMLSpanElement[] = [];
    const wait = (ms: number) =>
      new Promise<void>((res, rej) => setTimeout(() => (cancelled ? rej(new Error("cancelled")) : res()), ms));

    const reset = () => {
      clones.forEach((c) => c.remove());
      stage.getAnimations().forEach((a) => a.cancel());
      stage.style.height = "";
      fin.style.cssText = "";
    };
    const finish = () => {
      reset();
      fin.classList.remove("pending");
      setDone(true);
    };

    para.classList.remove("strike", "fade");
    para.style.cssText = "";
    Object.assign(fin.style, { position: "absolute", left: "0", right: "0", top: "0" });

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    (async () => {
      await Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise((r) => setTimeout(r, 1500))]);
      await wait(1100);
      para.classList.add("strike");
      await wait((STRUCK - 1) * 17 + 200 + 120);
      await wait(1000);
      para.classList.add("fade");
      await wait(480);

      // FLIP the kept words from the paragraph into the heading.
      const sRect = stage.getBoundingClientRect();
      const paraStyle = getComputedStyle(para);
      const fsOld = parseFloat(paraStyle.fontSize);
      const old = [...para.querySelectorAll<HTMLElement>(".k")].map((el) => {
        const r = el.getBoundingClientRect();
        return { x: r.left - sRect.left, y: r.top - sRect.top, t: el.textContent!.replace(/[.,]/g, "") };
      });
      const hOld = stage.offsetHeight;
      stage.style.height = `${hOld}px`;
      Object.assign(para.style, { position: "absolute", left: "0", right: "0", top: "0" });
      fin.style.cssText = "";
      const fsNew = parseFloat(getComputedStyle(fin).fontSize);
      const s2 = stage.getBoundingClientRect();
      const neu = [...fin.querySelectorAll<HTMLElement>(".fw")].map((el) => {
        const r = el.getBoundingClientRect();
        return { x: r.left - s2.left, y: r.top - s2.top };
      });
      const hNew = fin.offsetHeight;
      for (const o of old) {
        const c = document.createElement("span");
        c.className = "clone";
        c.textContent = o.t;
        Object.assign(c.style, { fontSize: `${fsOld}px`, left: `${o.x}px`, top: `${o.y}px`, letterSpacing: paraStyle.letterSpacing });
        stage.appendChild(c);
        clones.push(c);
      }
      para.style.visibility = "hidden";

      const sc = fsNew / fsOld, D = 1050, E = "cubic-bezier(.7,0,.2,1)";
      const anims = clones.map((c, i) =>
        c.animate(
          [
            { transform: "translate(0,0) scale(1)", letterSpacing: paraStyle.letterSpacing },
            { transform: `translate(${neu[i].x - old[i].x}px,${neu[i].y - old[i].y}px) scale(${sc})`, letterSpacing: `${(-0.028 * fsNew) / sc}px` },
          ],
          { duration: D, delay: i * 70, easing: E, fill: "forwards" },
        ),
      );
      stage.animate([{ height: `${hOld}px` }, { height: `${hNew}px` }], { duration: D + 210, easing: E, fill: "forwards" });
      await Promise.all(anims.map((a) => a.finished));
      if (cancelled) return;

      finish();
      navState.introPlayed = true;
      fin.querySelector(".dot")?.animate([{ opacity: 0, transform: "translateY(-.3em)" }, { opacity: 1, transform: "none" }], {
        duration: 420,
        easing: "cubic-bezier(.2,.8,.2,1)",
      });
    })().catch(() => {});

    return () => {
      cancelled = true;
      reset();
    };
  }, [done, run]);

  const replay = () => {
    setDone(false);
    setRun((r) => r + 1);
  };

  return (
    <section className="intro" aria-label="Introductie">
      <div className="wrap">
        <div className="stage" ref={stageRef}>
          <h1 className={`final${done ? "" : " pending"}`} ref={finRef} aria-label="Höcker vermijdt lange teksten.">
            <span className="fw">Höcker</span> <span className="fw">vermijdt</span> <span className="fw">lange</span>{" "}
            <span className="fw">teksten</span>
            <span className="dot">.</span>
          </h1>
          {!done && (
            <p className="para" ref={paraRef} aria-hidden="true" key={run}>
              {WORDS.map(({ w, keep, delay }, i) => (
                <Fragment key={i}>
                  {i > 0 && " "}
                  <span className={`w${keep ? " k" : ""}`} style={delay === undefined ? undefined : ({ "--i": delay } as React.CSSProperties)}>
                    {w}
                  </span>
                </Fragment>
              ))}
            </p>
          )}
        </div>
        <div className="hacts">
          <SearchBox id="qh" />
          <button className={`replay${done ? " show" : ""}`} type="button" onClick={replay}>
            <Replay />
            Speel opnieuw af
          </button>
        </div>
      </div>
    </section>
  );
}
