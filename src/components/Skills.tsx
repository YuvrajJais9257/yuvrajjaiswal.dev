import React from "react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML Integration",
      skills: ["LangChain", "OpenAI GPT-4", "Multi-Agent Systems", "RAG Pipelines", "Prompt Engineering", "Text-to-SQL"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Redux", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Backend Development", 
      skills: ["Python", "Flask", "FastAPI", "Node.js", "RESTful APIs (80+ endpoints)", "JWT Auth"]
    },
    {
      title: "Database & ORM",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLAlchemy ORM", "Query Optimization"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Git", "CI/CD", "Linux", "Nginx"]
    },
    {
      title: "Data Processing",
      skills: ["Pandas", "ETL Pipelines", "Data Normalization", "Real-time Analytics"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
