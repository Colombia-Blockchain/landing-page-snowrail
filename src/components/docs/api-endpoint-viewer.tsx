import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';
import { EndpointDef } from '../../types/docs-types';

interface ApiEndpointViewerProps {
  endpoint: EndpointDef;
}

const ApiEndpointViewer: React.FC<ApiEndpointViewerProps> = ({ endpoint }) => {
  const [activeTab, setActiveTab] = useState<'request' | 'response' | 'error'>('response');
  const [copied, setCopied] = useState(false);

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'POST': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'PUT': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'DELETE': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getActiveCode = () => {
    if (activeTab === 'request' && endpoint.requestBody) return endpoint.requestBody.code;
    if (activeTab === 'response' && endpoint.responseBody) return endpoint.responseBody.code;
    if (activeTab === 'error' && endpoint.errorResponse) return endpoint.errorResponse.code;
    return '// No content available';
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 border border-white/10 rounded-xl overflow-hidden bg-[#0F131F]">
      {/* Endpoint Header */}
      <div className="flex items-center gap-3 p-4 border-b border-white/5 bg-white/5">
        <span className={`px-2 py-1 rounded text-xs font-bold border ${getMethodColor(endpoint.method)}`}>
          {endpoint.method}
        </span>
        <code className="text-sm text-gray-300 font-mono">{endpoint.path}</code>
      </div>

      {/* Description */}
      <div className="p-4 text-sm text-gray-400 border-b border-white/5">
        {endpoint.description}
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-white/5 bg-navy-900/50">
        <div className="flex">
          {[
            { id: 'request', label: 'Request', disabled: !endpoint.requestBody },
            { id: 'response', label: 'Response', disabled: !endpoint.responseBody },
            { id: 'error', label: 'Error', disabled: !endpoint.errorResponse }
          ].map((tab) => (
            <button
              key={tab.id}
              disabled={tab.disabled}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-medium transition-colors border-r border-white/5
                ${tab.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/5'}
                ${activeTab === tab.id ? 'text-electric-blue bg-white/5' : 'text-gray-400'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button 
          onClick={handleCopy}
          className="p-2 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          title="Copy to clipboard"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 bg-navy-900 overflow-x-auto relative group">
         <pre className="text-sm font-mono text-gray-300 leading-relaxed">
           <code>{getActiveCode()}</code>
         </pre>
      </div>
    </div>
  );
};

export default ApiEndpointViewer;

