import React from "react";
import { Reveal } from "@/components/Reveal";

const impactBullets = [
  "Built HyphenView, an AI Text-to-SQL analytics platform — 65% adoption among 50+ enterprise users within Q1 post-launch.",
  "Developed and maintained 80+ REST APIs using FastAPI for analytics, workflow automation, authentication, and AI-powered features.",
  "Built production RAG pipelines with LangChain, LangGraph, ChromaDB, and FAISS for document intelligence and natural language querying.",
  "Implemented JWT authentication, RBAC authorization, Redis caching, and structured logging for enterprise deployments.",
  "Optimized PostgreSQL queries and backend workflows, reducing dashboard load times by 45%.",
  "Built a FastAPI microservice for productivity analytics, KPI tracking, ownership assignment, and deadline alerts.",
  "Containerized applications with Docker and integrated AWS S3 for document management and storage.",
];

const stack = [
  "Python", "FastAPI", "LangChain", "LangGraph", "GPT-4o", "Claude",
  "RAG", "FAISS", "ChromaDB", "PostgreSQL", "Redis",
  "AWS S3", "Docker", "React.js", "JWT", "RBAC",
];

export const Experience = () => (
  <section id="experience" className="py-32 bg-background">
    <div className="shell-container">

      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
        Experience
      </p>

      <Reveal>
        <article className="border border-border rounded-lg p-8 md:p-10 bg-card">

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-8">
            <div>
              <h3 className="text-foreground">AI / LLM Engineer</h3>
              <p className="text-sm text-muted-foreground mt-1">Erasmith Pvt Ltd · Noida, India</p>
            </div>
            <time className="text-[13px] text-muted-foreground whitespace-nowrap pt-0.5" dateTime="2024-02">
              Feb 2024 – Present
            </time>
          </div>

          <ul className="space-y-3.5 mb-10">
            {impactBullets.map((text) => (
              <li key={text} className="flex items-start gap-3.5">
                <span className="mt-[10px] w-[3px] h-[3px] rounded-full bg-foreground/60 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-border pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-4">
              Core stack at Erasmith
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[12px] font-medium rounded border border-border bg-background text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Reveal>
    </div>
  </section>
);
