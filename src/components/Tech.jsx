import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import useMobile from "../hooks/useMobile";

const Tech = () => {
  const isMobile = useMobile(768);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {isMobile ? (
            <div
              className='w-full h-full flex items-center justify-center rounded-full bg-tertiary shadow-card border border-violet-800/20 hover:border-[#915EFF]/50 transition-all duration-300 group cursor-pointer'
              title={technology.name}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-14 h-14 object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'
              />
            </div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

