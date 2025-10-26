import React from "react";
import { Github, LinkedinIcon, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400">
              © 2025 Yuvraj Jaiswal. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Built with React.js
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/YuvrajJais9257"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yuvraj-jaiswal-65ab5a217"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="mailto:yuvraj8257@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+917838379576"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};