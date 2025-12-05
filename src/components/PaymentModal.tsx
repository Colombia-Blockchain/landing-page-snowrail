import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Building, Bitcoin, Lock, Shield } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
  price?: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, planName = "Professional Plan", price = "$29" }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | 'crypto'>('card');

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed z-[70] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-navy-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-navy-800/30">
              <div>
                <h3 className="text-xl font-bold text-white">Checkout</h3>
                <p className="text-sm text-gray-400">{planName} • <span className="text-white font-semibold">{price}</span>/month</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Personal Info */}
              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Billing Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">First Name</label>
                    <input type="text" className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Last Name</label>
                    <input type="text" className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Email Address</label>
                  <input type="email" className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="john@company.com" />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Payment Method</h4>
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => setPaymentMethod('card')}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${paymentMethod === 'card' ? 'bg-electric-blue/10 border-electric-blue text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                  >
                    <CreditCard className="w-6 h-6 mb-2" />
                    <span className="text-xs font-medium">Card</span>
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('bank')}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${paymentMethod === 'bank' ? 'bg-electric-blue/10 border-electric-blue text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                  >
                    <Building className="w-6 h-6 mb-2" />
                    <span className="text-xs font-medium">Bank</span>
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('crypto')}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${paymentMethod === 'crypto' ? 'bg-electric-blue/10 border-electric-blue text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                  >
                    <Bitcoin className="w-6 h-6 mb-2" />
                    <span className="text-xs font-medium">Crypto</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Payment Fields */}
              <div className="bg-navy-800/50 rounded-xl p-4 border border-white/5 mb-6">
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Card Number</label>
                      <div className="relative">
                        <input type="text" className="w-full bg-navy-900 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="0000 0000 0000 0000" />
                        <CreditCard className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Expiry</label>
                        <input type="text" className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="MM/YY" />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">CVC</label>
                        <input type="text" className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}
                
                {paymentMethod === 'bank' && (
                  <div className="text-center py-4">
                    <Building className="w-12 h-12 text-gray-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-300 mb-2">Redirecting to secure bank login...</p>
                    <p className="text-xs text-gray-500">Supported by Plaid</p>
                  </div>
                )}

                {paymentMethod === 'crypto' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-navy-900 rounded-lg border border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">₿</div>
                        <div>
                           <div className="text-sm font-bold text-white">USDC (ERC-20)</div>
                           <div className="text-xs text-gray-500">Balance: 0.00</div>
                        </div>
                      </div>
                      <button className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded text-white transition-colors">Connect Wallet</button>
                    </div>
                    <div className="text-xs text-center text-gray-500">
                      Payment will be processed via SnowRail Protocol
                    </div>
                  </div>
                )}
              </div>

              {/* Pay Button */}
              <button className="w-full py-4 bg-gradient-to-r from-electric-blue to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-electric-blue/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                Pay {price}
              </button>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest">
                <Shield className="w-3 h-3" />
                Secure 256-bit SSL Encryption
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;