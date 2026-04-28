import React from "react";

const bullets = [
  {
    text: "Integrated Anthropic Claude and OpenAI GPT-4 into production workflows — prompt versioning, fallback chains, and structured cost tracking.",
  },
  {
    text: "Built LangChain-based autonomous agents for natural-language analytics: tool-calling, structured output parsing, multi-step reasoning.",
  },
  {
    text: "Designed RAG pipelines with FAISS and ChromaDB — ingestion, chunking strategy, embedding selection, retrieval, and re-ranking.",
  },
  {
    text: "Developed 80+ async FastAPI endpoints with JWT auth, RBAC, Redis caching, and rate limiting for high-throughput AI services.",
  },
  {
    text: "Optimized PostgreSQL query performance by 45% (12s → 6.6s) through indexing, query rewriting, and connection pooling.",
  },
  {
    text: "Implemented structured logging for LLM cost and latency tracking across all AI endpoints.",
  },
  {
    text: "Deployed 100+ application instances via Docker and automated CI/CD pipelines — 99.9% uptime maintained.",
  },
];

const stack = [
  "Python", "FastAPI", "Asyncio", "LangChain",
  "OpenAI GPT-4", "Anthropic Claude", "RAG", "FAISS", "ChromaDB",
  "PostgreSQL", "Redis", "Docker", "CI/CD", "React", "TypeScript",
];

export const Experience = () => (
  <section id="experience" className="py-28 px-6 bg-card">
    <div className="max-w-5xl mx-auto">

      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
        Experience
      </p>

      {/* Single role card */}
      <div className="border border-border rounded-lg p-8 md:p-10">

        {/* Role header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-8">
          <div>
            <h3 className="text-foreground">Python Developer — AI/LLM & Backend</h3>
            <p className="text-sm text-muted-foreground mt-1">Erasmith Pvt Ltd</p>
          </div>
          <span className="text-[13px] text-muted-foreground whitespace-nowrap pt-0.5">
            Feb 2024 – Present
          </span>
        </div>

        {/* Impact bullets */}
        <ul className="space-y-3.5 mb-10">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3.5">
              <span className="mt-[10px] w-[3px] h-[3px] rounded-full bg-[#3b82f6] flex-shrink-0" />
              <span className="text-sm text-muted-foreground leading-relaxed">{b.text}</span>
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="border-t border-border pt-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-4">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.map((t, i) => (
              <span key={i}
                className="px-2.5 py-1 text-[12px] font-medium rounded border border-border
                  bg-background text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-base">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
