import React from "react";

const focusAreas = [
  "Production LLM apps — prompt versioning, fallback chains, cost tracking",
  "RAG pipelines — ingestion, chunking, retrieval, re-ranking",
  "Agentic workflows — tool-calling, structured reasoning, multi-step",
  "Async FastAPI backends — JWT, RBAC, Redis caching, rate limiting",
  "LLM observability — latency logging, eval loops, output quality",
  "PostgreSQL optimization — indexing, query rewriting, connection pooling",
];

export const About = () => (
  <section id="about" className="py-32 bg-background">
    <div className="shell-container">

      {/* Label */}
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
        About
      </p>

      {/* Section heading */}
      <h2 className="text-foreground mb-8 max-w-[22ch]">
        AI product engineering meets backend reliability.
      </h2>

      {/* Body copy — max 68ch */}
      <div className="space-y-5 text-base text-muted-foreground mb-14 max-w-[65ch]">
        <p>
          Over 2+ years at Erasmith I've shipped production AI systems — not demos.
          That means real users, real data, and real failure modes. I've integrated
          GPT-4 and Claude into live workflows, built RAG pipelines serving 50+
          enterprise users, and maintained 80+ async API endpoints at 99.9% uptime.
        </p>
        <p>
          My focus is the hard parts: reliable LLM outputs, grounded retrieval,
          agents that don't hallucinate through tool calls, and backends that hold
          under load. I care about eval, observability, and the gap between
          "works in a notebook" and "works in production."
        </p>
      </div>

      {/* Focus areas */}
      <div className="border-t border-white/10 pt-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
          What I work on
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-12">
          {focusAreas.map((area, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-[9px] w-[3px] h-[3px] rounded-full bg-foreground/60 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
