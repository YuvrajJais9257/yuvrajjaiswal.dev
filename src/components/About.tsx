import React from "react";

const focusAreas = [
  "LangGraph & LangChain agents — tool-calling, ReAct loops, multi-step orchestration",
  "RAG pipelines — chunking, vector search, ChromaDB/FAISS, document intelligence",
  "Production LLM integration — GPT-4o, Claude, prompt engineering, structured outputs",
  "FastAPI backends — 80+ REST APIs, JWT, RBAC, Redis caching, async workflows",
  "PostgreSQL & performance — schema design, query optimization, 45% load-time gains",
  "Cloud & deployment — Docker containerization, AWS S3, CI/CD, full-stack React delivery",
];

export const About = () => (
  <section id="about" className="py-32 bg-background">
    <div className="shell-container">

      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
        About
      </p>

      <h2 className="text-foreground mb-8 max-w-[24ch]">
        Production AI engineering, end to end.
      </h2>

      <div className="space-y-5 text-base text-muted-foreground mb-14 max-w-[65ch]">
        <p>
          AI / LLM Engineer with 2+ years shipping agentic systems, RAG pipelines,
          and Python backends at Erasmith Pvt Ltd. I built HyphenView — an AI
          Text-to-SQL platform with 65% adoption among 50+ enterprise users — plus
          a LangGraph job-search agent and a live-deployed AI shopping assistant
          with tool-calling workflows.
        </p>
        <p>
          I work across the full stack: prompt engineering, vector store design,
          FastAPI services, PostgreSQL optimization, and React frontends. Also
          built EraDesk, an internal productivity platform with 5-level RBAC and
          Excel import pipelines, and a FastAPI microservice for KPI analytics
          and ownership tracking.
        </p>
        <p className="text-foreground/80 font-medium">
          Targeting AI/LLM Engineer, Python Backend, and full-stack roles.
          Open to relocation pan-India.
        </p>
      </div>

      <div className="border-t border-border pt-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
          What I build
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-12">
          {focusAreas.map((area) => (
            <div key={area} className="flex items-start gap-3">
              <span className="mt-[9px] w-[3px] h-[3px] rounded-full bg-foreground/60 flex-shrink-0" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
