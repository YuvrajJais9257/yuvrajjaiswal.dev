import { ProjectPreviewLayout } from "@/components/ProjectPreviewLayout";

const HyphenDeskPreview = () => {
  const projectData = {
    title: "HyphenDesk - Support Ticketing Module",
    description:
      "Enterprise ticketing platform processing 500+ tickets/month, integrated with HyphenView ecosystem",
    status: "🔧 Production Application - Currently Under Maintenance",
    integrationNote:
      "Part of HyphenView Enterprise Platform - Support Management Module",
    techStack: [
      "FastAPI",
      "React.js",
      "Redux Toolkit",
      "PostgreSQL",
      "Node.js",
      "WebSocket",
      "Email Service",
    ],
    heroImage: {
      src: "/Hyphen_Screenshots/Hyphen_List_Of_Alerts.png",
      alt: "HyphenDesk Alert Management",
      caption:
        "Comprehensive alert and ticket management system integrated within HyphenView platform",
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
        src: "/Hyphen_Screenshots/Hyphen_Recent_Alerts.png",
        alt: "Recent Alerts Dashboard",
        caption:
          "Real-time alert monitoring and management within the HyphenView platform (HyphenDesk module)",
      },
      {
        src: "/Hyphen_Screenshots/Hyphen_View_Alert_Details_Page.png",
        alt: "Alert Details View",
        caption:
          "Comprehensive alert details with resolution tracking and assignment management (HyphenDesk module)",
      },
      {
        src: "/Hyphen_Screenshots/Hyphen_Report_Scheduler_Form.png",
        alt: "Automated Scheduling System",
        caption:
          "Automated alert and notification scheduling integrated with HyphenDesk ticketing system",
      },
      {
        src: "/Hyphen_Screenshots/Hyphen_Assigning_Users_To_Group.png",
        alt: "User Assignment Management",
        caption:
          "Intelligent user and agent assignment system for optimal ticket distribution (HyphenDesk module)",
      },
      {
        src: "/Hyphen_Screenshots/Hyphen_Group_Management.png",
        alt: "Group-Based Ticket Management",
        caption:
          "Advanced group management for organizing support teams and ticket categories (HyphenDesk module)",
      },
      {
        src: "/Hyphen_Screenshots/Hyphen_User_Management.png",
        alt: "Support Team Management",
        caption:
          "Comprehensive user management system for support agents and administrators (HyphenDesk module)",
      },
    ],
    githubUrl: "https://github.com/YuvrajJais9257/Hyphendesk.git",
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
