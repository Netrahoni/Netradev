import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({ index, name, issuer, date, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.75)}>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='block sm:w-[360px] w-full'
      >
        <Tilt
          options={{
            max: 15,
            scale: 1.03,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl w-full min-h-[140px] flex flex-col justify-between border border-[#915EFF]/10 hover:border-[#915EFF]/30 transition-all duration-300 shadow-card hover:shadow-2xl cursor-pointer group'
        >
          <div className='flex justify-between items-center gap-2'>
            <div className='flex items-center gap-3'>
              <svg
                className="w-5 h-5 text-[#915EFF] group-hover:scale-110 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <span className='text-secondary text-[12px] font-semibold bg-black-200 py-1 px-2.5 rounded-full border border-white/5'>
                {date}
              </span>
            </div>
            <svg
              className="w-4 h-4 text-secondary group-hover:text-white transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </div>

          <div className='mt-4 flex-1 flex flex-col justify-end'>
            <h3 className='text-white font-bold text-[16px] leading-[22px] group-hover:text-[#915EFF] transition-colors duration-300 line-clamp-2'>
              {name}
            </h3>
            <p className='text-secondary text-[13px] font-medium mt-1'>
              {issuer}
            </p>
          </div>
        </Tilt>
      </a>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My credentials</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center sm:justify-start'>
        {certifications.map((cert, index) => (
          <CertificateCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certificates");
