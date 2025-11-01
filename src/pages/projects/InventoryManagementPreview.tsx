import React from "react";
import { ProjectPreviewLayout } from "@/components/ProjectPreviewLayout";

const InventoryManagementPreview = () => {
  const projectData = {
    title: "Inventory Management System",
    description: "Full-stack inventory module managing 5000+ assets across 20 locations, integrated with HyphenView platform",
    status: "🔧 Production Application - Currently Under Maintenance",
    integrationNote: "Part of HyphenView Enterprise Platform - Asset Management Module",
    techStack: ["FastAPI", "React.js", "Redux Toolkit", "PostgreSQL", "WebSocket", "Docker"],
    heroImage: {
      src: "/Inventory_Management_Screenshots/Inventory_Management_Inventory_Dashboard.png",
      alt: "Inventory Management Dashboard",
      caption: "Comprehensive inventory dashboard showing real-time asset status and analytics across all locations"
    },
    problemStatement: "Organizations with multiple locations struggle to maintain accurate, real-time visibility of their assets. Manual tracking methods lead to discrepancies, lost assets, and inefficient resource allocation. Traditional inventory systems often lack the flexibility to handle complex asset relationships and location-based tracking.",
    solutionOverview: "The Inventory Management System provides a comprehensive solution for tracking and managing assets across multiple locations with real-time synchronization. It features pivot-style views for complex data analysis, location-based filtering, and seamless integration with the HyphenView reporting console for advanced analytics.",
    keyFeatures: [
      "Pivot-style views with real-time data synchronization",
      "Dynamic filtering by location, category, and status",
      "Complex Redux state management for nested asset data",
      "Asset lifecycle tracking from procurement to disposal",
      "Location-based inventory management with transfer tracking",
      "Integration with Reporting Console for comprehensive analytics",
      "Bulk import/export capabilities for asset data",
      "Real-time notifications for low stock and maintenance alerts",
      "Asset check-in/check-out system with user tracking",
      "Comprehensive audit trail for all asset movements"
    ],
    impactMetrics: [
      { icon: "📦", value: "5000+", label: "Assets Managed" },
      { icon: "📍", value: "20", label: "Locations Tracked" },
      { icon: "⏱️", value: "70%", label: "Reduction in Manual Tracking Time" },
      { icon: "🔄", value: "Real-time", label: "Sync Across All Locations" }
    ],
    myRole: "Developed the end-to-end inventory management module as an integral part of the HyphenView platform. Built the sophisticated pivot table system with complex Redux state management for handling nested asset data relationships. Implemented location-based tracking with real-time synchronization, created the integration layer with the Reporting Console for unified analytics, and established WebSocket connections for live inventory updates.",
    integrationDetails: "The Inventory Management System integrates seamlessly with HyphenView through: Shared user authentication and role-based permissions system, direct integration with Reporting Console enabling comprehensive asset analytics and custom reports, real-time data synchronization across all locations using WebSocket technology, centralized asset database leveraging HyphenView's PostgreSQL instance with optimized indexing, and API-based communication with the parent platform for cross-module functionality.",
    screenshots: [
      {
        src: "/Inventory_Management_Screenshots/Inventory_Management_List_Of_Inventories.png",
        alt: "Inventory List Management",
        caption: "Comprehensive inventory list with advanced filtering and search capabilities"
      },
      {
        src: "/Inventory_Management_Screenshots/Inventory_Management_Inventory_Creation.png",
        alt: "Inventory Creation Interface",
        caption: "Streamlined inventory creation process with validation and categorization"
      },
      {
        src: "/Inventory_Management_Screenshots/Inventory_Management_Data_In_Depth_Analysis.png",
        alt: "In-Depth Data Analysis",
        caption: "Advanced analytics and reporting for comprehensive inventory insights"
      },
      {
        src: "/Inventory_Management_Screenshots/Inventory_Management_Schema_Explorer.png",
        alt: "Schema Explorer",
        caption: "Database schema exploration for understanding inventory data relationships"
      },
      {
        src: "/Inventory_Management_Screenshots/Inventory_Management_List_Of_Favorites.png",
        alt: "Favorites Management",
        caption: "Quick access to frequently used inventory items and reports"
      },
      {
        src: "/Inventory_Management_Screenshots/Inventory_Management_Update_Inventories.png",
        alt: "Inventory Updates",
        caption: "Real-time inventory updating with bulk edit capabilities"
      },
      {
        src: "/Inventory_Management_Screenshots/Inventory_Management_Update_Favorites.png",
        alt: "Favorites Configuration",
        caption: "Customizable favorites system for improved workflow efficiency"
      },
      {
        src: "/Inventory_Management_Screenshots/Inventory_Management_New_Connection_Page.png",
        alt: "Database Connection Setup",
        caption: "Secure database connection configuration for inventory data sources"
      }
    ],

    relatedProjects: [
      {
        name: "HyphenView",
        description: "Parent enterprise platform providing unified authentication and navigation",
        route: "/projects/hyphenview"
      },
      {
        name: "Reporting Console",
        description: "AI-powered analytics module providing comprehensive inventory reports",
        route: "/projects/reporting-console"
      },
      {
        name: "HyphenDesk",
        description: "Support ticketing system for asset-related maintenance and support requests",
        route: "/projects/hyphendesk"
      }
    ],
    challenges: [
      "Designed complex Redux state management architecture to handle deeply nested asset data with relationships across locations, categories, and users",
      "Implemented real-time synchronization using WebSocket technology to ensure inventory accuracy across 20+ locations without performance degradation",
      "Built a flexible pivot table system that allows users to analyze inventory data from multiple dimensions while maintaining fast query performance",
      "Created a robust asset lifecycle tracking system that maintains complete audit trails for compliance and accountability purposes",
      "Developed efficient bulk operations for importing/exporting large datasets while maintaining data integrity and validation",
      "Established seamless integration with the Reporting Console to provide comprehensive analytics without duplicating data or creating inconsistencies"
    ]
  };

  return <ProjectPreviewLayout {...projectData} />;
};

export default InventoryManagementPreview;