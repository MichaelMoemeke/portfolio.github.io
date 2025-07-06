import { useScrollSpy } from "../hooks/useScrollSpy";

const navigationItems = [
  { label: "HOME", id: "home" },
  { label: "ABOUT", id: "about" },
  { label: "PROJECTS", id: "projects" },
  { label: "SKILLS", id: "skills" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "CONTACT", id: "contact" },
];

export function Navigation() {
  const sectionIds = navigationItems.map((item) => item.id);
  const activeId = useScrollSpy(sectionIds, {
    rootMargin: "-120px 0px -80% 0px",
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav className="navigation-links">
      {navigationItems.map((item) => (
        <a
          key={item.label}
          href={`#${item.id}`}
          onClick={(e) => handleScroll(e, item.id)}
          className={`neon ${activeId === item.id ? "active-link" : ""}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
