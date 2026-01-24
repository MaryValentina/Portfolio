'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaCheckCircle } from 'react-icons/fa';

type ProjectCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  tech: string[];
  image: string;
  link: string;
  githubLink?: string;
  index: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title,
  subtitle,
  description, 
  features,
  tech, 
  image, 
  link,
  githubLink,
  index 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-20 scale-95'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div 
        className={`block bg-[#0f1220] border border-[#1d2338] rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group shadow-lg hover:shadow-cyan-900/30 hover:scale-[1.03] relative w-full max-w-md mx-auto ${link !== '#' ? 'cursor-pointer' : ''}`}
        onClick={link !== '#' ? () => window.open(link, '_blank', 'noopener,noreferrer') : undefined}
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        
        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/0 group-hover:border-cyan-400/30 transition-all duration-500 pointer-events-none"></div>

        {/* Project Image - Square */}
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1220] via-[#0f1220]/50 to-transparent"></div>
          
          {/* Animated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/10 transition-all duration-700"></div>
        </div>

        {/* Project Content */}
        <div className="p-4 sm:p-6 relative z-10">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-1 group-hover:text-cyan-300 transition-colors duration-300 transform group-hover:translate-x-1">
              {title}
            </h3>
            {subtitle && (
              <p className="text-cyan-200/80 text-xs sm:text-sm font-medium mb-2 sm:mb-3 transform group-hover:translate-x-1 transition-transform duration-300">
                {subtitle}
              </p>
            )}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
              {description}
            </p>
          </div>

          {/* Key Features - All visible */}
          {features && features.length > 0 && (
            <div className="mb-4">
              <h4 className="text-white font-semibold text-xs mb-2 text-cyan-300">Key Features:</h4>
              <ul className="space-y-2">
                {features.map((feature, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-2 text-gray-300 text-xs transform group-hover:translate-x-1 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <FaCheckCircle className="text-cyan-400 text-xs mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-4">
            <h4 className="text-white font-semibold text-xs mb-2 text-cyan-300">Technologies:</h4>
            <div className="flex flex-wrap gap-1.5">
              {tech.map((item, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-[#151b2f] border border-[#1d2338] rounded text-gray-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {link !== '#' && (
            <div className="flex items-center gap-4 pt-4 border-t border-[#1d2338] group-hover:border-cyan-800/50 transition-colors duration-300">
              <span className="flex items-center gap-2 text-cyan-300 font-medium text-sm group-hover:text-cyan-200 transition-colors duration-300 transform group-hover:translate-x-1">
                <FaExternalLinkAlt className="text-xs group-hover:rotate-45 transition-transform duration-300" />
                <span>Try it live</span>
              </span>
              {githubLink && githubLink !== '#' && (
                <span 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(githubLink, '_blank', 'noopener,noreferrer');
                  }}
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-300 text-sm transition-colors duration-300 transform group-hover:translate-x-1"
                >
                  <FaGithub className="text-xs group-hover:scale-110 transition-transform duration-300" />
                  <span>Code</span>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
