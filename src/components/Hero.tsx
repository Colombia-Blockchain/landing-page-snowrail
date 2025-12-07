import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

const DEFAULT_DEMO_VIDEO_URL = 'https://youtu.be/GjxYOmiMrRg';

const buildYoutubeEmbedUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      const videoId = parsedUrl.pathname.replace('/', '');
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    if (host.endsWith('youtube.com')) {
      if (parsedUrl.pathname.startsWith('/watch')) {
        const videoId = parsedUrl.searchParams.get('v');
        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}`;
        }
      }

      if (parsedUrl.pathname.startsWith('/embed/')) {
        return `${parsedUrl.origin}${parsedUrl.pathname}`;
      }
    }
  } catch (error) {
    console.warn('Invalid demo video URL provided. Falling back to original string.');
  }

  return url;
};

const rawDemoVideoUrl = import.meta.env.VITE_DEMO_VIDEO_URL ?? DEFAULT_DEMO_VIDEO_URL;
const demoVideoEmbedUrl = (() => {
  const embedUrl = buildYoutubeEmbedUrl(rawDemoVideoUrl);
  if (embedUrl.includes('autoplay=')) {
    return embedUrl;
  }
  const separator = embedUrl.includes('?') ? '&' : '?';
  return `${embedUrl}${separator}autoplay=1`;
})();

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
  const title = "Autonomous Treasury Orchestrator";
  const [showDemo, setShowDemo] = useState(false);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
          <span className="text-sm text-electric-blue font-medium tracking-wide">SNOWRAIL LIVE</span>
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
          <a href="https://app.snowrail.xyz" target="_blank" rel="noopener noreferrer" className="relative group cursor-pointer">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-blue to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className="relative flex items-center gap-3 px-8 py-4 bg-navy-900 rounded-full leading-none overflow-hidden">
              <span className="absolute inset-0 rounded-full border border-white/10"></span>
              
              {/* Border Beam Logic */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute top-0 left-1/2 w-[40%] h-[100%] -translate-x-1/2 bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent rotate-[0deg] origin-bottom animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" style={{ transformOrigin: 'center center' }}></span>
              </span>
              
              <ExternalLink className="w-5 h-5 text-electric-blue" />
              <span className="text-white font-semibold">Launch App</span>
            </button>
          </a>

          {/* Secondary Button */}
          <button
            onClick={() => setShowDemo(true)}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm group"
          >
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

      {showDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div
            className="absolute inset-0"
            onClick={() => setShowDemo(false)}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              className="w-full h-full"
              src={demoVideoEmbedUrl}
              title="SnowRail Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
