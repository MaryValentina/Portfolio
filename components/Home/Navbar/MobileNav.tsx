import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 transform transition-all duration-500 bg-black opacity-70 w-full h-screen z-[40] ${
          showNav ? 'block' : 'hidden'
        }`}
        onClick={closeNav}
      ></div>

      {/* Navlinks Sidebar */}
      <div
        className={`text-white fixed right-0 top-0 h-full w-[80%] sm:w-[60%]
        flex flex-col justify-center space-y-6 
        bg-cyan-800 z-[50]
        transform transition-all duration-500
        ${navOpen}`}
      >
        {NavLinks.map(link => (
          <a
            key={link.id}
            href={link.url}
            onClick={(e) => {
              e.preventDefault();
              closeNav();
              const targetId = link.url.substring(1);
              const element = document.getElementById(targetId);
              if (element) {
                setTimeout(() => {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
              }
            }}
            className="text-white text-xl ml-12 border-b-[1.5px] border-white pb-1 sm:text-[30px] cursor-pointer"
          >
            {link.Label}
          </a>
        ))}

        {/* Close Icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
