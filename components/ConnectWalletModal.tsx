import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wallet, Shield, Zap, Globe } from 'lucide-react';

// Add type definition for window.ethereum
declare global {
  interface Window {
    ethereum?: any;
    avalanche?: any;
  }
}

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const wallets = [
  { 
    name: 'MetaMask', 
    id: 'metamask',
    icon: Globe, 
    color: 'text-orange-500', 
    bg: 'bg-orange-500/10',
    desc: 'Connect to your MetaMask Wallet'
  },
  { 
    name: 'WalletConnect', 
    id: 'walletconnect',
    icon: Zap, 
    color: 'text-blue-500', 
    bg: 'bg-blue-500/10',
    desc: 'Scan with WalletConnect to connect'
  },
  { 
    name: 'Core', 
    id: 'core',
    icon: Shield, 
    color: 'text-orange-400', 
    bg: 'bg-orange-400/10',
    desc: 'Connect to Core Wallet'
  },
  { 
    name: 'Rabby', 
    id: 'rabby',
    icon: Wallet, 
    color: 'text-indigo-400', 
    bg: 'bg-indigo-400/10',
    desc: 'Connect to Rabby Wallet'
  },
];

const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({ isOpen, onClose }) => {
  
  const handleConnect = async (walletId: string) => {
    // 1. Check for specific injected providers if available (e.g. Core often injects window.avalanche)
    let provider = window.ethereum;
    
    if (walletId === 'core' && window.avalanche) {
      provider = window.avalanche;
    }

    // 2. WalletConnect requires a separate library/modal (Web3Modal), 
    // but for this demo we'll alert if the standard provider isn't appropriate.
    if (walletId === 'walletconnect') {
      alert("WalletConnect requires a Bridge Server or Project ID configuration.");
      return;
    }

    if (!provider) {
      // If no wallet is found, we can guide them to download one, or just alert.
      // Opening MetaMask download page is standard practice.
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    try {
      // 3. Trigger the wallet extension
      // This will open the MetaMask/Rabby/Core popup asking the user to connect.
      await provider.request({ method: 'eth_requestAccounts' });
      
      // 4. On success, close the modal
      onClose();
    } catch (error) {
      console.error("User rejected connection or error:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed z-[70] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-navy-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Connect Wallet</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {wallets.map((wallet) => {
                const Icon = wallet.icon;
                return (
                  <button
                    key={wallet.name}
                    className="w-full flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group text-left"
                    onClick={() => handleConnect(wallet.id)}
                  >
                    <div className={`p-3 rounded-lg ${wallet.bg}`}>
                      <Icon className={`w-6 h-6 ${wallet.color}`} />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-electric-blue transition-colors">
                        {wallet.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {wallet.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 bg-navy-800/50 text-center text-xs text-gray-500">
              By connecting a wallet, you agree to SnowRail's <span className="text-electric-blue cursor-pointer hover:underline">Terms of Service</span>.
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConnectWalletModal;