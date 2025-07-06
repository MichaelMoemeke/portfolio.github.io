import { Navigation } from "./Navigation";
import { Panel } from "./Panel";

export function Header() {
  return (
    <Panel>
      <div className="header-content">
        <div className="neon" style={{ fontFamily: "Orbitron, sans-serif" }}>
          MICHAEL E. MOEMEKE
        </div>
        <Navigation />
      </div>
    </Panel>
  );
}
