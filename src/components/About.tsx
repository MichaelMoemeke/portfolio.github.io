import { Panel } from "./Panel";

export function About() {
  return (
    <Panel title="ABOUT">
      <p
        style={{
          alignItems: "center",
          textAlign: "center",
          fontSize: "1.2rem",
        }}
      >
        I am a software developer with a deep curiosity for how systems work -
        and how they can be made better.
        <br />I have vast experience in front-end and back-end development, as
        well as with working with cloud services.
        <br />I believe in continuous learning, clear thinking, and building
        with intention.
        <br />
        <br />
        <button
          style={{ marginTop: "1rem" }}
          onClick={() => {
            const section = document.getElementById("contact");
            section?.scrollIntoView({ behavior: "smooth" });
            window.history.replaceState(null, "", `#contact`);
          }}
        >
          &gt; CONNECT WITH ME
        </button>
      </p>
    </Panel>
  );
}
