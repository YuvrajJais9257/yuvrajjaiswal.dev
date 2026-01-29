import React from "react";
import { CheckCircle } from "lucide-react";

export const About = () => {
  const achievements = [
    {
      title: "Performance Optimization",
      description: "Improved dashboard load times by 45% (12s → 6.6s)"
    },
    {
      title: "AI Integration",
      description: "Built AI query builder with 65% increase in self-service analytics"
    },
    {
      title: "Automation Expert",
      description: "Reduced QA testing cycles by 60% through automated suite"
    },
    {
      title: "Scalability",
      description: "Deployed 100+ production applications serving 1000+ users"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Full Stack Developer with 2 years building production applications integrating AI/LLM capabilities using LangChain, OpenAI GPT-4, and RAG pipelines.
            </p>
            <p>
              Experience developing analytics platforms, Text-to-SQL systems, and AI-powered agents serving 1000+ users. Strong foundation in React, Python (Flask/FastAPI), PostgreSQL, and modern full-stack development practices.
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 KEY ACHIEVEMENTS:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Built AI-powered Text-to-SQL query generator using LangChain multi-agent workflows and OpenAI GPT-4 (90% accuracy, 65% user adoption)</li>
                <li>• Built and maintain 80+ RESTful API endpoints using Flask/FastAPI with JWT authentication</li>
                <li>• Optimized PostgreSQL database performance by 45% (12s → 6.6s) through strategic indexing</li>
                <li>• Created automated ETL pipelines using Pandas to process 5000+ records</li>
                <li>• Deployed 100+ applications using Docker and CI/CD pipelines maintaining 99.9% uptime</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};