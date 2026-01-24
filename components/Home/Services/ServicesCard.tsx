'use client';

// ServicesCard.tsx
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type ServicesCardProps = {
  icon: string;
  name: string;
  description: string;
  index?: number;
};

const ServicesCard: React.FC<ServicesCardProps> = ({ icon, name, description, index = 0 }) => {
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
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-[#1a1a2e] p-5 sm:p-6 rounded-lg flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:shadow-cyan-900/20 transition-all duration-300 border border-[#1d2338] hover:border-cyan-400/50 group h-full">
        <Image src={icon} alt={name} width={64} height={64} className="w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110" />
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300">{name}</h3>
        <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
