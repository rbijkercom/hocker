"use client";

export function BackToTop() {
  return (
    <a
      href="#app"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      Naar boven ↑
    </a>
  );
}
