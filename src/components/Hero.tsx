import React from "react";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

const RESUME_PATH = "/Yuvraj_Jaiswal_AI_LLM_Engineer.pdf";

const metrics = [
  { value: "~3 yrs", label: "production AI & backend" },
  { value: "65%", label: "HyphenView adoption (Q1)" },
  { value: "50+", label: "enterprise users served" },
  { value: "80+", label: "async APIs in production" },
  { value: "99.9%", label: "uptime on ECS deploys" },
];

export const Hero = () => {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center pt-28 pb-24">
      <div className="hero-accent" aria-hidden="true" />

      <div className="shell-container relative z-10">

        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase border border-border text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" aria-hidden="true" />
            Open to Python backend, AI application & full-stack roles
          </span>
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-4">
          AI / LLM Engineer · Agentic Systems · RAG · Full Stack
        </p>

        <h1 className="anim-hero-title text-foreground mb-6">
          Yuvraj Jaiswal
        </h1>

        <p className="text-lg md:text-xl font-medium text-foreground/90 mb-5 tracking-tight max-w-[62ch]">
          I ship LangChain and LangGraph agentic systems, RAG pipelines, and
          cloud-native Python backends that hold up after launch.
        </p>

        <p className="text-base text-muted-foreground leading-relaxed mb-12 max-w-[68ch]">
          Almost 3 years building production LLM products — from prompt layers and
          vector stores to FastAPI services on AWS. End-to-end ownership from model
          integration to React frontends, with observability and cost control built in.
        </p>

        <div className="anim-hero-cta flex flex-wrap items-center gap-3 mb-16">
          <button
            onClick={() => scrollTo("#projects")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-base"
          >
            View Projects
            <ArrowRight size={14} aria-hidden="true" />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold border border-border text-foreground hover:bg-muted transition-base"
          >
            Contact Me
          </button>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            download="Yuvraj_Jaiswal_AI_LLM_Engineer.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-base"
          >
            <Download size={14} aria-hidden="true" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-5 mb-16">
          {[
            { href: "https://github.com/YuvrajJais9257", icon: <Github size={18} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/yuvraj-jaiswal-65ab5a217/", icon: <Linkedin size={18} />, label: "LinkedIn" },
            { href: "mailto:yuvraj8257@gmail.com", icon: <Mail size={18} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-muted-foreground hover:text-foreground transition-base"
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-8" aria-label="Key metrics">
          <div className="flex flex-wrap gap-x-10 gap-y-5">
            {metrics.map((m) => (
              <div key={m.label}>
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
