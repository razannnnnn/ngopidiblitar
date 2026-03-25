"use client";

import { useState } from "react";
import Link from "next/link";
import { CoffeeCup } from "./icons/coffee-cup";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SupportModal } from "./support-modal";

export function Navbar() {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like ease
        className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md"
      >
        <div className="mx-auto max-w-4xl px-4 flex items-center justify-between h-16">
          
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-md">
            <div className="flex items-center justify-center p-1.5 bg-foreground text-background rounded-md group-hover:scale-105 transition-transform duration-200">
              <CoffeeCup className="w-5 h-5" />
            </div>
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="font-bold text-lg tracking-tight hidden sm:block"
            >
              NgopiDiBlitar
            </motion.span>
          </Link>
          
          {/* Right Section: Theme Toggle and Support Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSupportModalOpen(true)}
              className="text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-foreground flex items-center gap-2"
            >
              <span>Support Dev</span>
            </motion.button>
          </div>

        </div>
      </motion.nav>

      {/* Extracted Support Developer Modal */}
      <SupportModal 
        isOpen={isSupportModalOpen} 
        onClose={() => setIsSupportModalOpen(false)} 
      />
    </>
  );
}
