'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiPostgresql,
  SiTailwindcss,
} from 'react-icons/si';

type SkillCardProps = {
  name: string;
  icon: string;
  color: string;
  index: number;
};

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  FaReact: FaReact,
  SiNextdotjs: SiNextdotjs,
  SiTypescript: SiTypescript,
  SiJavascript: SiJavascript,
  FaNode: FaNode,
  SiFirebase: SiFirebase,
  SiPostgresql: SiPostgresql,
  FaGitAlt: FaGitAlt,
  SiTailwindcss: SiTailwindcss,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaPython: FaPython,
};

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, color, index }) => {
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

  const IconComponent = iconMap[icon] || FaReact;

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-20 scale-90'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="bg-[#0f1220] border border-[#1d2338] rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-cyan-900/20 flex flex-col items-center justify-center h-full">
        <div className={`${color} text-4xl mb-3 group-hover:scale-125 transition-transform duration-300`}>
          <IconComponent />
        </div>
        <p className="text-white text-xs font-medium text-center group-hover:text-cyan-300 transition-colors duration-300">
          {name}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
