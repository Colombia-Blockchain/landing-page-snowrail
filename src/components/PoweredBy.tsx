import React from 'react';
import { motion } from 'framer-motion';

const PoweredBy: React.FC = () => {
  const partners = [
    {
      name: 'Avalanche',
      description: 'High-Performance Blockchain',
      icon: (
        <img 
          src="https://cryptologos.cc/logos/avalanche-avax-logo.svg" 
          alt="Avalanche Logo" 
          className="h-12 w-auto object-contain"
        />
      ),
    },
    {
      name: 'Rail',
      description: 'Infrastructure Layer',
      icon: (
        <img 
          src="https://cdn.prod.website-files.com/6797f43699f81adabf44dd7d/6797f43699f81adabf44de14_rail.svg" 
          alt="Rail Logo" 
          className="w-16 h-16"
        />
      ),
    },
    {
      name: 'Ultravioleta',
      description: 'Protocol Partner',
      icon: (
        <img 
          src="https://ultravioletadao.xyz/uvd.png" 
          alt="Ultravioleta Logo" 
          className="w-16 h-16 rounded-full"
        />
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
              className="relative group h-full"
            >
              {/* Card Background with Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card Content */}
              <div className="relative glass-panel p-8 rounded-2xl border border-white/10 hover:border-electric-blue/50 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col min-h-[280px]">
                {/* Logo Container */}
                <div className="flex justify-center mb-6 flex-shrink-0">
                  <div className="relative h-16 w-16">
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
                <div className="text-center flex-grow flex flex-col justify-center">
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

