import React from "react";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

export const Reveal = ({ children, className }: RevealProps) => {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div ref={ref} className={cn("reveal-on-scroll", visible && "is-visible", className)}>
      {children}
    </div>
  );
};
