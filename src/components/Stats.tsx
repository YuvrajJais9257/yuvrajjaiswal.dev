import React from "react";

export const Stats = () => {
  const stats = [
    { number: "2", label: "Years Experience" },
    { number: "80+", label: "Production APIs" },
    { number: "1000+", label: "Active Users" },
    { number: "99.9%", label: "System Uptime" },
    { number: "5000+", label: "Assets Managed" },
    { number: "20+", label: "Locations Served" },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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