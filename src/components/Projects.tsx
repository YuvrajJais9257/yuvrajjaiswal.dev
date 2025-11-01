import React from "react";
import { TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Projects = () => {
  const projects = [
    {
      title: "HyphenView",
      description: "Enterprise application platform integrating reporting, inventory, and support modules",
      techStack: ["React.js", "Redux Toolkit", "FastAPI", "PostgreSQL", "Microservices", "Docker"],
      keyMetric: "Unified platform serving 100+ users",
      gradient: "from-blue-500 to-purple-500",
      previewRoute: "/projects/hyphenview",
      type: "Parent Platform"
    },
    {
      title: "Reporting Console",
      description: "AI-powered analytics module with natural language SQL generation",
      techStack: ["React.js", "Redux Toolkit", "FastAPI", "PostgreSQL", "Highcharts", "AI"],
      keyMetric: "65% increase in self-service analytics",
      gradient: "from-green-500 to-emerald-500",
      previewRoute: "/projects/reporting-console",
      type: "Integrated Module"
    },
    {
      title: "Inventory Management",
      description: "Asset management system handling 5000+ assets across 20 locations",
      techStack: ["FastAPI", "React.js", "Redux Toolkit", "PostgreSQL"],
      keyMetric: "70% reduction in manual tracking time",
      gradient: "from-purple-500 to-pink-500",
      previewRoute: "/projects/inventory-management",
      type: "Integrated Module"
    },
    {
      title: "HyphenDesk",
      description: "Support ticketing platform processing 500+ tickets/month",
      techStack: ["FastAPI", "React.js", "Redux Toolkit", "PostgreSQL", "Node.js"],
      keyMetric: "40% reduction in response time",
      gradient: "from-orange-500 to-red-500",
      previewRoute: "/projects/hyphendesk",
      type: "Integrated Module"
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
