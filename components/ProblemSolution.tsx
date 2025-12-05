import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Percent, Cpu } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

const problems = [
  {
    icon: Clock,
    title: "Slow Settlement",
    desc: "Traditional rails take 3-5 days to settle cross-border payments.",
    stat: "3-5 Days"
  },
  {
    icon: Percent,
    title: "High Friction Fees",
    desc: "Intermediaries extract value at every step of the transaction.",
    stat: "3-10% Fees"
  },
  {
    icon: Cpu,
    title: "AI Incompatibility",
    desc: "Autonomous agents cannot open bank accounts or pass KYC.",
    stat: "No Access"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.6 }
  }
};

const ProblemSolution: React.FC = () => {
  return (
    <section id="solutions" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Treasury Bottleneck</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Traditional finance wasn't built for the speed of autonomous AI agents.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {problems.map((prob, idx) => (
            <motion.div key={idx} variants={item} className="h-full">
              <SpotlightCard className="h-full p-8" spotlightColor="rgba(232, 65, 66, 0.15)">
                <div className="h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
                  <prob.icon className="text-snow-red w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{prob.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {prob.desc}
                </p>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <span className="text-snow-red font-mono font-bold">{prob.stat}</span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;