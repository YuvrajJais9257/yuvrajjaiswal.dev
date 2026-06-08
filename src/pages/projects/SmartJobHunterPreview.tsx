import React from "react";
import { ProjectPreviewLayout } from "@/components/ProjectPreviewLayout";

const SmartJobHunterPreview = () => {
  const projectData = {
    title: "Smart Job Hunter — Autonomous LLM Multi-Agent System",
    subtitle: "LangGraph ReAct agent with tool-calling and embedding-based skill matching",
    description:
      "Architected a LangGraph-powered autonomous agent using a ReAct loop with tool-calling to search live job listings, extract structured data, score role fit, and rank results by relevance. Custom LangChain tools parse JDs and match skills via ChromaDB embeddings, with an async Redis job queue for non-blocking multi-step workflows.",
    status: "Personal project · LangGraph multi-agent",

    heroImage: {
      src: "/Ai_smart_Job_hunter.png",
      alt: "Smart Job Hunter agent interface",
      caption: "Autonomous job search agent with explainable ranking",
    },

    techStack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "OpenAI",
      "Redis",
      "ChromaDB",
      "Docker",
    ],

    keyFeatures: [
      "LangGraph ReAct loop with tool-calling for search, parse, score, and rank",
      "Embedding-based skill matching against a ChromaDB vector store",
      "Async Redis job queue for multi-step workflows without API blocking",
      "Pytest integration tests covering all tool-calling paths and state transitions",
      "Documented agent architecture and full tool registry with API specs",
    ],

    impactMetrics: [
      { icon: "🤖", value: "LangGraph", label: "Agent orchestration" },
      { icon: "🔗", value: "Tool-calling", label: "ReAct workflow" },
      { icon: "⚡", value: "Redis", label: "Async job queue" },
      { icon: "📊", value: "ChromaDB", label: "Skill embeddings" },
    ],

    problemStatement:
      "Job seekers waste hours filtering mismatched roles. Manual search lacks structured scoring and explainable fit against a candidate's actual skills.",

    solutionOverview:
      "Smart Job Hunter runs a LangGraph agent that searches listings, parses job descriptions, matches skills via embeddings, and ranks opportunities with reasoning traces — all orchestrated through a documented tool registry and tested tool-calling paths.",

    myRole:
      "Designed the LangGraph agent architecture, built custom LangChain tools for JD parsing and skill matching, implemented the Redis-backed async queue, and wrote Pytest coverage for all state transitions.",

    challenges: [
      "Orchestrating multi-step agent flows with reliable tool selection and self-correction",
      "Embedding-based skill matching that stays explainable for end users",
      "Non-blocking API design via Redis for long-running agent workflows",
      "Full test coverage across tool-calling paths and LangGraph state transitions",
    ],

    screenshots: [
      {
        src: "/Ai_smart_Job_hunter.png",
        alt: "Smart Job Hunter agent interface",
        caption: "Agent interface with job search and ranking",
      },
    ],

    relatedProjects: [
      {
        name: "HyphenView",
        description: "AI Text-to-SQL platform with 65% enterprise adoption",
        route: "/projects/hyphenview",
      },
      {
        name: "AI Shopping Assistant",
        description: "Tool-using generative agent for budget-aware recommendations",
        route: "/projects",
      },
    ],
  };

  return <ProjectPreviewLayout {...projectData} />;
};

export default SmartJobHunterPreview;
