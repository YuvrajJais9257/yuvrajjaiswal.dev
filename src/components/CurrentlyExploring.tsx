import React from "react";
import { BookOpen, Code, Search } from "lucide-react";

export const CurrentlyExploring = () => {
  const sections = [
    {
      title: "Learning",
      icon: <BookOpen className="text-blue-600" size={32} />,
      items: [
        "Next.js 14 and App Router",
        "AI Integration (OpenAI/Claude APIs)",
        "Advanced React Performance",
        "System Design for Scale"
      ]
    },
    {
      title: "Building",
      icon: <Code className="text-green-600" size={32} />,
      items: [
        "AI content generation platform",
        "Real-time collaboration tools",
        "Open source contributions"
      ]
    },
    {
      title: "Seeking",
      icon: <Search className="text-purple-600" size={32} />,
      items: [
        "Full Stack Developer roles in product-based companies or AI-forward startups",
        "Expected: ₹12-20 LPA",
        "Notice: Immediate to 15 days",
        "Location: Remote, Noida, Bangalore, Gurgaon"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What I'm Working On
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                {section.icon}
                <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};