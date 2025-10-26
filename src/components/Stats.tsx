import React from "react";

export const Stats = () => {
  const stats = [
    { number: "1.8", label: "Years Experience" },
    { number: "100+", label: "Apps Deployed" },
    { number: "1000+", label: "Active Users" },
    { number: "45%", label: "Performance Boost" },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};