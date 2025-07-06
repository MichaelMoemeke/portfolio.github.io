import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

export function AnimatedSection({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  const { ref, inView } = useInView();
  return (
    <section
      id={id}
      ref={ref}
      style={{
        opacity: 0,
        transition: "opacity 0.5s",
        ...(inView && { opacity: 1 }),
      }}
    >
      {children}
    </section>
  );
}
