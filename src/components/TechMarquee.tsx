import React from 'react';
import { motion } from 'framer-motion';

const partners = ['Avalanche', 'Rail', 'Ultravioleta'];
const marqueePartners = [...partners, ...partners, ...partners];

const GenericIcon = () => (
  <div className="w-12 h-12 rounded-full border border-electric-blue/40 bg-electric-blue/10 flex items-center justify-center text-electric-blue/80">
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3l2.3 4.67 5.15.75-3.72 3.63.88 5.12L12 14.9l-4.61 2.27.88-5.12L4.55 8.42l5.15-.75L12 3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const TechMarquee: React.FC = () => {
  return (
    <div className="py-16 bg-navy-900 border-y border-white/5 relative overflow-hidden">
      {/* Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-900 to-transparent z-10" />

      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap items-center gap-16"
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {marqueePartners.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <GenericIcon />
              <span className="text-xl font-semibold tracking-wide">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechMarquee;
