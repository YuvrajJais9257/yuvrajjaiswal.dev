import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="py-8 bg-background border-t border-white/10">
    <div className="shell-container flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <p className="text-[13px] text-muted-foreground">
          © 2025 Yuvraj Jaiswal · AI/LLM Engineer
        </p>
        <p className="text-[11px] text-muted-foreground mt-1 max-w-sm">
          Screenshots from UAT/demo environments — portfolio purposes only.
        </p>
      </div>
      <div className="flex items-center gap-5">
        {[
          { href: "https://github.com/YuvrajJais9257", icon: <Github size={16} />, label: "GitHub" },
          { href: "https://linkedin.com/in/yuvraj-jaiswal-65ab5a217", icon: <Linkedin size={16} />, label: "LinkedIn" },
          { href: "mailto:yuvraj8257@gmail.com", icon: <Mail size={16} />, label: "Email" },
        ].map(({ href, icon, label }) => (
          <a key={label} href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="text-muted-foreground hover:text-foreground transition-base">
            {icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
