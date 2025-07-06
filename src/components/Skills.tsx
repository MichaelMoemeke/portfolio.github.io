import { Panel } from "./Panel";
import { useState } from "react";
import {
  SiPython,
  SiKotlin,
  SiFlutter,
  SiDjango,
  SiDart,
  SiJunit5,
  SiPostman,
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiC,
} from "react-icons/si";

import {
  FaJava,
  FaHtml5,
  FaNodeJs,
  FaDocker,
  FaGit,
  FaPhp,
  FaAws,
  FaGithub,
  FaCss3,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Core Programming Languages",
    skills: [
      { name: "Python", icon: <SiPython />, color: "#3472A6" },
      { name: "Java", icon: <FaJava />, color: "#E76F00" },
      { name: "C", icon: <SiC />, color: "#A8B9CC" },
      { name: "Kotlin", icon: <SiKotlin />, color: "#7F52FF" },
      { name: "Dart", icon: <SiDart />, color: "#0175C2" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
      { name: "PHP", icon: <FaPhp />, color: "#8892BF" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Django", icon: <SiDjango />, color: "#2CAB4F" },
      { name: "Flutter", icon: <SiFlutter />, color: "#55C8F6" },
      { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#43853D" },
      { name: "Express", icon: <SiExpress />, color: "#8F8F8F" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#E3E3E3" },
    ],
  },
  {
    title: "UI & Styling",
    skills: [
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "HTML", icon: <FaHtml5 />, color: "#E44D26" },
      { name: "CSS", icon: <FaCss3 />, color: "#1572B6" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Git", icon: <FaGit />, color: "#F05032" },
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
      { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
      { name: "MySQL", icon: <SiMysql />, color: "#00618A" },
    ],
  },
  {
    title: "Testing & Version Control",
    skills: [
      { name: "JUnit", icon: <SiJunit5 />, color: "#85BC73" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "GitHub", icon: <FaGithub />, color: "#F5F5F5" },
    ],
  },
];

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const changeTab = (idx: number) => {
    if (idx === activeIndex) return;
    setPrevIndex(activeIndex);
    setActiveIndex(idx);
  };

  const direction = activeIndex > prevIndex ? "next" : "prev";

  const activeCategory = skillCategories[activeIndex];

  return (
    <Panel title="SKILLS">
      {/* Tabs navigation */}
      <div className="skills-tabs">
        {skillCategories.map((category, idx) => (
          <button
            key={category.title}
            className={`skills-tab ${idx === activeIndex ? "active" : ""}`}
            onClick={() => changeTab(idx)}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Active category */}
      <div className="skills-category">
        <div
          key={activeIndex}
          className={`skills-category-content ${
            direction === "next" ? "slide-in-left" : "slide-in-right"
          }`}
        >
          <h3 className="skills-category-title">{activeCategory.title}</h3>
          <div className="skill-icons-container">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-icon-card"
                style={{ "--glow-color": skill.color } as React.CSSProperties}
              >
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name-tooltip">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}
