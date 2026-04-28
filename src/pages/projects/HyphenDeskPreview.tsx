import { ProjectPreviewLayout } from "@/components/ProjectPreviewLayout";

const HyphenDeskPreview = () => {
  const projectData = {
    title: "HyphenDesk - IT Service Management Platform",
    description:
      "Comprehensive ITSM platform providing unified solution for managing IT services, incidents, assets, users, and workflows with automated processes and centralized management",
    status: "🔧 Production ITSM Platform - Currently Under Maintenance",
    integrationNote:
      "Standalone IT Service Management Platform with comprehensive ITSM capabilities",
    techStack: [
      "React.js 19.0",
      "Redux Toolkit",
      "Material-UI v6.4.7",
      "FastAPI",
      "PostgreSQL",
      "JWT Authentication",
      "CSS Modules",
      "Axios",
    ],
    heroImage: {
      src: "/Hyphendesk_Screenshots/Hyphndesk_welcome.png",
      alt: "HyphenDesk Welcome Dashboard",
      caption:
        "HyphenDesk ITSM platform welcome dashboard with personalized widgets and quick actions",
    },
    problemStatement:
      "Organizations struggle with inefficient support ticket management, leading to delayed responses, missed SLAs, and poor customer satisfaction. Manual ticket routing, lack of automation, and disconnected systems create bottlenecks that impact both support teams and end users seeking assistance.",
    solutionOverview:
      "HyphenDesk provides a comprehensive support ticketing solution that automates ticket routing, tracks SLAs, and integrates seamlessly with other HyphenView modules. It features intelligent assignment algorithms, real-time notifications, and comprehensive analytics to optimize support operations and improve response times.",
    keyFeatures: [
      "Automated ticket routing based on category, priority, and agent expertise",
      "SLA tracking with automated alerts and escalation workflows",
      "Real-time email notifications for all stakeholders",
      "Priority-based assignment to support agents with workload balancing",
      "Comprehensive resolution analytics and performance reporting",
      "Integration with HyphenView's unified user management system",
      "Knowledge base integration for self-service support",
      "Asset integration for equipment-related support tickets",
      "Multi-channel ticket creation (email, web portal, API)",
      "Advanced search and filtering capabilities for ticket management",
    ],
    impactMetrics: [
      { icon: "🎫", value: "500+", label: "Tickets/Month Processed" },
      {
        icon: "⏱️",
        value: "40%",
        label: "Reduction in Response Time (4hrs → 2.4hrs)",
      },
      {
        icon: "📧",
        value: "Real-time",
        label: "Notifications for All Stakeholders",
      },
      {
        icon: "📊",
        value: "Comprehensive",
        label: "Resolution Analytics Dashboard",
      },
    ],
    myRole:
      "Built the complete support ticketing module as an integrated component of the HyphenView platform. Developed the automated routing logic with intelligent assignment algorithms, implemented SLA tracking with real-time alerts and escalation workflows, created the comprehensive notification system using Node.js email services, and built the analytics dashboard showing detailed resolution metrics and team performance indicators.",
    integrationDetails:
      "HyphenDesk integrates comprehensively with HyphenView through: Shared authentication and user directory enabling seamless access across all platform modules, integration with Reporting Console for detailed ticket analytics and custom support reports, access to centralized asset data from Inventory Management for equipment-related support tickets, unified notification system that works across all HyphenView modules, and API-based ticket creation allowing other modules to generate support requests automatically.",
    screenshots: [
      {
        src: "/Hyphendesk_Screenshots/Hyphndesk_login_page_dark.png",
        alt: "HyphenDesk Login Page",
        caption: "Secure login with multi-factor authentication and dark theme support"
      },
      {
        src: "/Hyphendesk_Screenshots/Hyphendesk_list_of_incidents.png",
        alt: "Incident Management List",
        caption: "Comprehensive incident tracking with advanced filtering and bulk operations"
      },
      {
        src: "/Hyphendesk_Screenshots/Hyphndesk_create_new_incident.png",
        alt: "Create New Incident",
        caption: "Incident creation form with attachments and automated routing"
      },
      {
        src: "/Hyphendesk_Screenshots/Hyphndesk_asset_overview_page_Dark.png",
        alt: "Asset Management Overview",
        caption: "Complete IT asset lifecycle management with CI tracking"
      },
      {
        src: "/Hyphendesk_Screenshots/Hyphndesk_list_of_user_accounts.png",
        alt: "User Management",
        caption: "User account management with RBAC and organizational hierarchy"
      },
      {
        src: "/Hyphendesk_Screenshots/Hyphndesk_priority_matrix.png",
        alt: "Priority Matrix",
        caption: "Impact vs. Urgency priority calculation matrix"
      },
      {
        src: "/Hyphendesk_Screenshots/Hyphndesk_view_workflow.png",
        alt: "Workflow Visualization",
        caption: "Visual workflow designer with automated routing and approval processes"
      },
      {
        src: "/Hyphendesk_Screenshots/Hyphndesk_list_of_services.png",
        alt: "Service Management",
        caption: "Service catalog with SLA management and service subcategories"
      }
    ],

    relatedProjects: [
      {
        name: "HyphenView",
        description:
          "Parent enterprise platform providing unified authentication and cross-module integration",
        route: "/projects/hyphenview",
      },
      {
        name: "Reporting Console",
        description:
          "AI-powered analytics providing comprehensive support ticket reporting and insights",
        route: "/projects/reporting-console",
      },
      {
        name: "Inventory Management",
        description:
          "Asset management system enabling equipment-related support ticket creation",
        route: "/projects/inventory-management",
      },
    ],
    challenges: [
      "Developed intelligent automated routing algorithms that consider agent expertise, current workload, ticket priority, and historical performance to optimize assignment efficiency",
      "Implemented comprehensive SLA tracking system with configurable rules, automated escalation workflows, and real-time monitoring to ensure service level compliance",
      "Built a robust real-time notification system using Node.js and WebSocket technology to ensure immediate communication across all stakeholders",
      "Created advanced analytics dashboard that provides actionable insights into team performance, resolution trends, and customer satisfaction metrics",
      "Established seamless integration with other HyphenView modules while maintaining the ticketing system's independence and specialized functionality",
      "Designed scalable architecture to handle high ticket volumes while maintaining fast response times and system reliability",
    ],
  };

  // Note: Using HyphenView screenshots as specified since HyphenDesk doesn't have separate screenshots yet
  const updatedScreenshots = projectData.screenshots.map((screenshot) => ({
    ...screenshot,
    caption: `${screenshot.caption} (Integrated within HyphenView platform experience)`,
  }));

  return (
    <ProjectPreviewLayout
      {...{ ...projectData, screenshots: updatedScreenshots }}
    />
  );
};

export default HyphenDeskPreview;
