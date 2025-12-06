import React from 'react';
import { motion } from 'framer-motion';

const PoweredBy: React.FC = () => {
  const partners = [
    {
      name: 'Avalanche',
      description: 'High-Performance Blockchain',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 1503 1504" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="287" y="258" width="928" height="844" fill="#E84142"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C329.999 1039.78 324.287 1031.81 322.01 1022.58C319.437 1012.27 324.381 998.98 334.269 972.404L751.181 76.5151C761.054 49.9685 765.991 36.6952 773.325 30.6428C779.672 25.3567 787.638 22.3563 795.934 22.3563C804.23 22.3563 812.196 25.3567 818.543 30.6428C825.877 36.6952 830.814 49.9685 840.687 76.5151L1164.93 972.404C1174.82 998.98 1179.76 1012.27 1177.19 1022.58C1174.91 1031.81 1169.2 1039.78 1161.24 1044.96C1152.01 1050.86 1136.89 1050.86 1106.26 1050.86H960.512L751.181 565.812L538.688 1050.86ZM751.181 565.812L749.671 562.604L749.673 562.604L751.181 565.812ZM1328.28 1050.86H1090.19L888.246 606.345C878.373 579.798 873.436 566.525 866.102 560.472C859.755 555.186 851.789 552.186 843.493 552.186C835.197 552.186 827.231 555.186 820.884 560.472C813.55 566.525 808.613 579.798 798.74 606.345L749.671 562.604L798.74 606.345L596.801 1050.86H358.712C328.086 1050.86 312.958 1050.86 303.734 1044.96C295.771 1039.78 290.059 1031.81 287.782 1022.58C285.209 1012.27 290.153 998.98 300.041 972.404L717.073 76.6271C726.946 50.0805 731.882 36.8072 739.217 30.7548C745.563 25.4687 753.529 22.4683 761.826 22.4683C770.122 22.4683 778.088 25.4687 784.434 30.7548C791.769 36.8072 796.705 50.0805 806.578 76.6271L1223.61 972.404C1233.5 998.98 1238.44 1012.27 1235.87 1022.58C1233.59 1031.81 1227.88 1039.78 1219.92 1044.96C1210.69 1050.86 1195.57 1050.86 1164.94 1050.86H1328.28Z" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'Rail',
      description: 'Infrastructure Layer',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="256" height="256" rx="128" fill="#00D4FF"/>
          <path d="M80 80H176V96H80V80Z" fill="white"/>
          <path d="M80 120H176V136H80V120Z" fill="white"/>
          <path d="M80 160H176V176H80V160Z" fill="white"/>
          <circle cx="96" cy="88" r="6" fill="#00D4FF"/>
          <circle cx="96" cy="128" r="6" fill="#00D4FF"/>
          <circle cx="96" cy="168" r="6" fill="#00D4FF"/>
          <circle cx="160" cy="88" r="6" fill="#00D4FF"/>
          <circle cx="160" cy="128" r="6" fill="#00D4FF"/>
          <circle cx="160" cy="168" r="6" fill="#00D4FF"/>
        </svg>
      ),
    },
    {
      name: 'Ultravioleta',
      description: 'Protocol Partner',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ultraviolet-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <rect width="256" height="256" rx="128" fill="url(#ultraviolet-gradient)"/>
          <path d="M128 50L178.885 103.431L128 156.862L77.1154 103.431L128 50Z" fill="white" fillOpacity="0.9"/>
          <path d="M128 100L178.885 153.431L128 206.862L77.1154 153.431L128 100Z" fill="white" fillOpacity="0.6"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-electric-blue to-white bg-clip-text text-transparent">
            Powered By
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built on industry-leading blockchain infrastructure and cutting-edge protocols
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              {/* Card Background with Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card Content */}
              <div className="relative glass-panel p-8 rounded-2xl border border-white/10 hover:border-electric-blue/50 transition-all duration-300 transform hover:-translate-y-2">
                {/* Logo Container */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                      {partner.icon}
                    </div>
                    {/* Actual Logo */}
                    <div className="relative">
                      {partner.icon}
                    </div>
                  </div>
                </div>

                {/* Partner Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {partner.description}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
            <span className="text-sm text-gray-300 font-medium">
              Securing <span className="text-electric-blue font-bold">$100M+</span> in treasury assets
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PoweredBy;

