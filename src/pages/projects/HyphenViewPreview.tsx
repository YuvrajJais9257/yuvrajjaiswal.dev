import React from "react";
import { ProjectPreviewLayout } from "@/components/ProjectPreviewLayout";

const HyphenViewPreview = () => {
  const projectData = {
    title: "HyphenView — AI Text-to-SQL Analytics Platform",
    description: "Enterprise AI analytics platform enabling natural language database queries — adopted by 50+ users with 65% Q1 adoption",
    status: "Production · Erasmith · Private NDA Repository",
    techStack: ["React.js", "FastAPI", "PostgreSQL", "LangChain", "GPT-4o", "ChromaDB", "Docker", "AWS S3"],
    heroImage: {
      src: "/Hyphen_Screenshots/Hyphen_Dashboard.png",
      alt: "HyphenView Main Dashboard",
      caption: "Main HyphenView dashboard showing integrated modules and unified navigation"
    },
    problemStatement: "Business users needed database insights without writing SQL. Manual reporting created bottlenecks and required technical staff for every ad-hoc query at enterprise scale.",
    solutionOverview: "HyphenView is an AI-powered Text-to-SQL analytics platform built with FastAPI, PostgreSQL, and LangChain. Multi-stage prompt engineering handles SQL generation, validation, and result formatting — enabling 50+ enterprise users to query databases using natural language.",
    keyFeatures: [
      "Modular architecture with integrated sub-applications",
      "Centralized user authentication and authorization system",
      "Unified dashboard with module navigation",
      "Role-based access control across all modules",
      "Real-time data synchronization between modules",
      "Single sign-on (SSO) across all integrated applications",
      "Centralized configuration and settings management",
      "Cross-module analytics and reporting",
      "Unified notification system",
      "Scalable microservices architecture"
    ],
    impactMetrics: [
      { icon: "📊", value: "65%", label: "Q1 Adoption Rate" },
      { icon: "👥", value: "50+", label: "Enterprise Users" },
      { icon: "🔗", value: "80+", label: "REST APIs Built" },
      { icon: "⚡", value: "45%", label: "Dashboard Load Improvement" }
    ],
    myRole: "Built HyphenView as the flagship AI product at Erasmith — designed the LangChain Text-to-SQL pipeline, FastAPI backend with 80+ REST endpoints, PostgreSQL schema and query optimization, React frontend, and Docker deployment. Achieved 65% adoption among 50+ enterprise users within the first quarter after launch. Repository is private under NDA.",
    screenshots: [
      {
        src: "/Hyphen_Screenshots/Hyphen_Switch_To_Reporting_Console.png",
        alt: "Module Navigation Interface",
        caption: "Seamless navigation between integrated modules with role-based access control"
      },
      {
        src: "/Hyphen_Screenshots/Hyphen_User_Management.png",
        alt: "User Management System",
        caption: "Centralized user management with role-based permissions across all modules"
      },
      {
        src: "/Hyphen_Screenshots/Hyphen_Group_Management.png",
        alt: "Group Management System",
        caption: "Advanced group management with role-based access and feature assignments"
      },
      {
        src: "/Hyphen_Screenshots/Hyphen_Dashboard_Management.png",
        alt: "Dashboard Management",
        caption: "Comprehensive dashboard management and customization interface"
      },
      {
        src: "/Hyphen_Screenshots/Hyphen_Report_Management.png",
        alt: "Report Management System",
        caption: "Centralized report management with scheduling and distribution capabilities"
      },
      {
        src: "/Hyphen_Screenshots/Hyphen_New_Connection_Page.png",
        alt: "Data Source Connection",
        caption: "Unified data source connection management for all integrated modules"
      },
      {
        src: "/Hyphen_Screenshots/Hyphen_Login_Page.png",
        alt: "Unified Login System",
        caption: "Single sign-on authentication system for all HyphenView modules"
      },
      {
        src: "/Hyphen_Screenshots/Hyphen_Register_New_User.png",
        alt: "User Registration",
        caption: "Centralized user registration and onboarding system"
      }
    ],

    relatedProjects: [
      {
        name: "Reporting Console",
        description: "AI-powered analytics module with natural language SQL generation",
        route: "/projects/reporting-console"
      },
      {
        name: "Inventory Management",
        description: "Asset management system handling 5000+ assets across 20 locations",
        route: "/projects/inventory-management"
      },
      {
        name: "HyphenDesk",
        description: "Support ticketing platform processing 500+ tickets/month",
        route: "/projects/hyphendesk"
      }
    ],
    challenges: [
      "Designed a scalable microservices architecture that allows independent development and deployment of sub-modules while maintaining data consistency",
      "Implemented a robust authentication system that provides seamless SSO experience across all integrated applications",
      "Created a flexible permission system that works across different modules with varying access requirements",
      "Built a real-time data synchronization system to ensure consistency between modules without performance degradation",
      "Developed a unified state management solution using Redux Toolkit that handles complex inter-module data flows",
      "Established API gateway patterns and service mesh architecture for secure inter-service communication"
    ]
  };

  return <ProjectPreviewLayout {...projectData} />;
};

export default HyphenViewPreview;