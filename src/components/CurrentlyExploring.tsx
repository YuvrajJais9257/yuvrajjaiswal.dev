import React from "react";

const exploring = [
  "MCP (Model Context Protocol) and tool-calling agent patterns",
  "LLM evaluation frameworks and RAG quality measurement",
  "Advanced agentic patterns — planning, memory, multi-agent coordination",
  "Managed vector search and embedding optimization at scale",
  "Streaming architectures for real-time LLM responses",
];

const education = {
  degree: "B.Tech in Computer Science — AI Specialization",
  school: "Galgotias College of Engineering and Technology, Greater Noida",
  years: "2020 – 2025",
  note: "Completed final year while working full-time as AI/LLM Engineer at Erasmith Pvt Ltd.",
};

const certifications = [
  "AI / LangChain & Agentic AI — Udemy (RAG, LangGraph, Prompt Engineering)",
  "Docker Mastery — Bret Fisher (Udemy)",
  "100 Days of Code — Python — Angela Yu",
  "Data Structures & Algorithms — Coding Ninjas",
  "Full Stack Web Development — Hitesh Choudhary",
];

export const CurrentlyExploring = () => (
  <section id="background" className="py-32 bg-background border-t border-border">
    <div className="shell-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">
            Currently Exploring
          </p>
          <ul className="space-y-3">
            {exploring.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-[9px] w-[3px] h-[3px] rounded-full bg-foreground/60 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-4">
              Education
            </p>
            <h3 className="text-foreground font-semibold text-base mb-1">{education.degree}</h3>
            <p className="text-sm text-muted-foreground">{education.school}</p>
            <p className="text-sm text-muted-foreground mt-1">{education.years}</p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{education.note}</p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-4">
              Certifications
            </p>
            <ul className="space-y-2.5">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-muted-foreground leading-relaxed">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
