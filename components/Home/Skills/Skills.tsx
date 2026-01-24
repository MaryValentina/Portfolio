'use client';

import React, { useEffect, useRef, useState } from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const skillsData = [
    {
      name: 'React',
      icon: 'FaReact',
      color: 'text-cyan-400',
    },
    {
      name: 'Next.js',
      icon: 'SiNextdotjs',
      color: 'text-white',
    },
    {
      name: 'TypeScript',
      icon: 'SiTypescript',
      color: 'text-blue-400',
    },
    {
      name: 'JavaScript',
      icon: 'SiJavascript',
      color: 'text-yellow-400',
    },
    {
      name: 'Node.js',
      icon: 'FaNode',
      color: 'text-green-400',
    },
    {
      name: 'Firebase',
      icon: 'SiFirebase',
      color: 'text-orange-400',
    },
    {
      name: 'PostgreSQL',
      icon: 'SiPostgresql',
      color: 'text-blue-300',
    },
    {
      name: 'Git',
      icon: 'FaGitAlt',
      color: 'text-orange-500',
    },
    {
      name: 'Tailwind CSS',
      icon: 'SiTailwindcss',
      color: 'text-cyan-300',
    },
    {
      name: 'HTML5',
      icon: 'FaHtml5',
      color: 'text-orange-500',
    },
    {
      name: 'CSS3',
      icon: 'FaCss3Alt',
      color: 'text-blue-400',
    },
    {
      name: 'Python',
      icon: 'FaPython',
      color: 'text-yellow-400',
    },
  ];

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-[#0d0d1f] to-[#0a0d19]">
      {/* Section Header */}
      <div 
        ref={headerRef}
        className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          headerVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Skills & <span className="text-cyan-300">Technologies</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Technologies and tools I work with to build modern, scalable applications
        </p>
      </div>

      {/* Skills Grid */}
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
