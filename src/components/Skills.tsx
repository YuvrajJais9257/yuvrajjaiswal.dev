import React, { useState } from "react";

const groups = [
  {
    id: "ai",
    title: "AI / LLM & Agents",
    skills: [
      "LangChain", "LangGraph", "GPT-4o", "Claude", "Agentic Workflows",
      "ReAct Loop", "Tool-Calling", "Prompt Engineering", "Output Parsing",
    ],
  },
  {
    id: "rag",
    title: "RAG & Vector Search",
    skills: [
      "FAISS", "ChromaDB", "Hybrid Retrieval", "Chunking Strategy",
      "text-embedding-ada-002", "RAGAS Evaluation",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    skills: [
      "Python", "FastAPI", "Flask", "Asyncio", "REST APIs",
      "JWT", "RBAC", "Redis", "Pydantic", "Structured Logging",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Data",
    skills: [
      "AWS ECS", "S3", "Lambda", "DynamoDB", "CloudWatch",
      "PostgreSQL", "MongoDB", "Docker", "CI/CD", "Nginx",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    id: "languages",
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI / LLM" },
  { id: "backend", label: "Backend" },
  { id: "cloud", label: "Cloud" },
  { id: "frontend", label: "Frontend" },
];

export const Skills = () => {
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? groups
      : groups.filter((g) => g.id === active || g.id === "languages");

  return (
    <section id="skills" className="py-32 bg-card">
      <div className="shell-container">

        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
          Skills
        </p>
        <h2 className="text-foreground mb-3">Curated for backend & AI roles</h2>
        <p className="text-base text-muted-foreground mb-8 max-w-[55ch]">
          Grouped by relevance — filter to scan faster. No decorative motion,
          just clarity.
        </p>

        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter skills by category">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active === f.id}
              onClick={() => setActive(f.id)}
              className={`px-3 py-1.5 text-[12px] font-medium rounded-full border transition-base ${
                active === f.id
                  ? "border-foreground/30 bg-foreground text-background"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((g) => (
            <div
              key={g.title}
              className="border border-border rounded-lg p-5 bg-background"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
                {g.title}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-[12px] font-medium rounded border border-border bg-card text-muted-foreground"
                  >
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
};
