import React from "react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Redux Toolkit", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend Development", 
      skills: ["FastAPI", "Flask", "Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Database & Optimization",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Query Optimization", "Indexing"]
    },
    {
      title: "AI & Integration",
      skills: ["AI Query Generation", "Natural Language Processing", "Prompt Engineering", "OpenAI API"]
    },
    {
      title: "Data Visualization",
      skills: ["Highcharts", "Dynamic Charts", "Dashboards", "Real-time Data"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "CI/CD", "Git/GitHub", "Vercel", "Netlify", "Render"]
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
