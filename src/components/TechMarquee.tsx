import React from 'react'
import {
  Blocks,
  Box,
  Code2,
  Database,
  Globe,
  Lock,
  Cpu,
  Server,
  ScanLine,
  Cable,
} from 'lucide-react'

type IconComponent = React.ComponentType<{ className?: string }>

const GenericIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`w-10 h-10 rounded-full border border-electric-blue/40 bg-electric-blue/10 flex items-center justify-center text-electric-blue/80 ${
      className ?? ''
    }`}
  >
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3l2.3 4.67 5.15.75-3.72 3.63.88 5.12L12 14.9l-4.61 2.27.88-5.12L4.55 8.42l5.15-.75L12 3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)

const techs: { name: string; icon: IconComponent }[] = [
  { name: 'Avalanche', icon: Blocks },
  { name: 'Rail', icon: Cable },
  { name: 'UltravioletaDAO Facilitator', icon: ScanLine },
  { name: 'Typescript', icon: Code2 },
  { name: 'Solidity', icon: Box },
  { name: 'Arweave', icon: Database },
  { name: 'x402', icon: Globe },
  { name: 'EIP-3009', icon: Lock },
  { name: 'AI Agents', icon: Cpu },
  { name: 'Node.js', icon: Server },
]

const marqueeItems = [...techs]

const TechMarquee: React.FC = () => {
  return (
    <div className="py-12 bg-navy-900 border-y border-white/5 relative overflow-hidden">
      {/* Alpha Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-900 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-900 to-transparent z-10"></div>

      <div className="flex w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={`${item.name}-${i}`}
                  className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 group cursor-default"
                >
                  <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg font-bold tracking-tight">
                    {item.name}
                  </span>
                </div>
              )
            },
          )}
        </div>
      </div>
    </div>
  )
}

export default TechMarquee
