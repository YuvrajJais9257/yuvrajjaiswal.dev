import {
  MonitorSmartphone,
  ServerCog,
  Database,
  CloudCog,
  GitBranch,
  Github,
  FlaskConical,
  FlaskRound,
  TestTube,
  BarChart3,
  BrainCircuit,
  Ruler,
  LockKeyhole,
  Network,
  Code,
  Settings,
  Wrench,
  Globe,
  FileCode,
  LayoutTemplate,
  Terminal,
  FileText,
  Cpu,
  Cloud,
  FolderGit2,
  Braces,
  BadgeCent,
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <MonitorSmartphone className="w-8 h-8 text-blue-400" />,
      skills: [
        "React.js",
        "Angular",
        "React Native",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "jQuery",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      icon: <ServerCog className="w-8 h-8 text-green-400" />,
      skills: [
        "Flask",
        "FastAPI",
        "Node.js",
        "PHP",
        "REST APIs",
        "Microservices",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "DevOps & Cloud",
      icon: <CloudCog className="w-8 h-8 text-orange-400" />,
      skills: [
        "Docker",
        "Nginx",
        "Linux",
        "CI/CD",
        "Render",
        "Netlify",
        "Vercel",
        "DigitalOcean",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const skillIcons: { [key: string]: JSX.Element } = {
    "React.js": <LayoutTemplate size={16} className="mr-1" />,
    Angular: <Globe size={16} className="mr-1" />,
    "React Native": <MonitorSmartphone size={16} className="mr-1" />,
    JavaScript: <Braces size={16} className="mr-1" />,
    TypeScript: <FileCode size={16} className="mr-1" />,
    HTML5: <FileText size={16} className="mr-1" />,
    CSS3: <LayoutTemplate size={16} className="mr-1" />,
    jQuery: <Code size={16} className="mr-1" />,

    Flask: <FlaskConical size={16} className="mr-1" />,
    FastAPI: <FlaskRound size={16} className="mr-1" />,
    "Node.js": <Terminal size={16} className="mr-1" />,
    PHP: <FileCode size={16} className="mr-1" />,
    "REST APIs": <Network size={16} className="mr-1" />,
    Microservices: <Cpu size={16} className="mr-1" />,

    PostgreSQL: <Database size={16} className="mr-1" />,
    MySQL: <Database size={16} className="mr-1" />,
    SQLite: <Database size={16} className="mr-1" />,
    MongoDB: <Database size={16} className="mr-1" />,

    Docker: <Wrench size={16} className="mr-1" />,
    Nginx: <Settings size={16} className="mr-1" />,
    Linux: <Terminal size={16} className="mr-1" />,
    "CI/CD": <FolderGit2 size={16} className="mr-1" />,
    Render: <Cloud size={16} className="mr-1" />,
    Netlify: <Cloud size={16} className="mr-1" />,
    Vercel: <Cloud size={16} className="mr-1" />,
    DigitalOcean: <CloudCog size={16} className="mr-1" />,
  };

  const additionalSkillIcons: { [key: string]: JSX.Element } = {
    Git: <GitBranch size={16} className="mr-1" />,
    GitHub: <Github size={16} className="mr-1" />,
    Postman: <TestTube size={16} className="mr-1" />,
    Selenium: <FlaskConical size={16} className="mr-1" />,
    Pandas: <BarChart3 size={16} className="mr-1" />,
    NumPy: <BrainCircuit size={16} className="mr-1" />,
    Matplotlib: <BarChart3 size={16} className="mr-1" />,
    "Scikit-learn": <BrainCircuit size={16} className="mr-1" />,
    Tkinter: <Ruler size={16} className="mr-1" />,
    Authentication: <LockKeyhole size={16} className="mr-1" />,
    "System Design": <Network size={16} className="mr-1" />,
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Skills
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 shadow-md hover:shadow-lg hover:border-slate-500/50 transition-all duration-300 hover:scale-[1.03]"
            >
              <div
                className={`inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r ${category.color} shadow-lg mb-6`}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-sm font-medium text-gray-100 bg-slate-700/40 hover:bg-slate-600/50 px-4 py-1.5 rounded-full transition-all duration-200 border border-slate-600/40 flex items-center"
                  >
                    {skillIcons[skill] || null}
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 tracking-wide">
              Additional Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Git",
                "GitHub",
                "Postman",
                "Selenium",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "Scikit-learn",
                "Tkinter",
                "Authentication",
                "System Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 bg-slate-700/50 hover:bg-slate-600/60 text-gray-100 border border-slate-600/40 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md flex items-center"
                >
                  {additionalSkillIcons[skill] || null}
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
