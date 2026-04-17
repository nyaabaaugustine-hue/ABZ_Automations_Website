"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function WaterLoading() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    const cleanupTimer = setTimeout(() => {
      setShouldRender(false);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[1000] bg-[#020817] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="relative w-48 h-64 md:w-56 md:h-72">
        {/* Tank Container */}
        <div className="absolute inset-0 border-[6px] border-white/20 rounded-[20%] overflow-hidden shadow-2xl">
          {/* Water Content */}
          <div className="absolute bottom-0 left-0 right-0 bg-primary/80 animate-water-fill">
            <div className="absolute top-0 left-0 right-0 h-4 bg-white/30 blur-sm animate-wave"></div>
          </div>
        </div>
        
        {/* Logo Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 p-12">
           <div className="relative w-full h-full opacity-40 mix-blend-overlay">
              <Image 
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776230467/image_j8ruov.webp"
                alt="ABZ Logo"
                fill
                className="object-contain"
              />
           </div>
        </div>

        {/* Tank Features */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/20 rounded-full"></div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-2 bg-primary/20 blur-md rounded-full"></div>
      </div>

      <div className="mt-12 text-center space-y-3">
        <h2 className="font-headline text-white text-xl md:text-2xl font-bold tracking-tight animate-pulse">
          Initializing <span className="text-primary">ABZ</span> Systems
        </h2>
        <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.5em]">
          Optimizing Water Flow
        </p>
      </div>
    </div>
  );
}