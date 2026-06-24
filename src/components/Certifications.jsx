import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({ index, name, issuer, date }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1.02,
          speed: 450,
        }}
        className='bg-tertiary p-6 rounded-2xl sm:w-[360px] w-full min-h-[220px] flex flex-col justify-between border border-[#915EFF]/10 hover:border-[#915EFF]/30 transition-all duration-300 shadow-card hover:shadow-2xl'
      >
        <div className='flex items-start justify-between gap-4'>
          {/* verified badge style icon */}
          <div className='w-12 h-12 rounded-xl bg-black-100 flex items-center justify-center shadow-inner'>
            <svg
              className="w-7 h-7 text-[#915EFF]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </div>
          <span className='text-secondary text-[14px] font-semibold bg-black-200 py-1 px-2.5 rounded-full border border-white/5'>
            {date}
          </span>
        </div>

        <div className='mt-6 flex-1 flex flex-col justify-end'>
          <h3 className='text-white font-bold text-[18px] leading-[24px] mb-2 hover:text-[#915EFF] transition-colors duration-300'>
            {name}
          </h3>
          <p className='text-secondary text-[14px] font-medium tracking-wide'>
            {issuer}
          </p>
        </div>
      </Tilt>
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
