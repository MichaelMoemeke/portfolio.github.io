import { useTypewriter } from "../hooks/useTypewriter";
import { FaChevronDown } from "react-icons/fa";
import React from "react";

export function Hero({ onComplete }: { onComplete?: () => void }) {
  const { displayedText: name, isDone: nameDone } = useTypewriter(
    "MICHAEL MOEMEKE",
    100
  );
  const { displayedText: subtitle, isDone: subtitleDone } = useTypewriter(
    nameDone ? "SOFTWARE DEVELOPMENT ENGINEER" : "",
    75
  );

  // Notify parent when hero fully displayed
  React.useEffect(() => {
    if (subtitleDone && onComplete) {
      onComplete();
    }
  }, [subtitleDone, onComplete]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1 className="neon hero-name">
          {name}
          {!nameDone && <span className="blinking">|</span>}
        </h1>
      </div>
      <h2 className="hero-subtitle">
        {subtitle}
        {nameDone && !subtitleDone && <span className="blinking">|</span>}
      </h2>
      {subtitleDone && (
        <div
          style={{
            animation: "fade-in 1s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <h3>INDUSTRY | DOGGEDNESS | INNOVATION | IMPACT</h3>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              className="neon"
              onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
                window.history.replaceState(null, "", `#contact`);
              }}
            >
              &gt; CONTACT ME
            </button>
            <button
              className="neon"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/MoemekeMichaelResume.pdf";
                link.download = "Michael_Moemeke_Resume.pdf";
                link.target = "_blank";
                link.click();
              }}
            >
              &gt; MY RESUME
            </button>
          </div>
        </div>
      )}

      {subtitleDone && (
        <button
          aria-label="Scroll to about"
          className="scroll-indicator"
          onClick={() => {
            const about = document.getElementById("about");
            if (about) {
              const headerOffset = 110;
              const elementPosition = about.getBoundingClientRect().top;
              const offsetPosition =
                elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
          }}
          style={{
            position: "absolute",
            bottom: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "var(--oracle-neon)",
            fontSize: "1.5rem",
            animation: "bounce 1.5s infinite",
          }}
        >
          <FaChevronDown />
        </button>
      )}
    </div>
  );
}
