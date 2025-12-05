import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Wallet } from 'lucide-react';
import ConnectWalletModal from './ConnectWalletModal';

const letterVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Cubic bezier
    },
  }),
};

const Hero: React.FC = () => {
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const title = "Autonomous Treasury Orchestrator";
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <ConnectWalletModal isOpen={isWalletOpen} onClose={() => setIsWalletOpen(false)} />
      
      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
          <span className="text-sm text-electric-blue font-medium tracking-wide">SNOWRAIL V2 LIVE</span>
        </motion.div>

        {/* Title Clip Animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-0">
            {title.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block overflow-hidden pb-4">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    custom={wordIndex * 10 + charIndex}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mx-auto max-w-2xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed"
        >
          One API call. Cryptographically verified treasury management. 
          Automate payments, swaps, and yield farming with zero-trust architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary Button with Border Beam */}
          <div className="relative group cursor-pointer" onClick={() => setIsWalletOpen(true)}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-blue to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className="relative flex items-center gap-3 px-8 py-4 bg-navy-900 rounded-full leading-none overflow-hidden">
              <span className="absolute inset-0 rounded-full border border-white/10"></span>
              
              {/* Border Beam Logic */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute top-0 left-1/2 w-[40%] h-[100%] -translate-x-1/2 bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent rotate-[0deg] origin-bottom animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" style={{ transformOrigin: 'center center' }}></span>
              </span>
              
              <Wallet className="w-5 h-5 text-electric-blue" />
              <span className="text-white font-semibold">Connect Wallet</span>
            </button>
          </div>

          {/* Secondary Button */}
          <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm group">
            <span className="text-white font-semibold">Watch Demo</span>
            <Play className="w-4 h-4 fill-white text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
           {[
             { label: "Settlement Time", value: "30s" },
             { label: "Fee Structure", value: "0.2%" },
             { label: "Uptime", value: "100%" }
           ].map((stat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 1.2 + (i * 0.15), duration: 0.6 }}
               className="glass-panel p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
             >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
