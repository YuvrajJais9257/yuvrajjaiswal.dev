import React from "react";

const groups = [
  {
    title: "AI / LLM",
    skills: [
      "OpenAI GPT-4", "Anthropic Claude", "LangChain", "RAG Pipelines",
      "Prompt Engineering", "Tool-Calling Agents", "Structured Outputs",
      "Guardrails", "Vector Search", "RAG Evaluation", "FAISS", "ChromaDB",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Python", "FastAPI", "Flask", "Asyncio",
      "REST APIs", "JWT", "RBAC", "Redis", "Webhooks", "Rate Limiting",
    ],
  },
  {
    title: "Data / Infra",
    skills: [
      "PostgreSQL", "MySQL", "MongoDB", "Pinecone",
      "Docker", "AWS Lambda", "S3", "CI/CD", "Nginx", "Pandas",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
];

export const Skills = () => (
  <section id="skills" className="py-28 px-6 bg-card">
    <div className="max-w-5xl mx-auto">

      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
        Skills
      </p>
      <h2 className="text-foreground mb-14">Technical stack</h2>

      {/* 4-col bento grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((g, i) => (
          <div key={i}
            className="border border-border rounded-lg p-5 bg-background
              hover:border-foreground/20 transition-base">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#3b82f6] mb-4">
              {g.title}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {g.skills.map((s, j) => (
                <span key={j}
                  className="px-2.5 py-1 text-[12px] font-medium rounded border border-border
                    bg-card text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-base cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
