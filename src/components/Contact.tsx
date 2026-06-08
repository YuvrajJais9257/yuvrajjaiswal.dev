import React from "react";
import { Github, Linkedin, Mail, MapPin, Clock, Download, ArrowRight } from "lucide-react";

export const Contact = () => (
  <section id="contact" className="py-32 bg-card border-t border-white/10">
    <div className="shell-container">

      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
        Contact
      </p>

      <h2 className="text-foreground mb-4">Let's work together.</h2>

      <p className="text-base text-muted-foreground mb-10 max-w-[55ch]">
        Open to AI/LLM Engineer, Applied AI Engineer, and Python Backend roles.
        Immediate to 15-day notice. Remote or Noida / Bangalore / Gurgaon.
      </p>

      {/* Primary CTAs */}
      <div className="flex flex-wrap gap-3 mb-14">
        <a
          href="mailto:yuvraj8257@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded
            bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-base"
        >
          yuvraj8257@gmail.com
          <ArrowRight size={14} />
        </a>
        <a
          href="/Yuvraj_Jaiswal_AI_LLM_Engineer_2.5_Years.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Yuvraj_Jaiswal_AI_LLM_Engineer_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded
            border border-white/10 text-foreground hover:bg-muted transition-base"
        >
          <Download size={14} />
          Download Resume
        </a>
      </div>

      {/* Secondary links */}
      <div className="flex flex-wrap gap-6">
        {[
          { href: "https://github.com/YuvrajJais9257", icon: <Github size={15} />, label: "GitHub" },
          { href: "https://linkedin.com/in/yuvraj-jaiswal-65ab5a217", icon: <Linkedin size={15} />, label: "LinkedIn" },
        ].map(({ href, icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-base">
            {icon}
            {label}
          </a>
        ))}
        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={15} /> Noida, India
        </span>
        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Clock size={15} /> Immediate – 15 days notice
        </span>
      </div>
    </div>
  </section>
);
