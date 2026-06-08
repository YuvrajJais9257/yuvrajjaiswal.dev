import React, { useState } from "react";
import { ExternalLink, Github, ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";

interface Project {
  title: string;
  tag: string;
  problem: string;
  built: string;
  outcomes: string[];
  stack: string[];
  previewRoute?: string;
  githubUrl?: string;
  featured?: boolean;
  screenshot?: string;
  metrics?: { label: string; value: string }[];
}

const GITHUB = "https://github.com/YuvrajJais9257";

const projects: Project[] = [
  {
    title: "HyphenView",
    tag: "Production · AI Text-to-SQL",
    featured: true,
    screenshot: "/Hyphen_Screenshots/Hyphen_Dashboard.png",
    problem:
      "Business users needed database insights without writing SQL — at enterprise scale, with security and accuracy requirements.",
    built:
      "Multi-stage LangChain pipeline: schema-aware prompts → GPT-4o SQL generation → validation → formatting, with error-correction loops. ChromaDB for schema embeddings and few-shot examples; assets in S3 with signed URLs.",
    outcomes: [
      "65% adoption among 50+ enterprise users within Q1 post-launch",
      "React frontend with real-time query feedback and result visualisation",
      "Deployed on AWS ECS via Docker, Nginx, and CloudWatch logging",
    ],
    metrics: [
      { label: "Adoption", value: "65%" },
      { label: "Users", value: "50+" },
      { label: "Stack", value: "ECS" },
      { label: "Pipeline", value: "Multi-stage" },
    ],
    stack: [
      "Python", "FastAPI", "LangChain", "GPT-4o", "PostgreSQL",
      "ChromaDB", "AWS S3", "Docker", "React.js",
    ],
    previewRoute: "/projects/hyphenview",
    githubUrl: GITHUB,
  },
  {
    title: "Smart Job Hunter",
    tag: "Personal · LangGraph Multi-Agent",
    problem:
      "Job seekers waste time on mismatched listings. Needed an autonomous agent to search live postings, score fit, and rank with explainable reasoning.",
    built:
      "LangGraph ReAct agent with tool-calling to search listings, parse JDs, and match skills via ChromaDB embeddings. Async Redis job queue for multi-step workflows; Pytest coverage on all tool paths.",
    outcomes: [
      "Custom LangChain tools for JD parsing and embedding-based skill matching",
      "Documented agent architecture and full tool registry with API specs",
      "Non-blocking multi-step flows via Redis-backed job queue",
    ],
    stack: [
      "Python", "FastAPI", "LangGraph", "LangChain", "OpenAI",
      "Redis", "ChromaDB", "Docker",
    ],
    previewRoute: "/projects/smart-job-hunter",
    githubUrl: GITHUB,
  },
  {
    title: "AI Shopping Assistant",
    tag: "Personal · Tool-Using Agent",
    problem:
      "Shoppers need budget-aware recommendations across product categories — combining deterministic constraints with LLM reasoning and live product data.",
    built:
      "Tool-using generative agent via LangChain's tool-calling interface: intent + budget in, product API search, comparison, and ranked recommendations with reasoning traces out.",
    outcomes: [
      "Product catalogs and session state in PostgreSQL with connection pooling",
      "Structured tool registry for search, compare, and rank operations",
      "Deployed via Docker Compose for local and demo environments",
    ],
    stack: ["Python", "FastAPI", "LangChain", "OpenAI", "PostgreSQL", "Docker"],
    githubUrl: GITHUB,
  },
];

const BrowserMockup = ({ src, alt }: { src: string; alt: string }) => (
  <div className="browser-frame w-full project-image-reveal">
    <div className="browser-bar">
      <div className="browser-dot" />
      <div className="browser-dot" />
      <div className="browser-dot" />
      <div className="flex-1 mx-3 h-5 rounded bg-border/60 text-[10px] text-muted-foreground flex items-center px-2 truncate select-none">
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

const FeaturedCard = ({ project }: { project: Project }) => (
  <article className="group col-span-full border border-border rounded-lg overflow-hidden bg-card card-lift hover:border-foreground/20">
    {project.screenshot && (
      <div className="p-4 pb-0 bg-muted/20">
        <BrowserMockup src={project.screenshot} alt={`${project.title} dashboard screenshot`} />
      </div>
    )}

    <div className="p-8 md:p-10">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-accent mb-2 block">
            {project.tag}
          </span>
          <h3 className="text-foreground text-xl font-semibold">{project.title}</h3>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          {project.previewRoute && (
            <Link
              to={project.previewRoute}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold rounded bg-accent text-accent-foreground hover:opacity-90 transition-base"
            >
              Case Study
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold rounded border border-border text-foreground hover:bg-muted transition-base"
            >
              <Github size={13} aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-[65ch]">
        <span className="text-foreground/80 font-medium">Problem — </span>
        {project.problem}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-[65ch]">
        <span className="text-foreground/80 font-medium">Built — </span>
        {project.built}
      </p>

      {project.metrics && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {project.metrics.map((kpi) => (
            <div key={kpi.label} className="rounded-md border border-border bg-background p-3">
              <p className="text-lg font-semibold tracking-tight text-foreground">{kpi.value}</p>
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{kpi.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
        {project.outcomes.map((o) => (
          <div key={o} className="flex items-start gap-2.5">
            <span className="mt-[9px] w-[3px] h-[3px] rounded-full bg-foreground/60 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">{o}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
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
);

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);
  const panelId = `project-details-${project.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <article className="group flex flex-col border border-border rounded-lg p-6 bg-card card-lift hover:border-foreground/20">
      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-3">
        {project.tag}
      </span>

      <h3 className="text-base font-semibold text-foreground mb-3">{project.title}</h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        <span className="text-foreground/80 font-medium">Problem — </span>
        {project.problem}
      </p>

      {!expanded && (
        <p className="text-[13px] text-muted-foreground mb-4 line-clamp-2">
          <span className="text-foreground/80 font-medium">Top outcome — </span>
          {project.outcomes[0]}
        </p>
      )}

      {expanded && (
      <div id={panelId} className="mb-5">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <span className="text-foreground/80 font-medium">Built — </span>
          {project.built}
        </p>

        <ul className="space-y-2 mb-5">
          {project.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-2.5">
              <span className="mt-[9px] w-[3px] h-[3px] rounded-full bg-foreground/60 flex-shrink-0" aria-hidden="true" />
              <span className="text-[13px] text-muted-foreground">{o}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[11px] font-medium rounded border border-border bg-background text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      )}

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-base mb-4 w-fit"
      >
        {expanded ? "Show less" : "Show full details"}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      <div className="flex gap-4 mt-auto pt-2 border-t border-border">
        {project.previewRoute && (
          <Link
            to={project.previewRoute}
            className="inline-flex items-center gap-1 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-base"
          >
            <ExternalLink size={12} aria-hidden="true" />
            Case Study
          </Link>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-base"
          >
            <Github size={12} aria-hidden="true" />
            GitHub
          </a>
        )}
      </div>
    </article>
  );
};

export const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 bg-card">
      <div className="shell-container">

        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
          Featured Projects
        </p>
        <h2 className="text-foreground mb-3">
          Shipped systems with business context.
        </h2>
        <p className="text-base text-muted-foreground mb-14 max-w-[58ch]">
          Three production-grade builds — problem, ownership, and outcomes visible
          at a glance. Expand secondary cards for full detail.
        </p>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((p) => (
              <FeaturedCard key={p.title} project={p} />
            ))}
            {rest.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
