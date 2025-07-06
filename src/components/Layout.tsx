import type { ReactNode } from "react";
import "../index.css";

type Props = {
  main: ReactNode;
};

export function Layout({ main }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1rem",
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      <div>{main}</div>
      {/* <aside>{sidebar}</aside> */}
    </div>
  );
}
