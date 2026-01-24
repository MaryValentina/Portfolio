import React from "react";
import { IconType } from "react-icons";
import { FaBook, FaTrophy } from "react-icons/fa";

type EducationCardProps = {
  Icon: IconType;
  degree: string;
  institution: string;
  duration: string;
  status: string;
  points?: string[];
  achievements?: string[];
};

const EducationCard = (props: EducationCardProps) => {
  const { 
    Icon, 
    degree, 
    institution, 
    duration, 
    status, 
    points = [], 
    achievements = [] 
  }: EducationCardProps = props;

  return (
    <div className="bg-[#0f1220] border border-[#1d2338] rounded-lg p-4 sm:p-6 hover:border-purple-400/30 transition-all duration-300">
      
      {/* Top section */}
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-2">
          <h3 className="text-white text-base sm:text-lg font-semibold">
            {degree}
          </h3>
          <span className="text-xs px-2.5 py-1 bg-purple-900/20 text-purple-300 rounded self-start sm:self-auto">
            {duration}
          </span>
        </div>

        <div className="text-purple-200/80 text-sm mb-1">
          {institution.split("|").map((line, i) => (
            <p key={i} className={i > 0 ? "text-gray-400 text-xs" : ""}>
              {line}
            </p>
          ))}
        </div>

        <p className="text-gray-400 text-xs mt-1">
          {status}
        </p>
      </div>

      {/* Course Highlights */}
      <div className="mb-5">
        <ul className="space-y-2">
          {points.map((item, index) => (
            <li key={index} className="text-gray-300 text-sm leading-relaxed">
              • {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="pt-4 border-t border-[#1d2338]">
          <div className="flex flex-wrap gap-2">
            {achievements.map((item, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs bg-[#1a1530] border border-[#1d2338] rounded text-purple-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationCard;