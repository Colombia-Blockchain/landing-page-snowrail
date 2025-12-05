import React from 'react';
import { Twitter, Github, Linkedin, Snowflake } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="company" className="bg-navy-900 border-t border-white/5 pt-16 pb-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Snowflake className="text-electric-blue" />
              <span className="font-bold text-xl">SnowRail</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building the autonomous financial infrastructure for the AI economy.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-electric-blue cursor-pointer">Features</li>
              <li className="hover:text-electric-blue cursor-pointer">Integrations</li>
              <li className="hover:text-electric-blue cursor-pointer">Pricing</li>
              <li className="hover:text-electric-blue cursor-pointer">Changelog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-electric-blue cursor-pointer">Documentation</li>
              <li className="hover:text-electric-blue cursor-pointer">API Reference</li>
              <li className="hover:text-electric-blue cursor-pointer">Community</li>
              <li className="hover:text-electric-blue cursor-pointer">Status</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-electric-blue cursor-pointer">About</li>
              <li className="hover:text-electric-blue cursor-pointer">Blog</li>
              <li className="hover:text-electric-blue cursor-pointer">Careers</li>
              <li className="hover:text-electric-blue cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © 2025 SnowRail Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;