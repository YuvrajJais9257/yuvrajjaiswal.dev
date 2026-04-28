import React from "react";
import { ProjectPreviewLayout } from "@/components/ProjectPreviewLayout";

const ReportingConsolePreview = () => {
  const projectData = {
    title: "Reporting Console - AI-Powered Analytics Module",
    description: "Integrated reporting module within HyphenView with natural language SQL generation and advanced data visualization",
    status: "🔧 Production Application - Currently Under Maintenance",
    integrationNote: "Part of HyphenView Enterprise Platform - Integrated Analytics Module",
    techStack: ["React.js", "Redux Toolkit", "FastAPI", "PostgreSQL", "Highcharts", "Docker", "AI/NLP", "OpenAI API"],
    heroImage: {
      src: "/Reporting_Console_Screenshots/Reporting_Console_Report_Creation.png",
      alt: "Report Creation Interface",
      caption: "Comprehensive report creation interface with drag-and-drop functionality and real-time preview"
    },
    problemStatement: "Business users often struggle to extract insights from complex databases due to the technical barrier of writing SQL queries. Traditional reporting tools require technical expertise, creating bottlenecks where business teams depend on developers for data analysis and report generation.",
    solutionOverview: "The Reporting Console bridges this gap by providing an AI-powered interface that converts natural language queries into SQL, combined with a comprehensive visualization suite. Users can ask questions in plain English and get instant visual reports, while still having access to advanced customization options.",
    keyFeatures: [
      "AI-powered natural language to SQL conversion",
      "20+ dynamic Highcharts visualization types",
      "Drag-and-drop table builder with real-time preview",
      "Automated report scheduling and distribution",
      "Advanced filtering with date ranges, AND/OR conditions",
      "Multi-level data aggregation and grouping",
      "Report sharing and export (CSV, PDF, Excel)",
      "Integration with HyphenView's centralized authentication",
      "Real-time data refresh and caching",
      "Custom dashboard creation and management"
    ],
    impactMetrics: [
      { icon: "📈", value: "65%", label: "Increase in Self-Service Analytics" },
      { icon: "⚡", value: "45%", label: "Performance Improvement (12s → 6.6s)" },
      { icon: "👥", value: "50+", label: "Active Daily Users" },
      { icon: "⏱️", value: "10+", label: "Hours/Week Saved for Operations Team" }
    ],
    myRole: "Built the complete AI-powered reporting console as an integrated module of HyphenView. Developed the AI query builder with natural language processing capabilities, implemented all 20+ chart types using Highcharts library, created the intuitive drag-and-drop table builder, and optimized database query performance by 45%. Integrated seamlessly with HyphenView's authentication system and established real-time data synchronization.",
    integrationDetails: "The Reporting Console seamlessly integrates with HyphenView's parent platform through: Shared authentication system providing single sign-on experience, centralized PostgreSQL database access with optimized connection pooling, API gateway for secure data requests and response caching, real-time data synchronization with other HyphenView modules, unified user permissions and role-based access control, and cross-module analytics capabilities.",
    screenshots: [
      {
        src: "/Reporting_Console_Screenshots/Reporting_Console_Chart_Creation.png",
        alt: "Chart Creation Interface",
        caption: "Advanced chart creation with multiple visualization types and customization options"
      },
      {
        src: "/Reporting_Console_Screenshots/Reporting_Console_Adding_Column.png",
        alt: "Column Management",
        caption: "Dynamic column addition and management for creating comprehensive reports"
      },
      {
        src: "/Reporting_Console_Screenshots/Reporting_Console_Adding_Filters.png",
        alt: "Filter Configuration",
        caption: "Sophisticated filtering system with conditional logic and multi-level criteria"
      },
      {
        src: "/Reporting_Console_Screenshots/Reporting_Console_Adding_Formula.png",
        alt: "Formula Builder",
        caption: "Advanced formula builder for creating calculated fields and custom metrics"
      },
      {
        src: "/Reporting_Console_Screenshots/Reporting_Console_Apply_Aggregations_To_Chart.png",
        alt: "Chart Aggregations",
        caption: "Apply complex aggregations to charts for advanced data analysis"
      },
      {
        src: "/Reporting_Console_Screenshots/Reporting_Console_Build_Query_Manual.png",
        alt: "Manual Query Builder",
        caption: "Manual SQL query builder for advanced users requiring custom data extraction"
      },
      {
        src: "/Reporting_Console_Screenshots/Reporting_Console_Select_Data_Source.png",
        alt: "Data Source Selection",
        caption: "Unified data source selection interface supporting multiple database connections"
      },
      {
        src: "/Reporting_Console_Screenshots/Reporting_Console_Update_Report.png",
        alt: "Report Updates",
        caption: "Real-time report editing and updating with instant preview capabilities"
      },
      {
        src: "/Reporting_Console_Screenshots/Reporting_Console_Update_Table_Report_Aggregations.png",
        alt: "Table Aggregations",
        caption: "Advanced table report aggregations with grouping and summary functions"
      }
    ],

    relatedProjects: [
      {
        name: "HyphenView",
        description: "Parent enterprise platform integrating all modules with unified authentication",
        route: "/projects/hyphenview"
      },
      {
        name: "Inventory Management",
        description: "Asset management system providing data for inventory analytics reports",
        route: "/projects/inventory-management"
      },
      {
        name: "HyphenDesk",
        description: "Support ticketing system with integrated reporting for ticket analytics",
        route: "/projects/hyphendesk"
      }
    ],
    challenges: [
      "Implemented natural language processing to accurately convert business queries into optimized SQL statements while handling complex joins and aggregations",
      "Optimized database query performance by 45% through intelligent caching, query optimization, and connection pooling strategies",
      "Built a flexible charting system supporting 20+ visualization types with real-time data updates and responsive design",
      "Created an intuitive drag-and-drop interface that abstracts complex SQL operations while maintaining full customization capabilities",
      "Developed a robust scheduling system for automated report generation and distribution with failure handling and retry mechanisms",
      "Established seamless integration with HyphenView's authentication system while maintaining module independence and security"
    ]
  };

  return <ProjectPreviewLayout {...projectData} />;
};

export default ReportingConsolePreview;