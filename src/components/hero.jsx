"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-6 pb-16 md:pt-6 lg:pt-8 md:pb-16 lg:pb-20 flex flex-col items-start md:items-center justify-center overflow-hidden relative w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-4 py-1.5 text-sm md:text-xs lg:text-sm font-semibold rounded-full bg-white dark:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200 mb-8 md:mb-4 lg:mb-6 border border-neutral-200 dark:border-neutral-800 shadow-sm backdrop-blur-sm mx-0 md:mx-auto"
      >
        ✨ Rekomendasi Tempat Nongkrong & Nugas
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 md:mb-4 lg:mb-6 leading-[1.05] text-left md:text-center w-full"
      >
        Temukan <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-500">Kopi Terbaik</span> <br className="hidden md:block"/>di Kota Blitar.
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="text-base sm:text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mb-12 md:mb-8 font-medium leading-relaxed text-left md:text-center w-full md:mx-auto"
      >
        Jelajahi tempat nongkrong, nugas, atau ngobrol paling asik dengan gaya estetik modern. Daftar lengkap mulai dari lokasi, jam buka, hingga menu fasilitas.
      </motion.p>

      {/* Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-6 md:mt-2 flex flex-row md:flex-col items-center justify-center gap-4 md:gap-3 text-neutral-400 dark:text-neutral-500 w-full md:w-auto"
      >
        <div className="w-5 h-8 border-2 border-neutral-400 dark:border-neutral-500 rounded-full flex justify-center p-1 shrink-0">
          <motion.div 
            animate={{ 
              y: [0, 10, 0],
              opacity: [1, 0.5, 1] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
            className="w-1.5 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full flex-shrink-0"
          />
        </div>
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] md:mt-2 text-center">Scroll ke Bawah</span>
      </motion.div>

    </section>
  );
}
