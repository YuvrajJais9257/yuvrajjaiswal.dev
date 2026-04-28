import React from "react";

const items = [
  "LLM evaluation frameworks and automated quality loops",
  "Advanced agentic patterns — planning, memory, multi-agent coordination",
  "Serverless AI deployments on AWS Lambda",
  "Streaming architectures for real-time LLM responses",
  "Open-source contributions to AI tooling",
];

export const CurrentlyExploring = () => (
  <section className="py-20 px-6 bg-background border-t border-border">
    <div className="max-w-5xl mx-auto">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
        Currently Exploring
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span key={i}
            className="px-3.5 py-1.5 text-[13px] text-muted-foreground border border-border rounded-full
              hover:border-foreground/25 hover:text-foreground transition-base cursor-default">
            {item}
          </span>
        ))}
      </div>
    </div>
  </section>
);
