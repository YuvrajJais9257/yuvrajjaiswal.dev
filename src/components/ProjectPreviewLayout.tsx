import React, { useState } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ExternalLink, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

interface ProjectPreviewLayoutProps {
  title: string;
  description: string;
  status: string;
  integrationNote?: string;
  techStack: string[];
  heroImage: Screenshot;
  problemStatement: string;
  solutionOverview: string;
  keyFeatures: string[];
  impactMetrics: Array<{
    icon: string;
    value: string;
    label: string;
  }>;
  myRole: string;
  integrationDetails?: string;
  screenshots: Screenshot[];
  relatedProjects?: Array<{
    name: string;
    description: string;
    route: string;
  }>;
  architectureDiagram?: string;
  challenges?: string[];
}

export const ProjectPreviewLayout: React.FC<ProjectPreviewLayoutProps> = ({
  title,
  description,
  status,
  integrationNote,
  techStack,
  heroImage,
  problemStatement,
  solutionOverview,
  keyFeatures,
  impactMetrics,
  myRole,
  integrationDetails,
  screenshots,
  relatedProjects,
  challenges
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState<{ [key: string]: boolean }>({});

  const allImages = [heroImage, ...screenshots];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = React.useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const prevImage = React.useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  const handleImageLoad = (src: string) => {
    setImageLoading(prev => ({ ...prev, [src]: false }));
  };

  const handleImageLoadStart = (src: string) => {
    setImageLoading(prev => ({ ...prev, [src]: true }));
  };

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, nextImage, prevImage]);

  return (
    <div className="min-h-screen bg-white">
      {/* Disclaimer Banner */}
      <div className="bg-orange-50 border-b border-orange-200 py-3 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-orange-800 text-sm">
            💡 This project is currently under maintenance. Screenshots shown are from UAT/demo environments for portfolio demonstration purposes only.
          </p>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>›</span>
            <span>Projects</span>
            <span>›</span>
            <span className="text-gray-900 font-medium">{title}</span>
          </div>

          {/* Back Button */}
          <Link 
            to="/#projects" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {title}
              </h1>
              <p className="text-xl text-gray-700 mb-6">{description}</p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  {status}
                </span>
                {integrationNote && (
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {integrationNote}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div 
                className="relative cursor-pointer group"
                onClick={() => openLightbox(0)}
              >
                {imageLoading[heroImage.src] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"></div>
                )}
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="w-full h-auto rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  onLoadStart={() => handleImageLoadStart(heroImage.src)}
                  onLoad={() => handleImageLoad(heroImage.src)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl flex items-center justify-center">
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">{heroImage.caption}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Problem Statement</h3>
                  <p className="text-gray-700 leading-relaxed">{problemStatement}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Solution Overview</h3>
                  <p className="text-gray-700 leading-relaxed">{solutionOverview}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Impact Metrics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {impactMetrics.map((metric, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 text-center">
                    <div className="text-2xl mb-2">{metric.icon}</div>
                    <div className="text-2xl font-bold text-purple-600 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">My Role & Responsibilities</h3>
                <p className="text-gray-700 leading-relaxed">{myRole}</p>
              </div>

              {integrationDetails && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Integration Details</h3>
                  <p className="text-gray-700 leading-relaxed">{integrationDetails}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots Gallery */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Screenshots Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((screenshot, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                onClick={() => openLightbox(index + 1)}
              >
                <div className="relative">
                  {imageLoading[screenshot.src] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  )}
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onLoadStart={() => handleImageLoadStart(screenshot.src)}
                    onLoad={() => handleImageLoad(screenshot.src)}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{screenshot.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Details */}
      {challenges && challenges.length > 0 && (
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Challenges & Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{challenge}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Related Projects */}
      {relatedProjects && relatedProjects.length > 0 && (
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((project, index) => (
                <Link
                  key={index}
                  to={project.route}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <span className="text-purple-600 text-sm font-medium">View Preview →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in learning more about this project?
          </h2>
          <p className="text-gray-600 mb-8">
            Let's discuss how I can bring similar solutions to your organization.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4"
            >
              <a href="mailto:yuvraj8257@gmail.com">
                <Mail size={20} className="mr-2" />
                Email Me About This Project
              </a>
            </Button>
            {/* Source code button removed for company projects - maintaining professional confidentiality */}
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">
            Source code is proprietary to Erasmith Technologies. Happy to discuss architecture, 
            technical decisions, and implementation details in an interview setting.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight size={48} />
            </button>

            {/* Image */}
            <img
              src={allImages[currentImageIndex].src}
              alt={allImages[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain"
            />

            {/* Caption */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded">
              <p>{allImages[currentImageIndex].caption}</p>
              <p className="text-sm text-gray-300 mt-1">
                {currentImageIndex + 1} of {allImages.length}
              </p>
            </div>
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
          ></div>
        </div>
      )}
    </div>
  );
};