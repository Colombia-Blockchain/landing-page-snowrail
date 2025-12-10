import React from 'react';
import DocsSidebar from './docs-sidebar';
import { DocSection } from '../../types/docs-types';
import { Menu } from 'lucide-react';
import { useDocsNavigation } from '../../hooks/use-docs-navigation';

interface DocsLayoutProps {
  children: React.ReactNode;
  sections: DocSection[];
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children, sections }) => {
  const { 
    activeSection, 
    scrollToSection, 
    isMobileMenuOpen, 
    toggleMobileMenu 
  } = useDocsNavigation();

  return (
    <div className="pt-20 min-h-screen bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Sidebar Toggle */}
          <div className="lg:hidden sticky top-20 z-30 bg-navy-900/95 backdrop-blur-md py-4 border-b border-white/10 -mx-4 px-4 flex items-center justify-between">
            <span className="text-sm font-bold text-gray-300 uppercase">Table of Contents</span>
            <button onClick={toggleMobileMenu} className="p-2 text-gray-300 hover:text-white">
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Sidebar */}
          <DocsSidebar 
            sections={sections} 
            activeSection={activeSection} 
            onNavigate={scrollToSection}
            isOpen={isMobileMenuOpen}
          />

          {/* Main Content */}
          <div className="flex-1 w-full min-w-0 py-8 lg:pl-8">
            <article className="prose prose-invert prose-headings:font-bold prose-headings:text-white prose-p:text-gray-400 prose-a:text-electric-blue prose-strong:text-white max-w-none">
              {children}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsLayout;

