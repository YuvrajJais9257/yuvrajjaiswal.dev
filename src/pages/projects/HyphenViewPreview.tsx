import React from "react";
import { ProjectPreviewLayout } from "@/components/ProjectPreviewLayout";

const HyphenViewPreview = () => {
  const projectData = {
    title: "HyphenView - Enterprise Application Platform",
    description: "Unified enterprise platform integrating reporting console, inventory management, and support ticketing modules",
    status: "🔧 Production Application - Currently Under Maintenance",
    techStack: ["React.js", "Redux Toolkit", "FastAPI", "PostgreSQL", "Microservices Architecture", "Docker", "Nginx"],
    heroImage: {
      src: "/Hyphen_Screenshots/Hyphen_Dashboard.png",
      alt: "HyphenView Main Dashboard",
      caption: "Main HyphenView dashboard showing integrated modules and unified navigation"
    },
    problemStatement: "Organizations often struggle with fragmented systems where reporting, inventory management, and support ticketing operate in silos. This leads to data inconsistencies, duplicate user management, and poor user experience as employees need to switch between multiple applications.",
    solutionOverview: "HyphenView serves as a unified enterprise platform that integrates multiple business applications under a single interface. It provides centralized authentication, shared data models, and seamless navigation between modules while maintaining the specialized functionality of each sub-application.",
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
      { icon: "🎯", value: "100+", label: "Active Users" },
      { icon: "🔗", value: "3", label: "Integrated Sub-Applications" },
      { icon: "⚡", value: "Single", label: "Sign-On Experience" },
      { icon: "📊", value: "Unified", label: "Analytics Dashboard" }
    ],
    myRole: "Architected the parent HyphenView platform to serve as a unified hub for multiple enterprise applications. Designed the modular architecture, implemented SSO authentication system, and built the integration layer connecting all sub-applications. Led frontend development using React and Redux Toolkit, created the centralized state management system, and established the API gateway pattern for inter-module communication.",
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
    githubUrl: "https://github.com/YuvrajJais9257/HyphenView.git",
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