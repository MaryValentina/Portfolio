'use client';

import React, { useEffect, useRef, useState } from "react";
import ResumeCard from "./ResumeCard";
import EducationCard from "./EducationCard";
import { 
  FaReact, 
  FaGraduationCap, 
  FaBriefcase
} from "react-icons/fa";

const Resume = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [educationVisible, setEducationVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (target.dataset.section === 'header') {
              setHeaderVisible(true);
            } else if (target.dataset.section === 'experience') {
              setExperienceVisible(true);
            } else if (target.dataset.section === 'education') {
              setEducationVisible(true);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (educationRef.current) observer.observe(educationRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (experienceRef.current) observer.unobserve(experienceRef.current);
      if (educationRef.current) observer.unobserve(educationRef.current);
    };
  }, []);

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-[#0a0d19] to-[#0f1220]">
      {/* Section Header */}
      <div 
        ref={headerRef}
        data-section="header"
        className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          headerVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Experience & <span className="text-cyan-300">Education</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          My journey in full-stack development, from academic foundations to real-world applications
        </p>
      </div>

      {/* Main Content */}
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          
          {/* Work Experience */}
          <div 
            ref={experienceRef}
            data-section="experience"
            className={`transform transition-all duration-1000 ease-out ${
              experienceVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <FaBriefcase className="text-cyan-400 text-lg sm:text-xl" />
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Experience
              </h2>
            </div>
            
            <ResumeCard
              Icon={FaReact}
              role="Software Development Intern"
              company="Intelligent Software Solutions | Healthcare Innovation Division"
              duration="Sep 2025 – Feb 2026"
              location="Remote"
              points={[
                "Developed front-end features for Finnish healthcare platforms using Next.js",
                "Built provider onboarding and scheduling interfaces with clean UI interactions",
                "Implemented patient appointment booking flows and location-based search",
                "Enhanced UI/UX across multiple healthcare modules"
              ]}
              tech={[
                "Next.js", "React", "TypeScript", "Tailwind CSS", 
                "REST APIs", "Mapbox", "Figma", "PostgreSQL"
              ]}
            />
          </div>

          {/* Education */}
          <div 
            ref={educationRef}
            data-section="education"
            className={`transform transition-all duration-1000 ease-out ${
              educationVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <FaGraduationCap className="text-purple-400 text-lg sm:text-xl" />
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Education
              </h2>
            </div>
            
            <EducationCard
              Icon={FaGraduationCap}
              degree="BSc (Hons) in Information Technology"
              institution="Pearson UK | University of West London"
              duration="2022–2025"
              status="Graduated in: August 2025"
              points={[
                "Specialized in software engineering and data analytics",
                "Final Project: Cloud-Based Student Attendance System",
                "Focus on SQL, Python, data analysis, and full-stack development",
                "Relevant Coursework: Web Development, Database Systems, Cloud Computing"
              ]}
              achievements={[
                "Grade: First Class Honours (Projected)",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;