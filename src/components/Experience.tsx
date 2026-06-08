import React from "react";
import { Reveal } from "@/components/Reveal";

const impactBullets = [
  "Shipped LangGraph and LangChain multi-step agents including a production natural-language-to-SQL pipeline — 65% adoption among 50+ enterprise users in Q1 post-launch.",
  "Built ReAct-loop agentic workflows with tool-calling, AWS S3 document storage, and Lambda triggers for serverless ingestion and inference pipelines.",
  "Architected RAG with FAISS and ChromaDB (text-embedding-ada-002); hybrid retrieval and chunk tuning improved grounding on domain-specific production queries.",
  "Developed 80+ async FastAPI endpoints (JWT, RBAC, Redis) at sub-200ms p95; optimised PostgreSQL from 12s to 6.6s dashboard load (45% faster).",
  "Deployed GenAI on AWS ECS with Docker and CI/CD — 99.9% uptime across 100+ instances; CloudWatch observability for token cost, latency, and error rates.",
];

const stack = [
  "Python", "FastAPI", "LangChain", "LangGraph", "GPT-4o", "Claude",
  "RAG", "FAISS", "ChromaDB", "PostgreSQL", "Redis", "DynamoDB",
  "AWS ECS", "S3", "Lambda", "CloudWatch", "Docker", "React.js",
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
