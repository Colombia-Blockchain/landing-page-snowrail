import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import PaymentModal from './PaymentModal';

const plans = [
  {
    name: "Developer",
    price: "$0",
    desc: "For building prototypes and hackathon projects.",
    features: ["Testnet Access", "5,000 API Calls/mo", "Community Support", "Basic Analytics"],
    color: "gray"
  },
  {
    name: "Professional",
    price: "$29", // Updated price from $299 to $29
    desc: "For startups and growing DeFi applications.",
    features: ["Mainnet Access", "100k API Calls/mo", "Priority Support", "Advanced Reporting", "Multi-sig Support"],
    popular: true,
    color: "electric-blue"
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For institutions requiring SLA and high volume.",
    features: ["Unlimited API Calls", "Dedicated Account Manager", "Custom Integrations", "On-premise Deployment", "Audit Logs"],
    color: "purple"
  }
];

const Pricing: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);

  const nextPlan = () => setActiveIndex((prev) => (prev + 1) % plans.length);
  const prevPlan = () => setActiveIndex((prev) => (prev - 1 + plans.length) % plans.length);

  const handleGetStarted = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setIsPaymentOpen(true);
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden scroll-mt-20">
      <PaymentModal 
        isOpen={isPaymentOpen} 
        onClose={() => setIsPaymentOpen(false)} 
        planName={selectedPlan.name}
        price={selectedPlan.price}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 mb-16">Start free, upgrade as you scale.</p>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`
                relative p-8 rounded-2xl border backdrop-blur-md transition-all duration-300
                ${plan.popular 
                  ? 'bg-navy-800/80 border-electric-blue shadow-[0_0_40px_rgba(0,212,255,0.15)] scale-110 z-10' 
                  : 'bg-navy-900/50 border-white/10 hover:border-white/20'
                }
              `}
            >
              {plan.popular && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-electric-blue to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                 </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-4">{plan.price}</div>
              <p className="text-sm text-gray-400 mb-8">{plan.desc}</p>
              
              <ul className="space-y-4 mb-8 text-left">
                {plan.features.map((feat, k) => (
                  <li key={k} className="flex items-center gap-3 text-sm">
                    <Check className={`w-4 h-4 ${plan.popular ? 'text-electric-blue' : 'text-gray-500'}`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleGetStarted(plan)}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${plan.popular ? 'bg-electric-blue text-navy-900 hover:bg-cyan-400' : 'bg-white/10 hover:bg-white/20'}`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: 3D Rotator */}
        <div className="md:hidden relative h-[500px] flex items-center justify-center perspective-1000">
           <AnimatePresence mode='wait'>
             <motion.div
               key={activeIndex}
               initial={{ rotateY: 90, opacity: 0 }}
               animate={{ rotateY: 0, opacity: 1 }}
               exit={{ rotateY: -90, opacity: 0 }}
               transition={{ duration: 0.4 }}
               className={`
                  absolute w-full max-w-sm p-8 rounded-2xl border backdrop-blur-md
                  ${plans[activeIndex].popular 
                    ? 'bg-navy-800 border-electric-blue shadow-[0_0_30px_rgba(0,212,255,0.1)]' 
                    : 'bg-navy-900 border-white/10'
                  }
               `}
             >
                <h3 className="text-xl font-bold mb-2">{plans[activeIndex].name}</h3>
                <div className="text-4xl font-bold mb-4">{plans[activeIndex].price}</div>
                <p className="text-sm text-gray-400 mb-8">{plans[activeIndex].desc}</p>
                <button 
                  onClick={() => handleGetStarted(plans[activeIndex])}
                  className="w-full py-3 bg-white/10 rounded-lg font-semibold"
                >
                  Choose Plan
                </button>
             </motion.div>
           </AnimatePresence>
           
           {/* Controls */}
           <div className="absolute bottom-0 flex gap-4">
             <button onClick={prevPlan} className="p-3 rounded-full bg-white/10 hover:bg-white/20"><ChevronLeft /></button>
             <button onClick={nextPlan} className="p-3 rounded-full bg-white/10 hover:bg-white/20"><ChevronRight /></button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
