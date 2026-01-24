'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const [phoneVisible, setPhoneVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (target.dataset.section === 'header') {
              setHeaderVisible(true);
            } else if (target.dataset.section === 'email') {
              setEmailVisible(true);
            } else if (target.dataset.section === 'phone') {
              setPhoneVisible(true);
            }
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (emailRef.current) observer.observe(emailRef.current);
    if (phoneRef.current) observer.observe(phoneRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (emailRef.current) observer.unobserve(emailRef.current);
      if (phoneRef.current) observer.unobserve(phoneRef.current);
    };
  }, []);

  return (
    <div className="pt-20 pb-16 bg-[#0d0d1f]">
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
          Get In <span className="text-cyan-300">Touch</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Let's connect and discuss how we can work together
        </p>
      </div>

      {/* Contact Information */}
      <div className="w-[90%] sm:w-[85%] lg:w-[70%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Email */}
          <div
            ref={emailRef}
            data-section="email"
            className={`bg-[#0f1220] border border-[#1d2338] rounded-xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-300 transform ${
              emailVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-cyan-900/30 rounded-lg flex items-center justify-center border border-cyan-800/20">
                <FaEnvelope className="text-cyan-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                <p className="text-gray-400 text-sm">Send me a message</p>
              </div>
            </div>
            <a
              href="mailto:val.fdo98@gmail.com"
              className="text-cyan-300 hover:text-cyan-200 text-base font-medium transition-colors duration-300 flex items-center gap-2 group"
            >
              <span>val.fdo98@gmail.com</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>

          {/* Phone */}
          <div
            ref={phoneRef}
            data-section="phone"
            className={`bg-[#0f1220] border border-[#1d2338] rounded-xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-300 transform ${
              phoneVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-cyan-900/30 rounded-lg flex items-center justify-center border border-cyan-800/20">
                <FaPhone className="text-cyan-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                <p className="text-gray-400 text-sm">Call or text me</p>
              </div>
            </div>
            <a
              href="tel:0762012233"
              className="text-cyan-300 hover:text-cyan-200 text-base font-medium transition-colors duration-300 flex items-center gap-2 group"
            >
              <span>0762012233</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
