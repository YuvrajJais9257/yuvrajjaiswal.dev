import React from "react";
import { TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Projects = () => {
  const projects = [
    {
      title: "Smart Job Hunter - AI Search Agent",
      description: "Production-grade AI agent with tool-calling capabilities to fetch live job postings via Tavily API with resume-aware filtering logic where LLM analyzes candidate skills against job requirements",
      techStack: ["Python", "Streamlit", "LangChain AgentExecutor", "Tavily API", "Groq", "LLaMA-3"],
      keyMetric: "Advanced agent design with structured reasoning and explainable matches",
      gradient: "from-blue-500 to-purple-500",
      previewRoute: "/projects/smart-job-hunter",
      type: "AI/ML Project",
      screenshot: "/Ai_smart_Job_hunter.png"
    },
    {
      title: "HyphenDesk - IT Service Management Platform",
      description: "Comprehensive ITSM platform with incident management, asset tracking, workflow automation, and user management. Features RBAC, SLA tracking, and automated routing serving enterprise clients",
      techStack: ["React.js", "Redux Toolkit", "Material-UI", "FastAPI", "PostgreSQL", "JWT Auth"],
      keyMetric: "Complete IT service lifecycle management with automated workflows",
      gradient: "from-orange-500 to-red-500",
      previewRoute: "/projects/hyphendesk",
      type: "Enterprise ITSM",
      screenshot: "/Hyphendesk_Screenshots/Hyphndesk_welcome.png"
    },
    {
      title: "HyphenView - AI-Powered Analytics Platform",
      description: "AI-powered analytics platform with LangChain multi-agent workflows for Text-to-SQL generation serving 50+ users with natural language query processing",
      techStack: ["Flask", "FastAPI", "LangChain", "OpenAI", "React.js", "PostgreSQL"],
      keyMetric: "65% AI feature adoption rate with 40+ API endpoints and 90% query accuracy",
      gradient: "from-green-500 to-emerald-500",
      previewRoute: "/projects/hyphenview",
      type: "AI Analytics Platform",
      screenshot: "/Hyphen_Screenshots/Hyphen_Dashboard.png"
    },
    {
      title: "Reporting Console & Dashboard System",
      description: "Comprehensive reporting system with query builder, pivot tables, drill-down functionality, and dynamic form generation tracking 5000+ assets with multi-format export capabilities",
      techStack: ["React.js", "Redux", "Flask", "PostgreSQL", "Pandas", "Highcharts"],
      keyMetric: "Dynamic form generation with advanced filtering and real-time analytics",
      gradient: "from-purple-500 to-pink-500",
      previewRoute: "/projects/reporting-console",
      type: "Enterprise Reporting",
      screenshot: "/Reporting_Console_Screenshots/Reporting_Console_Chart_Creation.png"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg">
            Enterprise applications built with modern technologies and AI integration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                  {project.type}
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  🔧 Under Maintenance
                </span>
              </div>

              {/* Project Screenshot */}
              {project.screenshot && (
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={project.screenshot} 
                    alt={`${project.title} Screenshot`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`bg-gradient-to-r ${project.gradient} rounded-xl p-4 text-white mb-6`}>
                <div className="flex items-center space-x-2">
                  <TrendingUp size={20} />
                  <span className="font-semibold">{project.keyMetric}</span>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  asChild
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                >
                  <Link to={project.previewRoute}>
                    <ExternalLink size={16} className="mr-2" />
                    View Preview
                  </Link>
                </Button>
                {/* Source Code button removed for company projects - maintaining professional confidentiality */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
