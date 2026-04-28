import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark]       = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    setDark(prev => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  const navItems = [
    { href: "#about",      label: "About"      },
    { href: "#experience", label: "Experience" },
    { href: "#projects",   label: "Projects"   },
    { href: "#skills",     label: "Skills"     },
    { href: "#contact",    label: "Contact"    },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
      scrolled
        ? "bg-background/90 backdrop-blur-xl border-b border-border"
        : "bg-transparent"
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">

        {/* Wordmark */}
        <span className="text-sm font-semibold tracking-tight text-foreground select-none">
          YJ
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-base font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className="p-1.5 text-muted-foreground hover:text-foreground transition-base rounded"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="mailto:yuvraj8257@gmail.com"
            className="px-4 py-1.5 text-[13px] font-semibold rounded bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-base"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleDark} aria-label="Toggle theme"
            className="p-1.5 text-muted-foreground hover:text-foreground transition-base">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-foreground transition-base">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map(item => (
              <button key={item.href} onClick={() => scrollTo(item.href)}
                className="text-left py-2 text-sm text-muted-foreground hover:text-foreground transition-base">
                {item.label}
              </button>
            ))}
            <a href="mailto:yuvraj8257@gmail.com"
              className="mt-3 py-2 text-center text-sm font-semibold rounded bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-base">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
