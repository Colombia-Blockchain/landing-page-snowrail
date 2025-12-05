import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Trophy } from 'lucide-react';

const features = [
  { name: "Settlement Speed", snow: "Instant (<30s)", trad: "3-5 Days" },
  { name: "Cost Per Tx", snow: "< $0.01", trad: "$25 - $50" },
  { name: "Availability", snow: "24/7/365", trad: "Banking Hours" },
  { name: "Programmatic Access", snow: "Native API", trad: "Manual / Legacy" },
  { name: "Self-Custody", snow: "Yes (Non-custodial)", trad: "No" },
];

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">Why SnowRail?</h2>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-800/30 backdrop-blur-sm">
        {/* Header */}
        <div className="grid grid-cols-3 p-6 border-b border-white/10 text-sm font-semibold tracking-wider text-gray-400">
          <div>FEATURE</div>
          <div className="text-center relative">
            <span className="relative z-10 text-white flex items-center justify-center gap-2">
              SNOWRAIL <Trophy className="w-4 h-4 text-yellow-500 animate-pulse" />
            </span>
            {/* Glow behind winner column header */}
            <div className="absolute inset-0 bg-electric-blue/10 blur-xl -z-0 rounded-full scale-y-150"></div>
          </div>
          <div className="text-center">TRADITIONAL BANKING</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-3 p-6 hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center font-medium text-gray-200">
                {feature.name}
              </div>
              
              {/* Winner Cell */}
              <div className="flex items-center justify-center font-bold text-electric-blue relative border-l-2 border-transparent group-hover:border-electric-blue/50 transition-colors bg-electric-blue/5">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.3, type: 'spring' }}
                >
                    {feature.snow === "Yes (Non-custodial)" ? <Check className="w-6 h-6" /> : feature.snow}
                </motion.div>
              </div>

              {/* Loser Cell */}
              <div className="flex items-center justify-center text-gray-500">
                 {feature.trad === "No" ? <X className="w-5 h-5 text-gray-600" /> : feature.trad}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;