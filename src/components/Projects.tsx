import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ─── Data ─────────────────────────────────────────────────────────────── */
interface Project {
  title: string;
  tag: string;
  problem: string;
  outcomes: string[];
  stack: string[];
  previewRoute?: string;
  githubUrl?: string;
  featured?: boolean;
  screenshot?: string;
}

const projects: Project[] = [
  {
    title: "HyphenView",
    tag: "Production · AI Analytics",
    featured: true,
    screenshot: "/Hyphen_Screenshots/Hyphen_Dashboard.png",
    problem:
      "Non-technical users needed business insights without writing SQL. Required a system that translates natural language into accurate queries and serves results reliably at enterprise scale.",
    outcomes: [
      "65% adoption rate across 50+ active enterprise users",
      "LangChain multi-agent workflows with GPT-4 and Claude",
      "40+ async API endpoints with streaming LLM responses",
      "Text-to-SQL with 90% query accuracy on production data",
    ],
    stack: ["Python", "FastAPI", "LangChain", "OpenAI", "Anthropic", "PostgreSQL", "Redis", "React", "TypeScript"],
    previewRoute: "/projects/hyphenview",
  },
  {
    title: "Smart Job Hunter",
    tag: "Personal · Agentic AI",
    problem:
      "Job seekers waste hours filtering mismatched roles. Needed an autonomous agent that fetches live postings, matches against a resume, and explains its reasoning.",
    outcomes: [
      "Autonomous agent with tool-calling via LangChain AgentExecutor",
      "Resume-aware semantic matching with explainable ranking",
      "Multi-step reasoning with structured output and LLaMA-3",
    ],
    stack: ["Python", "LangChain", "LLaMA-3", "Groq", "Tavily API", "Streamlit"],
    previewRoute: "/projects/smart-job-hunter",
    githubUrl: "https://github.com/YuvrajJais9257",
  },
  {
    title: "AI Budget Shopping Assistant",
    tag: "Personal · Tool-Calling Agent",
    problem:
      "Users struggle to optimize purchases within a budget across many products. Needed deterministic budget logic combined with LLM reasoning.",
    outcomes: [
      "Intent extraction + budget allocation with structured outputs",
      "Tool-calling agent ranking options across product categories",
      "Hybrid: deterministic constraints + LLM reasoning",
    ],
    stack: ["Python", "LLM APIs", "Tool-Calling", "Structured Outputs", "Ranking Pipeline"],
  },
  {
    title: "Personal AI Knowledge Base",
    tag: "Personal · RAG",
    problem:
      "Personal documents are hard to search and synthesize manually. Needed a full-stack RAG app with proper ingestion, retrieval, and streaming chat.",
    outcomes: [
      "End-to-end RAG: ingestion → chunking → embedding → retrieval",
      "Streaming chat interface with source attribution",
      "ChromaDB vector store with semantic search",
    ],
    stack: ["FastAPI", "LangChain", "ChromaDB", "React", "Python", "Streaming"],
  },
];

/* ─── Browser mockup wrapper ─────────────────────────────────────────────── */
const BrowserMockup = ({ src, alt }: { src: string; alt: string }) => (
  <div className="browser-frame w-full">
    <div className="browser-bar">
      <div className="browser-dot" />
      <div className="browser-dot" />
      <div className="browser-dot" />
      <div className="flex-1 mx-3 h-5 rounded bg-border/60 text-[10px] text-muted-foreground
        flex items-center px-2 truncate select-none">
        hyphenview.app/dashboard
      </div>
    </div>
    <img
      src={src}
      alt={alt}
      className="w-full object-cover object-top"
      style={{ maxHeight: "400px" }}
      loading="lazy"
    />
  </div>
);

/* ─── Featured card (HyphenView) ─────────────────────────────────────────── */
const FeaturedCard = ({ project }: { project: Project }) => (
  <div className="group col-span-full border border-white/10 rounded-lg overflow-hidden
    bg-card hover:border-foreground/20 transition-base">

    {/* Screenshot */}
    {project.screenshot && (
      <div className="p-4 pb-0 bg-muted/20">
        <BrowserMockup src={project.screenshot} alt={`${project.title} dashboard`} />
      </div>
    )}

    {/* Content */}
    <div className="p-8 md:p-10">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#3b82f6] mb-2 block">
            {project.tag}
          </span>
          <h3 className="text-foreground text-xl font-semibold">{project.title}</h3>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          {project.previewRoute && (
            <Link to={project.previewRoute}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold rounded
                bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-base">
              Case Study
              <ArrowUpRight size={13} />
            </Link>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-[65ch]">
        {project.problem}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: "Adoption", value: "65%" },
          { label: "Users", value: "50+" },
          { label: "Endpoints", value: "40+" },
          { label: "SQL Accuracy", value: "90%" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-md border border-white/10 bg-background p-3">
            <p className="text-lg font-semibold tracking-tight text-foreground">{kpi.value}</p>
            <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{kpi.label}</p>
          </div>
        ))}
      </div>

      {/* Outcomes — 2-col grid on md */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
        {project.outcomes.map((o, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <span className="mt-[9px] w-[3px] h-[3px] rounded-full bg-foreground/60 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{o}</span>
          </div>
        ))}
      </div>

      {/* Stack chips */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((t, i) => (
          <span key={i}
            className="px-2.5 py-1 text-[12px] font-medium rounded border border-white/10
              bg-background text-muted-foreground">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Regular bento card ─────────────────────────────────────────────────── */
const BentoCard = ({ project }: { project: Project }) => (
  <div className="group flex flex-col border border-white/10 rounded-lg p-6 bg-card
    hover:border-foreground/20 transition-base">

    <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-3">
      {project.tag}
    </span>

    <h3 className="text-base font-semibold text-foreground mb-3">{project.title}</h3>

    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
      {project.problem}
    </p>

    {/* Outcomes */}
    <ul className="space-y-2 mb-5">
      {project.outcomes.map((o, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="mt-[9px] w-[3px] h-[3px] rounded-full bg-foreground/60 flex-shrink-0" />
          <span className="text-[13px] text-muted-foreground">{o}</span>
        </li>
      ))}
    </ul>

    {/* Stack chips */}
    <div className="flex flex-wrap gap-1.5 mb-5">
      {project.stack.map((t, i) => (
        <span key={i}
            className="px-2 py-0.5 text-[11px] font-medium rounded border border-white/10
            bg-background text-muted-foreground">
          {t}
        </span>
      ))}
    </div>

    {/* Actions */}
    <div className="flex gap-4 mt-auto pt-2 border-t border-white/10">
      {project.previewRoute && (
        <Link to={project.previewRoute}
          className="inline-flex items-center gap-1 text-[13px] font-medium text-muted-foreground
            hover:text-foreground transition-base">
          <ExternalLink size={12} />
          Case Study
        </Link>
      )}
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[13px] font-medium text-muted-foreground
            hover:text-foreground transition-base">
          <Github size={12} />
          GitHub
        </a>
      )}
    </div>
  </div>
);

/* ─── Section ────────────────────────────────────────────────────────────── */
export const Projects = () => {
  const featured = projects.filter(p => p.featured);
  const rest     = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="shell-container">

        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
          Featured Projects
        </p>
        <h2 className="text-foreground mb-3">
          Production AI systems, not demos.
        </h2>
        <p className="text-base text-muted-foreground mb-14 max-w-[58ch]">
          Built to solve real problems, deployed to real users, maintained under
          production constraints.
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Featured spans full width */}
          {featured.map((p, i) => <FeaturedCard key={i} project={p} />)}
          {/* Rest in 2-col bento */}
          {rest.map((p, i) => <BentoCard key={i} project={p} />)}
        </div>
      </div>
    </section>
  );
};
