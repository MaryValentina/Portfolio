"use client";

import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import { FaCode } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props={
  openNav:()=>void;
};

const Nav = ({openNav}:Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
  className={`transition-all duration-200 h-[12vh] z-[100] fixed w-full ${
    navBg ? "bg-[#0f142ed9] shadow-md" : "bg-transparent"
  }`}
>

      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('home');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:2xl text-white font-bold">
            Mary Valentina
          </h1>
        </a>

        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map(link => (
            <a
              key={link.id}
              href={link.url}
              onClick={(e) => {
                e.preventDefault();
                const targetId = link.url.substring(1);
                const element = document.getElementById(targetId);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200 cursor-pointer"
            >
              {link.Label}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* CV Button */}
          <a
            href="/Mary_Asscoiate_se_cv_.pdf"
            download="Mary_Valentina_Associate_Software_Engineer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-8 py-2.5 sm:py-3.5 text-xs sm:text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-1 sm:space-x-2"
          >
            <BiDownload className="w-4 h-4 sm:w-5 sm:h-8" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>
          {/* Burger Menu */}
          <HiBars3BottomRight onClick={openNav} 
          className="w-8 h-8 cursor-pointer text-white lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;