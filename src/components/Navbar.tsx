import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Snowflake, ExternalLink } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // CONFIGURATION: Replace this URL with your actual deployed app URL (e.g., from Vercel/Netlify)
  const LAUNCH_APP_URL = "https://app.snowrail.com"; 

  // Reordered: Pricing before Company, Company at the end
  const navItems = ['Solutions', 'Developers', 'Pricing', 'Company'];

  const handleScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-navy-900/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-2 bg-gradient-to-tr from-snow-red to-purple-600 rounded-lg group-hover:shadow-[0_0_20px_rgba(232,65,66,0.5)] transition-shadow duration-300">
              <Snowflake className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">SnowRail</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                  className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Ready for Git/App Integration */}
          <div className="hidden md:block">
            <a 
              href={LAUNCH_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
            >
              Launch App
              <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <AnimatePresence mode='wait'>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-900 border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                  className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium border-b border-white/5 last:border-0"
                >
                  {item}
                </motion.a>
              ))}
              <div className="pt-4 pb-2">
                 <a 
                    href={LAUNCH_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-snow-red hover:bg-red-600 text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                 >
                  Launch App
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;