import { Mail, Github, LinkedinIcon, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const contactCards = [
    {
      icon: <Mail className="text-purple-600" size={24} />,
      title: "Email",
      value: "yuvraj.jaiswal@gmail.com",
      href: "mailto:yuvraj.jaiswal@gmail.com",
    },
    {
      icon: <Phone className="text-purple-600" size={24} />,
      title: "Phone",
      value: "+91-7838379576",
      href: "tel:+917838379576",
    },
    {
      icon: <LinkedinIcon className="text-purple-600" size={24} />,
      title: "LinkedIn",
      value: "Connect",
      href: "https://linkedin.com/in/yuvraj-jaiswal-65ab5a217",
    },
    {
      icon: <Github className="text-purple-600" size={24} />,
      title: "GitHub",
      value: "View Code",
      href: "https://github.com/YuvrajJais9257",
    },
    {
      icon: <MapPin className="text-purple-600" size={24} />,
      title: "Location",
      value: "Noida, India",
      href: null,
    },
    {
      icon: <Clock className="text-purple-600" size={24} />,
      title: "Availability",
      value: "Immediate to 15 days",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
        </div>

        {/* Primary CTA */}
        <div className="mb-16">
          <Button
            size="lg"
            asChild
            className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 text-xl mb-4"
          >
            <a href="mailto:yuvraj.jaiswal@gmail.com">Send Me an Email</a>
          </Button>
          <div className="mt-4">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg"
            >
              <a
                href="/Yuvraj_Jaiswal_Full_Stack_Dev_2_Years_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                {card.icon}
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
              </div>
              {card.href ? (
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  {card.value}
                </a>
              ) : (
                <p className="text-gray-600">{card.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
