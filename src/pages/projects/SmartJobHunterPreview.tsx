import React from "react";
import { ProjectPreviewLayout } from "@/components/ProjectPreviewLayout";

const SmartJobHunterPreview = () => {
  const projectData = {
    title: "AI Job Search Agent — Autonomous LLM Multi-Agent System",
    subtitle: "LangGraph agent with tool-calling and embedding-based job matching",
    description:
      "Built a LangGraph-powered autonomous agent capable of discovering, analyzing, and ranking job opportunities. Implements tool-calling workflows, vector search, and resume-job matching using embeddings with async Python backend pipelines.",
    status: "Personal project · LangGraph multi-agent · Open source",

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
      "AI Job Search Agent runs a LangGraph agent that discovers listings, parses job descriptions, matches skills via embeddings, and ranks opportunities with structured scoring — orchestrated through tool-calling workflows and async backend pipelines.",

    myRole:
      "Designed the LangGraph agent architecture, built custom LangChain tools for JD parsing and skill matching, implemented async job scoring pipelines, and wrote test coverage for tool-calling paths.",

    challenges: [
      "Orchestrating multi-step agent flows with reliable tool selection and structured outputs",
      "Embedding-based job matching that stays explainable for end users",
      "Async API design for long-running agent workflows",
      "Structured job scoring to improve relevance and ranking quality",
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
        description: "Tool-using agent with live demo at e-comm-agent.vercel.app",
        route: "/#projects",
      },
    ],
  };

  return <ProjectPreviewLayout {...projectData} />;
};

export default SmartJobHunterPreview;
