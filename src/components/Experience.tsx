
import React from "react";
import { Briefcase, Calendar, TrendingUp, Users, Clock, BarChart3 } from "lucide-react";

export const Experience = () => {
  const projects = [
    {
      name: "HyphenView - AI-Powered Reporting Console",
      description: "Enterprise reporting platform with AI-driven SQL query generation serving 50+ users",
      features: [
        "AI query builder (natural language → SQL)",
        "20+ Highcharts visualization types",
        "Drag-and-drop table builder",
        "Automated report scheduling",
        "Advanced filtering (date ranges, AND/OR conditions, aggregations)",
        "Role-based access control (RBAC)"
      ],
      metrics: [
        { icon: TrendingUp, value: "65%", label: "increase in self-service analytics" },
        { icon: Clock, value: "45%", label: "faster load times (12s → 6.6s)" },
        { icon: Users, value: "50+", label: "daily active users" },
        { icon: BarChart3, value: "10+", label: "hours/week saved" }
      ],
      techStack: ["React.js", "Redux Toolkit", "FastAPI", "PostgreSQL", "Highcharts", "Docker"]
    },
    {
      name: "Inventory Management System",
      description: "Full-stack system managing 5000+ assets across 20 locations",
      features: [
        "Pivot-style views with real-time synchronization",
        "Dynamic filtering and location-based tracking",
        "Complex Redux state management for nested data",
        "Integration with HyphenView analytics"
      ],
      metrics: [
        { icon: TrendingUp, value: "70%", label: "reduction in manual tracking time" }
      ],
      techStack: ["FastAPI", "React.js", "Redux Toolkit", "PostgreSQL"]
    },
    {
      name: "HyphenDesk Support Ticketing Platform",
      description: "Enterprise ticketing system processing 500+ tickets/month",
      features: [
        "Automated routing and SLA tracking",
        "Real-time email notifications",
        "Priority-based assignment",
        "Resolution analytics dashboard"
      ],
      metrics: [
        { icon: Clock, value: "40%", label: "reduction in response time (4hrs → 2.4hrs)" }
      ],
      techStack: ["FastAPI", "React.js", "Redux Toolkit", "PostgreSQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
        </div>

        {/* Company Header */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="text-purple-600" size={32} />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Erasmith Technologies Pvt Ltd</h3>
              <p className="text-purple-600 font-semibold text-lg">Full Stack Developer</p>
            </div>
            <div className="ml-auto text-right">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} />
                <span>Feb 2024 - Present</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{project.name}</h4>
              <p className="text-lg text-gray-700 mb-6">{project.description}</p>

              {/* Key Features */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Impact Metrics:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="bg-white rounded-xl p-4 text-center shadow-sm">
                      <metric.icon className="text-purple-600 mx-auto mb-2" size={24} />
                      <div className="text-2xl font-bold text-purple-600 mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Tech Stack:</h5>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
