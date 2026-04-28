import React from "react";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

const metrics = [
  { value: "2+",    label: "yrs production AI" },
  { value: "65%",   label: "AI feature adoption" },
  { value: "50+",   label: "enterprise users" },
  { value: "80+",   label: "async APIs shipped" },
  { value: "99.9%", label: "uptime" },
];

export const Hero = () => {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-20">
      <div className="max-w-5xl mx-auto w-full">

        {/* Availability pill */}
        <div className="anim-fade-up anim-d1 mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase
            border border-border text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to AI/LLM · Python Backend roles
          </span>
        </div>

        {/* H1 — display size, dramatic */}
        <h1 className="anim-fade-up anim-d2 text-foreground mb-5">
          Yuvraj Jaiswal
        </h1>

        {/* Role line */}
        <p className="anim-fade-up anim-d3 text-lg md:text-xl font-medium text-muted-foreground mb-6 tracking-tight">
          AI/LLM Engineer &nbsp;·&nbsp; Python Backend &nbsp;·&nbsp; RAG · Agents · FastAPI
        </p>

        {/* Summary — max 68ch */}
        <p className="anim-fade-up anim-d4 text-base text-muted-foreground leading-relaxed mb-10 max-w-[62ch]">
          I build production AI applications with Python, FastAPI, RAG, and agentic
          workflows. My focus is reliability, grounded outputs, and turning LLM
          prototypes into systems real users adopt.
        </p>

        {/* CTAs */}
        <div className="anim-fade-up anim-d5 flex flex-wrap items-center gap-3 mb-14">
          <button
            onClick={() => scrollTo("#projects")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold
              bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-base"
          >
            View Projects
            <ArrowRight size={14} />
          </button>
          <a
            href="/Yuvraj_Jaiswal_AI_LLM_Engineer_2.5_Years.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Yuvraj_Jaiswal_AI_LLM_Engineer_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold
              border border-border text-foreground hover:bg-muted transition-base"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="anim-fade-up anim-d5 flex items-center gap-5 mb-16">
          {[
            { href: "https://github.com/YuvrajJais9257", icon: <Github size={18} />, label: "GitHub" },
            { href: "https://linkedin.com/in/yuvraj-jaiswal-65ab5a217", icon: <Linkedin size={18} />, label: "LinkedIn" },
            { href: "mailto:yuvraj8257@gmail.com", icon: <Mail size={18} />, label: "Email" },
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

        {/* Metrics strip */}
        <div className="anim-fade-up anim-d6 border-t border-border pt-8">
          <div className="flex flex-wrap gap-x-10 gap-y-5">
            {metrics.map((m, i) => (
              <div key={i}>
                <div className="text-2xl font-bold tracking-tight text-foreground">{m.value}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5 uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
