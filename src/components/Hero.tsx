import React from "react";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

const metrics = [
  { value: "2+",    label: "years building production AI" },
  { value: "65%",   label: "feature adoption at scale" },
  { value: "50+",   label: "enterprise users served" },
  { value: "80+",   label: "async APIs in production" },
  { value: "99.9%", label: "uptime" },
];

export const Hero = () => {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-24">
      <div className="shell-container">

        {/* Availability pill */}
        <div className="anim-fade-up anim-d1 mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase
            border border-white/10 text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
            Open to AI/LLM · Python Backend roles
          </span>
        </div>

        {/* H1 — display size, dramatic */}
        <h1 className="anim-fade-up anim-d2 text-foreground mb-6 text-center">
          Yuvraj Jaiswal
        </h1>

        {/* Role line */}
        <p className="anim-fade-up anim-d3 text-lg md:text-xl font-medium text-muted-foreground mb-6 tracking-tight max-w-[60ch]">
          I build reliable AI products that turn LLM workflows into measurable business outcomes.
        </p>

        {/* Summary — max 68ch */}
        <p className="anim-fade-up anim-d4 text-base text-muted-foreground leading-relaxed mb-12 max-w-[68ch]">
          AI/LLM Engineer with a backend foundation in Python and FastAPI. I focus on
          grounded outputs, observability, and production constraints so AI systems stay
          dependable after launch, not just impressive in demos.
        </p>

        {/* CTAs */}
        <div className="anim-fade-up anim-d5 flex flex-wrap items-center gap-3 mb-16">
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
              border border-white/10 text-foreground hover:bg-muted transition-base"
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
        <div className="anim-fade-up anim-d6 border-t border-white/10 pt-8">
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
