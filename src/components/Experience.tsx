
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Building scalable solutions and driving innovation
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
          
          <div className="relative pl-20">
            <div className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900"></div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="text-blue-400" size={24} />
                <div>
                  <h3 className="text-2xl font-semibold text-white">Full Stack Developer</h3>
                  <p className="text-purple-400 font-medium">Erasmith Pvt Ltd, Noida</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="text-gray-400" size={16} />
                <span className="text-gray-400">Feb 2024 – Present</span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-500/30">
                    <h4 className="text-green-400 font-semibold mb-2">Performance Impact</h4>
                    <p className="text-gray-300 text-sm">Improved system visibility by 30% and reduced issue resolution time by 50%</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg border border-blue-500/30">
                    <h4 className="text-blue-400 font-semibold mb-2">Automation</h4>
                    <p className="text-gray-300 text-sm">Saved 10+ hours/week through automated reporting systems</p>
                  </div>
                </div>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Built and deployed a real-time Asset Monitoring Dashboard using MERN stack + Python</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Developed "HyphenDesk" customer support system managing 500+ tickets/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Engineered internal API testing suite reducing QA cycles by 60%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Boosted database performance by 45% via indexed queries and pagination</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">Deployment Experience</h3>
            <p className="text-blue-400 text-2xl font-bold mb-2">113+</p>
            <p className="text-gray-300">Applications deployed across Netlify, Vercel, and Render</p>
          </div>
        </div>
      </div>
    </section>
  );
};
