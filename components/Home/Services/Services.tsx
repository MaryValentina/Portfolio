'use client';

// Services.tsx
import React, { useEffect, useRef, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeadingVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const servicesData = [
    {
      icon: '/images/i1.png',
      name: 'Web Development',
      description: 'Responsive websites, landing pages, portfolios, and corporate websites.',
    },
    {
      icon: '/images/i2.png',
      name: 'Full-Stack Development',
      description: 'Complete end-to-end web applications with front-end and back-end integration.',
    },
    {
      icon: '/images/i3.png',
      name: 'UI / UX Implementation',
      description: 'Transforming design mockups into seamless, user-friendly interfaces.',
    },
    {
      icon: '/images/i4.png',
      name: 'API Integration',
      description: 'Connecting apps with external services efficiently and securely.',
    },
    {
      icon: '/images/i5.png',
      name: 'Database & Backend Logic',
      description: 'Managing data storage, server logic, and optimized back-end solutions.',
    },
    {
      icon: '/images/i6.png',
      name: 'Deployment & DevOps',
      description: 'Deploying apps, automating workflows, and maintaining cloud infrastructure.',
    },
  ];

  return (
    <div className="pt-16 pb-16 bg-[#0d0d1f] services-section" data-section="services" id="services">
      <h1
        ref={headingRef}
        className={`text-center text-white text-2xl md:text-4xl xl:text-4xl font-bold transform transition-all duration-1000 ease-out ${
          headingVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        Design. <span className="text-cyan-300">Build.</span>{' '}
        <span className="text-purple-300">Improve</span>
      </h1>

      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {servicesData.map((service, index) => (
          <ServicesCard
            key={service.name}
            icon={service.icon}
            name={service.name}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
