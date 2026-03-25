"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Wifi, Coffee, X } from "lucide-react";
import { Instagram } from "./icons/instagram";
import Image from "next/image";

export function CafeList({ cafes }) {
  const [selectedCafe, setSelectedCafe] = useState(null);

  if (!cafes || cafes.length === 0) {
    return (
      <div className="text-center py-20 text-neutral-500 border border-border border-dashed rounded-xl">
        Belum ada data cafe yang dapat ditampilkan.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 pb-12">
        {cafes.map((cafe, index) => (
          <motion.div
            key={cafe.id || index}
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group p-5 md:p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md text-card-foreground hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
            onClick={() => setSelectedCafe(cafe)}
          >
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:underline decoration-neutral-300 dark:decoration-neutral-600 underline-offset-4">{cafe.nama}</h3>
              <div className="flex items-start gap-1.5 text-sm md:text-base text-neutral-500 dark:text-neutral-400">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" /> 
                <div className="flex-1 min-w-0">
                  <span className="line-clamp-2 md:line-clamp-1">{cafe.alamat}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2 text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/75 font-medium whitespace-nowrap">
                <Clock className="w-4 h-4" /> {cafe.jam_operasional}
              </span>
              <span className="font-semibold px-3 py-1 border border-border border-dashed rounded-full">{cafe.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCafe && (
          <Modal cafe={selectedCafe} onClose={() => setSelectedCafe(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

function Modal({ cafe, onClose }) {
  return (
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
        className="relative w-full max-w-2xl bg-card text-card-foreground border border-border rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
      >
        {/* Floating Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[100] p-2 rounded-full bg-black/20 hover:bg-black/40 dark:bg-black/50 dark:hover:bg-black/70 text-white backdrop-blur-md transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto w-full h-full flex flex-col">
          {/* Dynamic Image Carousel (Fetches directly from Cloudinary API or Spreadsheet) */}
          <ImageCarousel cafe={cafe} />

          <div className="flex items-start justify-between border-b border-border shrink-0 p-6 md:p-8 pt-4 md:pt-6">
            <div className="pr-8 mt-4 md:mt-2">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight">{cafe.nama}</h2>
              <div className="flex items-start gap-2 text-sm md:text-base text-neutral-500 dark:text-neutral-400">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" /> 
                <div className="flex-1 min-w-0">
                  <span>{cafe.alamat}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-neutral-50 dark:bg-neutral-900 border border-border p-6 rounded-2xl mb-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-xs md:text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Jam Operasional
                </h4>
                <p className="text-base md:text-lg font-medium">{cafe.jam_operasional}</p>
              </div>
              <div>
                <h4 className="font-semibold text-xs md:text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5 flex items-center gap-2">
                  💰 Rentang Harga
                </h4>
                <p className="text-base md:text-lg font-medium">{cafe.price}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-xs md:text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2 flex items-center gap-2">
                <Wifi className="w-4 h-4" /> Fasilitas WiFi
              </h4>
              <div className="p-3 bg-background border border-border rounded-xl flex items-center justify-between gap-4 text-sm">
                <span className="text-neutral-500">SSID:</span> 
                <span className="font-medium text-right break-words">{cafe.wifi_ssid || '-'}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {cafe.maps && (
              <a href={cafe.maps} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-foreground text-background rounded-xl font-medium hover:opacity-90 transition-opacity">
                <MapPin className="w-4 h-4" /> Buka di Maps
              </a>
            )}
            {cafe.menu && (
              <a href={cafe.menu} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-border bg-card hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-xl font-medium transition-colors">
                <Coffee className="w-4 h-4 text-orange-600 dark:text-orange-400" /> Lihat Menu
              </a>
            )}
            {cafe.instagram && (
              <a href={cafe.instagram} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-border bg-card hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-xl font-medium transition-colors">
                <Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" /> Instagram
              </a>
            )}
          </div>
        </div>
        </div>
      </motion.div>
    </div>
  );
}

function ImageCarousel({ cafe }) {
  const [images, setImages] = useState(null); // null = loading
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;
    async function fetchImages() {
      try {
        const targetFolder = cafe.folder_cloudinary || cafe.folder_nama || cafe.nama;
        const res = await fetch(`/api/cafe-images?folder=Cafe/${encodeURIComponent(targetFolder)}`);
        const data = await res.json();
        if (isMounted) {
          if (data.images && data.images.length > 0) {
            setImages(data.images);
          } else {
             // Fallback to image_url from spreadsheet
            setImages(cafe.image_url ? [cafe.image_url] : []);
          }
        }
      } catch (err) {
        console.error('Failed to fetch gallery:', err);
        if (isMounted) {
          setImages(cafe.image_url ? [cafe.image_url] : []);
        }
      }
    }
    fetchImages();
    return () => { isMounted = false; };
  }, [cafe]);

  // Auto-slide effect
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, [images]);

  if (images === null) {
    return (
      <div className="relative w-full h-48 sm:h-64 bg-neutral-100 dark:bg-neutral-900 border-b border-border flex items-center justify-center shrink-0">
        <span className="text-neutral-400 font-medium animate-pulse text-sm">Memuat galeri foto...</span>
      </div>
    );
  }

  if (images.length === 0) {
    return null; // Return nothing if absolutely no images
  }

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full h-48 sm:h-64 bg-neutral-100 dark:bg-neutral-900 overflow-hidden shrink-0 border-b border-border group select-none">
      {/* Blurred Background Padding */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`bg-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image 
            src={currentImage} 
            alt="blur background" 
            fill 
            className="object-cover dark:opacity-50 blur-xl scale-125"
            sizes="(max-width: 768px) 100vw, 42rem"
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`img-${currentIndex}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 z-10 p-2"
        >
          <Image 
            src={currentImage} 
            alt={`${cafe.nama} photo ${currentIndex + 1}`} 
            fill 
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 42rem"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Pagination Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
          {images.map((url, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-white scale-125 w-3" : "bg-white/50 hover:bg-white/80 w-1.5"}`}
              aria-label={`Slide to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
