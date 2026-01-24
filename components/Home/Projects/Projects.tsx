'use client';

import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
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

  const projectsData = [
    {
      title: 'ChrisCandle',
      subtitle: 'Secret Santa Event App',
      description: 'A festive web application for organizing and joining Secret Santa events with automated matching and notifications.',
      features: [
        'Organizer flow: create events, share invitation links, manage participants',
        'Participant flow: join via link, automated emails, wishlist editing, view assigned pairs',
        'Event ID routing: simplified navigation using Firestore IDs',
        'Polished UX: festive design, clear dashboards, recruiter-ready workflows'
      ],
      tech: ['React', 'Firebase', 'Firestore', 'TypeScript', 'Vite'],
      image: '/images/project1.jpeg',
      link: 'https://chris-candle.vercel.app/',
      githubLink: 'https://github.com/MaryValentina/ChrisCandle',
    },
    {
      title: 'Healthcare Booking System',
      subtitle: 'Confidential Client Project',
      description: 'A web-based platform designed to streamline healthcare provider and patient interactions. The system enables providers to manage availability and appointments while patients can search, book, and manage their healthcare visits online.',
      features: [
        'Provider onboarding and profile management',
        'Calendar creation and scheduling workflows',
        'Patient appointment booking with secure API integration',
        'Map-based provider search (using Mapbox/Leaflet)',
        'Accessibility-focused UI with consistent design patterns'
      ],
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'PostgreSQL', 'GitHub', 'Figma'],
      image: '/images/b2.jpg',
      link: '#',
      githubLink: '#',
    },
  ];

  return (
    <div className="pt-20 pb-16 bg-[#0d0d1f]">
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
          Featured <span className="text-cyan-300">Projects</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          A showcase of my work in full-stack development and modern web technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              features={project.features}
              tech={project.tech}
              image={project.image}
              link={project.link}
              githubLink={project.githubLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
