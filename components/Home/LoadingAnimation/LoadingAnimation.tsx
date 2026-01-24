'use client';

import React, { useEffect, useState } from 'react';
import { FaCode } from 'react-icons/fa';

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    // Set mounted to true only on client
    setIsMounted(true);
    
    // Generate particles only on client side
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
        duration: `${3 + Math.random() * 2}s`,
      }))
    );

    // Simulate minimum loading time for smooth animation
    const minLoadTime = 1000; // 1 second minimum
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsed);

      setTimeout(() => {
        setIsFading(true);
        // Remove from DOM after fade animation completes
        setTimeout(() => {
          setIsLoading(false);
        }, 500); // Match fade-out duration
      }, remainingTime);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d0d1f] transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1f] via-[#0c0c48] to-[#0d0d1f] animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with Animation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-50 animate-ping"></div>
          <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <FaCode className="w-10 h-10 text-black animate-spin-slow" />
          </div>
        </div>

        {/* Name with Typewriter-like effect */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
          <span className="inline-block animate-fade-in-up">Mary</span>{' '}
          <span className="inline-block text-cyan-300 animate-fade-in-up-delay">Valentina</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm sm:text-base animate-fade-in-up-delay-2">
          Full-Stack Developer
        </p>

        {/* Loading Dots */}
        <div className="flex space-x-2 mt-8">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>

      {/* Animated Particles Effect - Only render on client */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-float"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoadingAnimation;
