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
              I'm a Full Stack Developer at Erasmith Technologies with 1.8 years of production 
              experience building enterprise applications that serve 1000+ users daily.
            </p>
            <p>
              My expertise lies in React.js, FastAPI, and AI integration. I've architected an 
              AI-powered reporting console with natural language SQL generation, developed inventory 
              management systems handling 5000+ assets, and built support ticketing platforms 
              processing 500+ tickets monthly.
            </p>
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