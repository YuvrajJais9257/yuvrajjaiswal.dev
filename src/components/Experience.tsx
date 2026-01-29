
import React from "react";
import { Briefcase, Calendar, TrendingUp, Users, Clock, BarChart3 } from "lucide-react";

export const Experience = () => {
  const projects = [
    {
      name: "AI/LLM Integration Projects",
      description: "Built AI-powered Text-to-SQL query generator using LangChain multi-agent workflows and OpenAI GPT-4",
      features: [
        "LangChain multi-agent workflows with OpenAI GPT-4 integration",
        "Few-shot prompt engineering templates with context memory",
        "Natural language to SQL conversion (90% accuracy)",
        "ChatGPT-style interface with streaming responses",
        "Real-time natural language query processing for 50+ users",
        "Interactive visualizations and intelligent PostgreSQL query generation"
      ],
      metrics: [
        { icon: TrendingUp, value: "90%", label: "AI query accuracy rate" },
        { icon: Clock, value: "65%", label: "user adoption rate" },
        { icon: Users, value: "50+", label: "active users served" },
        { icon: BarChart3, value: "100%", label: "non-technical user accessibility" }
      ],
      techStack: ["LangChain", "OpenAI GPT-4", "Flask", "FastAPI", "React.js", "PostgreSQL"]
    },
    {
      name: "Backend & Full Stack Development",
      description: "Built and maintain 80+ RESTful API endpoints with comprehensive system optimization",
      features: [
        "80+ RESTful API endpoints using Flask/FastAPI",
        "JWT authentication and role-based access control",
        "Automated ETL pipelines processing 5000+ records using Pandas",
        "PostgreSQL performance optimization (45% improvement: 12s → 6.6s)",
        "10+ production dashboards with React.js and Redux",
        "Real-time analytics and KPI tracking systems"
      ],
      metrics: [
        { icon: TrendingUp, value: "45%", label: "database performance improvement" },
        { icon: Clock, value: "80+", label: "API endpoints maintained" },
        { icon: Users, value: "5000+", label: "records processed via ETL" },
        { icon: BarChart3, value: "10+", label: "production dashboards built" }
      ],
      techStack: ["Flask", "FastAPI", "React.js", "Redux", "PostgreSQL", "Pandas", "JWT"]
    },
    {
      name: "System Design & DevOps",
      description: "Architected microservices infrastructure and deployment pipelines",
      features: [
        "Microservices infrastructure supporting AI agent workflows",
        "Docker containerization and CI/CD pipeline deployment",
        "100+ applications deployed maintaining 99.9% uptime",
        "Automated testing suite covering 80+ endpoints",
        "QA validation cycle reduction by 60%",
        "Database integrations and performance monitoring"
      ],
      metrics: [
        { icon: TrendingUp, value: "99.9%", label: "system uptime maintained" },
        { icon: Clock, value: "60%", label: "QA cycle reduction" },
        { icon: Users, value: "100+", label: "applications deployed" },
        { icon: BarChart3, value: "80+", label: "endpoints tested automatically" }
      ],
      techStack: ["Docker", "CI/CD", "Linux", "Nginx", "Microservices", "Testing Automation"]
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
              <h3 className="text-2xl font-bold text-gray-900">Erasmith Pvt Ltd</h3>
              <p className="text-purple-600 font-semibold text-lg">Full Stack Developer</p>
            </div>
            <div className="ml-auto text-right">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} />
                <span>Feb 2024 - Present (Completed 2-year service commitment)</span>
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
