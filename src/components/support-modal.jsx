"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Coffee } from "lucide-react";

export function SupportModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ margin: 0 }}>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-card text-card-foreground border border-border rounded-3xl shadow-2xl p-6 md:p-8 z-10 text-center"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-border">
              <Coffee className="w-8 h-8 text-orange-500" />
            </div>
            
            <h2 className="text-2xl font-extrabold mb-3">Support Developer</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              Kalau merasa terbantu dengan <b>NgopiDiBlitar</b>, boleh banget jajanin secangkir kopi buat nemenin ngetik baris kode berikutnya! 🚀
            </p>

            <a 
              href="https://saweria.co/razn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#E4B142] hover:bg-[#D4A33C] text-black font-bold rounded-xl transition-colors shadow-[0_4px_10px_rgba(228,177,66,0.3)]"
            >
              <Coffee className="w-5 h-5" />
              Donasi via Saweria
            </a>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
