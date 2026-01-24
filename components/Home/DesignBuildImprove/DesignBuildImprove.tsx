'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaPalette, FaCode, FaRocket } from 'react-icons/fa';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const Card = ({ icon, title, description, delay }: CardProps) => {
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
        threshold: 0.2,
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
      className={`transform transition-all duration-1000 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-20 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative group h-full">
        {/* Card Background */}
        <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] rounded-2xl p-8 h-full border border-[#1d2338] hover:border-cyan-400/50 transition-all duration-300 shadow-xl hover:shadow-cyan-900/20">
          
          {/* Animated Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-cyan-500/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Icon Container */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                {/* Icon Circle */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-full flex items-center justify-center border border-cyan-800/20 group-hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300">
                    {icon}
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white text-center mb-4 group-hover:text-cyan-200 transition-colors duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-center text-sm leading-relaxed">
              {description}
            </p>

            {/* Decorative Bottom Line */}
            <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesignBuildImprove = () => {
  const cards = [
    {
      icon: <FaPalette className="w-10 h-10" />,
      title: 'Design',
      description: 'Creating beautiful, intuitive user interfaces that provide exceptional user experiences. From wireframes to pixel-perfect designs.',
    },
    {
      icon: <FaCode className="w-10 h-10" />,
      title: 'Build',
      description: 'Transforming designs into robust, scalable applications using modern technologies and best practices. Clean code, clean architecture.',
    },
    {
      icon: <FaRocket className="w-10 h-10" />,
      title: 'Improve',
      description: 'Continuously optimizing performance, enhancing features, and refining user experiences. Always learning, always improving.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#0d0d1f] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Design.{' '}
            <span className="text-cyan-300">Build.</span>{' '}
            <span className="text-purple-300">Improve.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A simple philosophy that drives everything I create
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <Card
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignBuildImprove;
