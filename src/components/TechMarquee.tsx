import React from 'react';
import { Blocks, Box, Code2, Database, Globe, Lock, Cpu, Server } from 'lucide-react';

const techs = [
  { name: 'Avalanche', icon: Blocks },
  { name: 'Typescript', icon: Code2 },
  { name: 'Solidity', icon: Box },
  { name: 'Arweave', icon: Database },
  { name: 'x402', icon: Globe },
  { name: 'EIP-3009', icon: Lock },
  { name: 'AI Agents', icon: Cpu },
  { name: 'Node.js', icon: Server },
];

const TechMarquee: React.FC = () => {
  return (
    <div className="py-12 bg-navy-900 border-y border-white/5 relative overflow-hidden">
        {/* Alpha Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-900 to-transparent z-10"></div>
        
        <div className="flex w-full overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
                {[...techs, ...techs, ...techs].map((tech, i) => {
                    const Icon = tech.icon;
                    return (
                        <div key={i} className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 group cursor-default">
                            <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-lg font-bold tracking-tight">{tech.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
};

export default TechMarquee;