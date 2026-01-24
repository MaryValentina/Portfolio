'use client';
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticleBackground';

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      
      <ParticlesHero/>
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Profile Image */}
        <Image
          src="/images/v1.jpg"
          alt="heroimage"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
        />

        {/* Title + Subtitle */}
        <h1 className="mt-4 text-center font-semibold tracking-wide">
  <span className="text-xl sm:text-2xl md:text-3xl">
    Full-Stack Developer
  </span>
  <br />
  <span className="text-cyan-200 text-sm sm:text-lg md:text-xl font-normal block mt-2">
    Building clean, modern web experiences.
  </span>
</h1>


        {/* Typewriter */}
        <h2 className="mt-5 text-center text-sm sm:text-2xl font-medium flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0 px-4">
          <span>Hi! I'm Mary - A Passionate&nbsp;</span>
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  'Frontend Developer',
                  'Backend Developer',
                  'Web Developer'
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50
              }}
            />
          </span>
        </h2>

      </div>
    </div>
  )
}

export default Hero
