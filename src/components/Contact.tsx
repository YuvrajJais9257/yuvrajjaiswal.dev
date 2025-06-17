
import { Mail, Github, Linkedin, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:yuvraj8257@gmail.com"
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-300 text-sm">yuvraj8257@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/yuvraj-jaiswal-65ab5a217/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-300 text-sm">Connect with me</p>
          </a>

          <a
            href="https://github.com/YuvrajJais9257"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <Github className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-semibold mb-2">GitHub</h3>
            <p className="text-gray-300 text-sm">Check out my code</p>
          </a>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-500/30">
          <User className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-4">Open to Opportunities</h3>
          <p className="text-gray-300 mb-6">
            Currently seeking roles as: Full Stack Developer, Backend Developer, Python Developer, 
            React Developer, Software Engineer, or Tech Lead positions.
          </p>
          <p className="text-gray-400 text-sm mb-6">📍 Based in Noida, India | +91-7838379576</p>
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
          >
            <a href="mailto:yuvraj8257@gmail.com">Get In Touch</a>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <p className="text-gray-400 text-sm">
            © 2024 Yuvraj Jaiswal. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
