import React from "react";
import { ProjectPreviewLayout } from "@/components/ProjectPreviewLayout";

const SmartJobHunterPreview = () => {
  const projectData = {
    title: "Smart Job Hunter - AI Search Agent",
    subtitle: "Production-grade AI agent with tool-calling capabilities",
    description: "Built production-grade AI agent with tool-calling capabilities to fetch live job postings via Tavily API. Implemented resume-aware filtering logic where LLM analyzes candidate skills against job requirements. Demonstrates advanced agent design with structured reasoning, explainable matches, and multi-step workflows.",
    
    techStack: [
      "Python",
      "Streamlit", 
      "LangChain AgentExecutor",
      "Tavily API",
      "Groq",
      "LLaMA-3"
    ],
    
    keyFeatures: [
      {
        title: "AI Agent with Tool-Calling",
        description: "LangChain AgentExecutor with tool-calling capabilities to fetch live job postings"
      },
      {
        title: "Resume-Aware Filtering",
        description: "LLM analyzes candidate skills against job requirements for intelligent matching"
      },
      {
        title: "Structured Reasoning",
        description: "Advanced agent design with explainable decision-making process"
      },
      {
        title: "Multi-Step Workflows",
        description: "Complex workflow orchestration for comprehensive job search automation"
      },
      {
        title: "Live Job Data",
        description: "Real-time job posting retrieval via Tavily API integration"
      },
      {
        title: "Explainable Matches",
        description: "Transparent matching logic with detailed explanations for each recommendation"
      }
    ],
    
    metrics: [
      { label: "AI Model", value: "LLaMA-3" },
      { label: "API Integration", value: "Tavily API" },
      { label: "Agent Framework", value: "LangChain" },
      { label: "Interface", value: "Streamlit" }
    ],
    
    challenges: [
      {
        title: "Agent Orchestration",
        description: "Designed complex multi-agent workflows with proper tool selection and execution flow"
      },
      {
        title: "Resume Analysis",
        description: "Implemented intelligent resume parsing and skill extraction for accurate job matching"
      },
      {
        title: "Real-time Data Processing",
        description: "Optimized API calls and data processing for responsive user experience"
      }
    ],
    
    screenshots: [
      {
        src: "/Ai_smart_Job_hunter.png",
        alt: "Smart Job Hunter AI Agent Interface",
        caption: "AI-powered job search interface with resume analysis and intelligent matching"
      }
    ],
    
    githubUrl: "https://github.com/YuvrajJais9257/Smart-Job-Hunter",
    liveUrl: null, // Set to null if not deployed
    
    relatedProjects: [
      {
        title: "HyphenView Analytics",
        description: "AI-powered analytics platform with LangChain integration",
        link: "/projects/hyphenview"
      },
      {
        title: "Reporting Console",
        description: "Enterprise reporting system with AI capabilities",
        link: "/projects/reporting-console"
      }
    ]
  };

  return <ProjectPreviewLayout {...projectData} />;
};

export default SmartJobHunterPreview;