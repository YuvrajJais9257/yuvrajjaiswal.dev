import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Asset Monitoring Dashboard",
      description:
        "Real-time monitoring system built with MERN stack + Python, improving system visibility by 30% and reducing issue resolution time by 50%.",
      tech: ["React", "Node.js", "Python", "MongoDB", "Real-time"],
      category: "Full Stack",
      gradient: "from-blue-500 to-cyan-500",
      code: "https://github.com/YuvrajJais9257/Asset_Monitoring_Dashboard.git",
      live: "https://hyphenview.in",
    },
    {
      title: "Blog Platform with Authentication",
      description:
        "Full-featured blog platform with user management, post CRUD operations, admin panel, and secure password hashing.",
      tech: ["Flask", "PostgreSQL", "SQLAlchemy", "Authentication"],
      category: "Full Stack",
      gradient: "from-purple-500 to-pink-500",
      code: "https://github.com/YuvrajJais9257/blog-for-deployment.git",
      live: "https://blog-for-deployment-h5fn.onrender.com",
    },
    {
      title: "Internal API Testing Suite",
      description:
        "Postman-style testing tool reducing QA cycles by 60% across multiple backend teams with comprehensive HTTP request testing.",
      tech: ["Flask", "REST Client", "Testing", "QA"],
      category: "DevTools",
      gradient: "from-green-500 to-emerald-500",
      code: "https://github.com/YuvrajJais9257/hyphenview_restapi_module.git",
      live: "https://hyphenviewrestapimodule.vercel.app/",
    },
    {
      title: "Cafe Finder Platform",
      description:
        "Decoupled full-stack application with React frontend and Flask API backend, featuring JWT authentication and advanced filtering.",
      tech: ["React", "Flask", "JWT", "REST API"],
      category: "Full Stack",
      gradient: "from-indigo-500 to-purple-500",
      code: "https://github.com/YuvrajJais9257/coffee_tracker_flask.git",
      live: "https://coffee-tracker-flask.onrender.com",
    },
    {
      title: "Google Play Store Analytics",
      description:
        "Cleaned and analyzed app data from Google Play Store; visualized trends in app pricing, categories, and ratings using Plotly and Seaborn.",
      tech: ["Python", "Pandas", "Plotly", "Seaborn", "Data Analysis"],
      category: "Data Science",
      gradient: "from-teal-500 to-blue-500",
      code: "https://github.com/YuvrajJais9257/GooglePlayStoreAppAnalytics.git",
      live: "https://colab.research.google.com/drive/1R3vE_xJ9BYTEuGUhDSlyFFCmoFNz0OPW?usp=sharing",
    },
    {
      title: "Lego Data Analysis",
      description:
        "Data science project analyzing LEGO sets using pandas, seaborn, and matplotlib. Discovered patterns in theme evolution and piece count distribution.",
      tech: ["Python", "Pandas", "Seaborn", "Matplotlib", "Data Cleaning"],
      category: "Data Science",
      gradient: "from-yellow-500 to-red-500",
      code: "https://github.com/YuvrajJais9257/Lego_Data_Analysis.git",
      live: "https://colab.research.google.com/drive/1P9AdgjqAnCdiTJpt8EGkodrrxHInIJSZ?usp=sharing",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of applications I've built, from real-time dashboards to
            comprehensive web platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white w-full"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white w-full`}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-black text-white hover:bg-white hover:text-black border border-white/20"
          >
            <a
              href="https://github.com/YuvrajJais9257"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
