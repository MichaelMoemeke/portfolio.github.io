import { Panel } from "./Panel";
import {
  FaBuilding,
  FaAmazon,
  FaUniversity,
  FaGlobe,
  FaFlask,
} from "react-icons/fa";
import type { ReactElement } from "react";
import { useInView } from "../hooks/useInView";

type ExperienceEntry = {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
  icon: ReactElement;
  url?: string;
};

const experiences: ExperienceEntry[] = [
  {
    company: "Portnoff Law Associates",
    location: "King of Prussia, PA",
    role: "Full Stack Developer",
    period: "March 2025 - Present",
    icon: <FaBuilding />,
    bullets: [
      "Automating manual processes to improve efficiency and accuracy of the firm's operations.",
      "Documenting company internal processes and procedures for easy reference and training.",
      "Revamping the company's internal systems using modern technologies.",
    ],
  },
  {
    company: "Amazon",
    location: "New York City, NY",
    role: "Software Development Engineer Intern",
    period: "June 2024 – September 2024",
    icon: <FaAmazon />,
    bullets: [
      "Built a tool for simulating and testing the workflow of my team's product before it was deployed to end users.",
      "Used the JUnit framework to implement unit testing in Java, ensuring good quality of the code written.",
      "Collaborated with team and stakeholders to define and deliver priority requirements with weekly milestones.",
    ],
  },
  {
    company: "University of Pennsylvania",
    location: "Philadelphia, PA",
    role: "Software Engineer",
    period: "April 2024 – June 2024",
    icon: <FaUniversity />,
    bullets: [
      "Remodeled a responsive educational platform using a quiz-based learning approach for radiology trainees, improving their speed and accuracy.",
      "Ported the frontend from PHP to React and integrated the existing PHP backend, ensuring compatibility with MySQL Server.",
      "Collaborated with backend developers to refine REST endpoints for data retrieval and submission of user modules.",
    ],
  },
  {
    company: "WazobiaCode",
    location: "Philadelphia, PA",
    role: "Co-Founder • Instructor • Web Developer",
    period: "April 2024 – Present",
    icon: <FaGlobe />,
    url: "https://wazobiacode.com",
    bullets: [
      "Established a nonprofit teaching over 150 Nigerian students web development focused on React, HTML, CSS and JavaScript.",
      "Built the frontend and backend of the website using modern web technologies.",
      "Produced 10+ hours of original video content covering React, non-relational databases, Express and Node.js.",
      "Pioneered remote learning via Telegram, facilitating interactive lectures and providing mentorship and real-time answers to student questions.",
    ],
  },
  {
    company: "Drexel University Interactive Systems for Healthcare Lab",
    location: "Philadelphia, PA",
    role: "Android Developer • Research Assistant",
    period: "May 2023 – Present",
    icon: <FaFlask />,
    bullets: [
      "Spearheaded the development of a health checklist app in Java empowering doctors to manage patient treatment protocols.",
      "Worked closely with a cross-functional team to identify, prioritise and resolve user-reported functionality bugs weekly, ensuring a seamless user experience.",
      "Proactively contributed to the app's aesthetics, creating an enhanced and user-friendly interface.",
    ],
  },
];

function TimelineItem({ exp, idx }: { exp: ExperienceEntry; idx: number }) {
  const { ref, inView } = useInView();
  const side = idx % 2 === 0 ? "right" : "left";
  return (
    <div
      ref={ref as any}
      className={`timeline-item ${side} ${inView ? "show" : ""}`}
      style={{ animationDelay: `${idx * 0.15}s` }}
    >
      <span className="timeline-period neon">{exp.period}</span>
      <div
        className="timeline-icon"
        style={{ "--glow-color": "#ff008c" } as React.CSSProperties}
      >
        {exp.icon}
      </div>
      <div className="timeline-content">
        <h3 className="timeline-title neon">{exp.company}</h3>
        <h4 className="timeline-subtitle">{exp.location}</h4>
        <p
          style={{ margin: "0 0 0.5rem 0", fontSize: "0.85rem", opacity: 0.9 }}
        >
          {exp.role}
        </p>
        <ul>
          {exp.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <Panel title="EXPERIENCE">
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <TimelineItem key={exp.company} exp={exp} idx={idx} />
        ))}
      </div>
    </Panel>
  );
}
