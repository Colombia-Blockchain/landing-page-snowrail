import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { DocSection } from '../../types/docs-types';

interface DocsSidebarProps {
  sections: DocSection[];
  activeSection: string;
  onNavigate: (id: string) => void;
  isOpen: boolean;
}

const DocsSidebar: React.FC<DocsSidebarProps> = ({ sections, activeSection, onNavigate, isOpen }) => {
  return (
    <aside className={`
      fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-64 bg-navy-900/95 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none
      border-r border-white/5 overflow-y-auto transition-transform duration-300 z-40
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <nav className="p-6 space-y-8">
        {sections.map((section) => (
          <div key={section.id}>
            <button
              onClick={() => onNavigate(section.id)}
              className={`text-sm font-bold uppercase tracking-wider mb-3 block text-left w-full hover:text-electric-blue transition-colors
                ${activeSection === section.id ? 'text-electric-blue' : 'text-gray-400'}
              `}
            >
              {section.title}
            </button>
            {section.subsections && (
              <ul className="space-y-2 border-l border-white/10 ml-1">
                {section.subsections.map((sub) => (
                  <li key={sub.id}>
                    <button
                      onClick={() => onNavigate(sub.id)}
                      className={`text-sm pl-4 py-1 block text-left w-full border-l-2 -ml-[1px] transition-all duration-200
                        ${activeSection === sub.id 
                          ? 'border-electric-blue text-white font-medium' 
                          : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-white/20'}
                      `}
                    >
                      {sub.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default DocsSidebar;

