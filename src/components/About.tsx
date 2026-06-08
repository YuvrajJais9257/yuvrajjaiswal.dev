import React from "react";

const focusAreas = [
  "LangGraph & LangChain multi-step agents — ReAct loops, tool-calling, self-correction",
  "RAG pipelines — chunking, hybrid retrieval, FAISS/ChromaDB, S3 + Lambda ingestion",
  "Production LLM layers — GPT-4o, Claude, schema-aware prompts, structured outputs",
  "Async FastAPI backends — JWT, RBAC, Redis, Pydantic, sub-200ms p95 under load",
  "AWS deployment — ECS, Lambda, S3, DynamoDB, CloudWatch cost & latency tracking",
  "Full-stack delivery — React.js UIs wired to LLM-backed APIs with real-time feedback",
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
          AI / LLM Engineer with almost 3 years shipping agentic systems, RAG
          pipelines, and Python backends on AWS. I built HyphenView — an AI
          Text-to-SQL platform with 65% adoption among 50+ enterprise users — and
          a LangGraph autonomous job-hunting system with real-time tool-calling and
          embedding-based skill matching.
        </p>
        <p>
          I work across the full LLM lifecycle: prompt engineering, vector store
          design, multi-step orchestration, observability, and deployment. Strong
          full-stack capability (React, FastAPI, PostgreSQL) so features ship as
          complete products, not disconnected API experiments.
        </p>
        <p className="text-foreground/80 font-medium">
          Targeting Python backend, AI application, and full-stack roles where I can
          own model integration through user-facing delivery.
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
