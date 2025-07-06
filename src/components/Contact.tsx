import { useState } from "react";
import { Panel } from "./Panel";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import type { ReactElement } from "react";

type ContactItem = {
  icon: ReactElement;
  label: string;
  value: string;
  href?: string;
};

const items: ContactItem[] = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "ekenemichaelmoemeke@gmail.com",
    href: "mailto:ekenemichaelmoemeke@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/michael-moemeke/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "GitHub",
    href: "https://github.com/MichaelMoemeke",
  },
];

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(null), 1500);
    });
  };

  return (
    <Panel title="LET'S CONNECT!">
      <div className="business-card">
        <div
          className="card-avatar"
          style={
            { "--glow-color": "var(--oracle-neon)" } as React.CSSProperties
          }
        >
          MEM
        </div>
        <div className="card-details">
          {items.map((item) => (
            <div
              key={item.label}
              className="contact-line"
              onClick={() => {
                if (item.label === "Email") copy(item.value);
                else window.open(item.href, "_blank");
              }}
            >
              <span className="contact-icon">{item.icon}</span>
              <span>{item.value}</span>
              {item.label === "Email" && copied === item.value && (
                <span className="copied-tooltip">COPIED!</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
