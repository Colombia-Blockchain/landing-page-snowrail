import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Server, Database, ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  { id: 1, label: "User", icon: User },
  { id: 2, label: "x402 Protocol", icon: Server },
  { id: 3, label: "Avalanche C-Chain", icon: Database },
  { id: 4, label: "Rail API", icon: Server },
  { id: 5, label: "Settlement", icon: CheckCircle2 },
];

const FlowDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="developers" className="py-24 bg-navy-900/50 border-y border-white/5 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Orchestration Logic</h2>
          <p className="text-gray-400">Cryptographically verified execution flow</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const isPast = index < activeStep;
            const Icon = step.icon;

            return (
              <React.Fragment key={step.id}>
                {/* Step Card */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2, type: "spring", bounce: 0.5 }}
                  className="relative group"
                >
                  <div 
                    className={`
                      relative w-24 h-24 md:w-32 md:h-32 rounded-2xl flex flex-col items-center justify-center gap-3 border transition-all duration-500
                      ${isActive 
                        ? 'bg-electric-blue/10 border-electric-blue shadow-[0_0_30px_rgba(0,212,255,0.3)] scale-110' 
                        : 'bg-navy-800 border-white/10 text-gray-500'
                      }
                    `}
                  >
                    <Icon className={`w-8 h-8 transition-colors duration-300 ${isActive ? 'text-electric-blue' : 'text-gray-500'}`} />
                    <span className={`text-xs font-medium ${isActive ? 'text-white' : 'text-gray-500'}`}>{step.label}</span>
                    
                    {/* Active pulse ring */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-2xl border border-electric-blue animate-ping opacity-20"></span>
                    )}
                  </div>
                </motion.div>

                {/* Arrow Connector (don't render after last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex flex-1 items-center justify-center px-4">
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: "100%", opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
                      className="h-0.5 bg-gray-800 w-full relative"
                    >
                      <motion.div 
                        className="absolute top-0 left-0 h-full bg-electric-blue shadow-[0_0_10px_#00d4ff]"
                        animate={{ 
                          width: isActive ? "100%" : isPast ? "100%" : "0%",
                          opacity: isActive || isPast ? 1 : 0 
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                  </div>
                )}
                
                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                   <div className="md:hidden py-2">
                     <ArrowRight className="text-gray-600 rotate-90" />
                   </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlowDiagram;