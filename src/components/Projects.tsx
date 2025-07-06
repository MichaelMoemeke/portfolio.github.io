import { Panel } from "./Panel";

const projects = [
  {
    name: "Meddibia",
    description: "Personalized AI-powered health assitant.",
    languages: ["Python", "Flutter", "ML"],
    link: "https://devpost.com/software/meddibia",
  },
  {
    name: "WazobiaCode.com",
    description: "Web development bootcamp for high school students.",
    languages: ["React", "Next.js", "Telegram"],
    link: "https://wazobiacode.com",
  },
  {
    name: "VibeShield",
    description: "Security Vulnerability Scanner for Developers.",
    languages: ["React", "TypeScript", "Docker", "Python"],
    link: "https://github.com/AbokiLearn/VibeShield",
  },
  {
    name: "News Website",
    description: "Centralized news website for latest news.",
    languages: ["Django", "Python", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/MichaelMoemeke/NewsWebsite",
  },
];

export function Projects() {
  return (
    <Panel title="PROJECTS">
      <div
        style={{
          //   height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
          padding: "1rem",
        }}
      >
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div style={{ flexGrow: 1 }}>
              <h3 className="neon">{project.name}</h3>
              <p style={{ textAlign: "center" }}>{project.description}</p>
            </div>
            <div className="project-languages">
              {project.languages.map((lang) => (
                <span key={lang} className="language-tag">
                  {lang}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Panel>
  );
}
