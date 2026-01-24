import React from "react";
import { IconType } from "react-icons";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

type ResumeCardProps = {
  Icon: IconType;
  role: string;
  company: string;
  duration: string;
  location?: string;
  points: string[];
  tech?: string[];
};

const ResumeCard = (props: ResumeCardProps) => {
  const { 
    Icon, 
    role, 
    company, 
    duration, 
    location, 
    points, 
    tech
  }: ResumeCardProps = props;

  return (
    <div className="bg-[#0f1220] border border-[#1d2338] rounded-lg p-4 sm:p-6 hover:border-cyan-400/30 transition-all duration-300">
      
      {/* Top section */}
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-2">
          <h3 className="text-white text-base sm:text-lg font-semibold">
            {role}
          </h3>
          <span className="text-xs px-2.5 py-1 bg-cyan-900/20 text-cyan-300 rounded self-start sm:self-auto">
            {duration}
          </span>
        </div>

        <div className="text-cyan-200/80 text-sm mb-1">
          {company.split("|").map((line, i) => (
            <p key={i} className={i > 0 ? "text-gray-400 text-xs" : ""}>
              {line}
            </p>
          ))}
        </div>

        {location && (
          <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
            <FaMapMarkerAlt className="text-xs" /> {location}
          </p>
        )}
      </div>

      {/* Key Contributions */}
      <div className="mb-5">
        <ul className="space-y-2">
          {points.map((item, index) => (
            <li key={index} className="text-gray-300 text-sm leading-relaxed">
              • {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      {tech && tech.length > 0 && (
        <div className="pt-4 border-t border-[#1d2338]">
          <div className="flex flex-wrap gap-2">
            {tech.map((item, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs bg-[#151b2f] border border-[#1d2338] rounded text-gray-400"
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

export default ResumeCard;