"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info } from "lucide-react";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Membuka modal otomatis beberapa saat setelah halaman dimuat
  useEffect(() => {
    const hideModal = localStorage.getItem("hideWelcomeModal");
    if (hideModal === "true") return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600); // delay 600ms agar animasinya terlihat natural
    
    return () => clearTimeout(timer);
  }, []);

  const handleCloseForever = () => {
    localStorage.setItem("hideWelcomeModal", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6" style={{ margin: 0 }}>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-sm bg-card text-card-foreground border border-border rounded-3xl shadow-2xl p-6 md:p-8 z-10 text-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-200 dark:border-blue-800">
              <Info className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            
            <h2 className="text-2xl font-extrabold mb-3">Pemberitahuan</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-sm">
              Website <b>NgopiDiBlitar</b> ini masih dalam tahap pengembangan. List cafe di Blitar akan terus di-update secara berkala. Terima kasih atas kunjungannya!
            </p>

            <button 
              onClick={() => setIsOpen(false)}
              className="w-full py-3 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-opacity shadow-sm mb-3"
            >
              Tutup Sementara
            </button>

            <button 
              onClick={handleCloseForever}
              className="w-full py-2 bg-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300 font-medium text-sm transition-colors rounded-lg"
            >
              Jangan tampilkan pesan ini lagi
            </button>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
