import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

type NavItem =
  | { label: string; target: string; type: 'scroll' }
  | { label: string; path: string; type: 'link' }
  | { label: string; href: string; type: 'external' };

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navItems: NavItem[] = [
    { label: 'Solutions', target: 'solutions', type: 'scroll' },
    { label: 'Developers', target: 'developers', type: 'scroll' },
    { label: 'Pricing', target: 'pricing', type: 'scroll' },
    { label: 'Documentation', path: '/docs', type: 'link' },
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLElement>, item: NavItem) => {
    e.preventDefault();
    setIsOpen(false);

    if (item.type === 'scroll') {
      if (isHomePage) {
        const element = document.getElementById(item.target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/#${item.target}`);
        // Allow time for navigation before scrolling
        setTimeout(() => {
          const element = document.getElementById(item.target);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (item.type === 'link') {
      navigate(item.path);
      window.scrollTo(0, 0);
    } else if (item.type === 'external') {
      window.open(item.href, '_blank', 'noopener noreferrer');
    }
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-navy-900/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 cursor-pointer group" onClick={handleLogoClick}>
            <img src="/snowrail_logo.png" alt="SnowRail Logo" className="h-10 w-auto" />
            <span className="font-bold text-xl tracking-tight">SnowRail</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.type === 'external' ? item.href : item.type === 'link' ? item.path : `#${item.target}`}
                  onClick={(e) => handleNavigation(e, item)}
                  className={`text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer
                    ${item.type === 'link' && location.pathname === item.path ? 'text-white font-semibold' : ''}
                  `}
                >
                  {item.label}
                </a>
              ))}
            </div>
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
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  href={item.type === 'external' ? item.href : item.type === 'link' ? item.path : `#${item.target}`}
                  onClick={(e) => handleNavigation(e, item)}
                  className={`text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium border-b border-white/5 last:border-0
                    ${item.type === 'link' && location.pathname === item.path ? 'text-white bg-white/5' : ''}
                  `}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
