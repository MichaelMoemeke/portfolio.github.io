import type { ReactNode } from "react";
import "../index.css";

type Props = {
  title?: string;
  children: ReactNode;
};

export function Panel({ title, children }: Props) {
  return (
    <div className="panel">
      {title && (
        <h2 className="neon" style={{ fontFamily: "Orbitron, sans-serif" }}>
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
