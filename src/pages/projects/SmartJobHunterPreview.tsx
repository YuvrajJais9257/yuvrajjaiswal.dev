import React from "react";
import { ProjectPreviewLayout } from "@/components/ProjectPreviewLayout";

const SmartJobHunterPreview = () => {
  const projectData = {
    title: "Smart Job Hunter - AI Search Agent",
    subtitle: "Production-grade AI agent with tool-calling capabilities",
    description: "Built production-grade AI agent with tool-calling capabilities to fetch live job postings via Tavily API. Implemented resume-aware filtering logic where LLM analyzes candidate skills against job requirements. Demonstrates advanced agent design with structured reasoning, explainable matches, and multi-step workflows.",
    status: "🤖 AI/ML Project - Production Ready",
    
    heroImage: {
      src: "/Ai_smart_Job_hunter.png",
      alt: "Smart Job Hunter AI Agent Interface",
      caption: "AI-powered job search interface with resume analysis and intelligent matching capabilities"
    },
    
    techStack: [
      "Python",
      "Streamlit", 
      "LangChain AgentExecutor",
      "Tavily API",
      "Groq",
      "LLaMA-3"
    ],
    
    keyFeatures: [
      "AI Agent with Tool-Calling capabilities using LangChain AgentExecutor",
      "Resume-aware filtering with LLM skill analysis against job requirements", 
      "Structured reasoning with explainable decision-making process",
      "Multi-step workflows for comprehensive job search automation",
      "Live job data retrieval via Tavily API integration",
      "Explainable matches with detailed recommendation explanations"
    ],
    
    impactMetrics: [
      { icon: "🤖", value: "LLaMA-3", label: "AI Model Used" },
      { icon: "🔗", value: "Tavily API", label: "Live Job Data Source" },
      { icon: "⚡", value: "LangChain", label: "Agent Framework" },
      { icon: "📊", value: "Streamlit", label: "Interactive Interface" }
    ],
    
    problemStatement: "Job seekers often struggle with manually searching through hundreds of job postings, spending countless hours filtering through irrelevant positions that don't match their skills and experience. Traditional job search platforms lack intelligent matching and provide limited insights into why certain jobs are recommended.",
    
    solutionOverview: "Smart Job Hunter leverages advanced AI agent technology with LangChain AgentExecutor to automate the job search process. It uses tool-calling capabilities to fetch live job postings via Tavily API, then applies resume-aware filtering where LLM analyzes candidate skills against job requirements, providing explainable matches with structured reasoning.",
    
    myRole: "Designed and developed the complete AI agent system using LangChain AgentExecutor with tool-calling capabilities. Implemented the resume parsing and skill extraction logic, integrated Tavily API for live job data retrieval, and built the Streamlit interface for user interaction. Created the explainable AI system that provides transparent reasoning for job recommendations.",
    
    challenges: [
      "Designed complex multi-agent workflows with proper tool selection and execution flow using LangChain AgentExecutor",
      "Implemented intelligent resume parsing and skill extraction for accurate job matching using LLaMA-3 model",
      "Optimized API calls and data processing for responsive user experience with Tavily API integration",
      "Built explainable AI system that provides transparent reasoning for each job recommendation",
      "Created structured workflow orchestration for comprehensive job search automation"
    ],
    
    screenshots: [
      {
        src: "/Ai_smart_Job_hunter.png",
        alt: "Smart Job Hunter AI Agent Interface",
        caption: "AI-powered job search interface with resume analysis and intelligent matching"
      }
    ],
    
    relatedProjects: [
      {
        name: "HyphenView Analytics",
        description: "AI-powered analytics platform with LangChain integration",
        route: "/projects/hyphenview"
      },
      {
        name: "Reporting Console",
        description: "Enterprise reporting system with AI capabilities", 
        route: "/projects/reporting-console"
      }
    ]
  };

  return <ProjectPreviewLayout {...projectData} />;
};

export default SmartJobHunterPreview;