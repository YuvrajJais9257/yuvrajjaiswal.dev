import React from "react";
import { Github, Linkedin, Mail, MapPin, Download, ArrowRight, Phone } from "lucide-react";

const RESUME_PATH = "/Yuvraj_Jaiswal_Python_Backend_Engineer.pdf";

export const Contact = () => (
  <section id="contact" className="py-32 bg-card border-t border-border">
    <div className="shell-container">

      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
        Contact
      </p>

      <h2 className="text-foreground mb-4">Open to the right opportunity.</h2>

      <p className="text-base text-muted-foreground mb-10 max-w-[58ch]">
        Open to AI/LLM Engineer, Python backend, and full-stack roles.
        Currently at Erasmith Pvt Ltd. Open to relocation pan-India —
        Bangalore, Hyderabad, Pune, Gurgaon, or remote-friendly.
      </p>

      <div className="flex flex-wrap gap-3 mb-14">
        <a
          href="mailto:yuvraj8257@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded bg-accent text-accent-foreground hover:opacity-90 transition-base"
        >
          yuvraj8257@gmail.com
          <ArrowRight size={14} aria-hidden="true" />
        </a>
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          download="Yuvraj_Jaiswal_AI_LLM_Engineer.pdf"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded border border-border text-foreground hover:bg-muted transition-base"
        >
          <Download size={14} aria-hidden="true" />
          Download Resume
        </a>
      </div>

      <div className="flex flex-wrap gap-6">
        {[
          { href: "https://github.com/YuvrajJais9257", icon: <Github size={15} />, label: "GitHub" },
          { href: "https://www.linkedin.com/in/yuvraj-jaiswal-65ab5a217/", icon: <Linkedin size={15} />, label: "LinkedIn" },
        ].map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-base"
          >
            {icon}
            {label}
          </a>
        ))}
        <a
          href="mailto:yuvraj8257@gmail.com"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-base"
        >
          <Mail size={15} aria-hidden="true" />
          Email
        </a>
        <a
          href="tel:+917838379576"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-base"
        >
          <Phone size={15} aria-hidden="true" />
          +91 78383 79576
        </a>
        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={15} aria-hidden="true" />
          Noida, India · Open to pan-India relocation
        </span>
      </div>
    </div>
  </section>
);
