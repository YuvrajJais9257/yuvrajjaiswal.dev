import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const RESUME_PATH = "/Yuvraj_Jaiswal_Python_Backend_Engineer.pdf";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = stored ? stored === "dark" : true;
    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-base ${
        scrolled
          ? "bg-background/92 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="shell-container flex items-center justify-between h-16">

        <button
          onClick={() => scrollTo("#top")}
          className="text-sm font-semibold tracking-tight text-foreground select-none hover:opacity-80 transition-base"
          aria-label="Scroll to top"
        >
          YJ
        </button>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-base font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-base rounded border border-transparent hover:border-border"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-base"
          >
            Resume
          </a>
          <a
            href="mailto:yuvraj8257@gmail.com"
            className="px-4 py-1.5 text-[13px] font-semibold rounded bg-accent text-accent-foreground hover:opacity-90 transition-base"
          >
            Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-base"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="p-1.5 text-foreground transition-base border border-transparent rounded hover:border-border"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="shell-container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left py-2 text-sm text-muted-foreground hover:text-foreground transition-base"
              >
                {item.label}
              </button>
            ))}
            <a
              href="mailto:yuvraj8257@gmail.com"
              className="mt-3 py-2 text-center text-sm font-semibold rounded bg-accent text-accent-foreground hover:opacity-90 transition-base"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
