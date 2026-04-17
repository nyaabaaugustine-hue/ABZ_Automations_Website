
"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * @fileOverview WhatsApp support button with custom engineering asset.
 * Positioning is handled by the parent FloatingHub container.
 */
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/233541988383"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block group transition-all duration-500",
        "animate-in fade-in slide-in-from-right-full duration-1000 ease-out"
      )}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Massive Image Container - Rebuilt for 50% scale increase */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[450px] md:h-[450px] transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2">
          <Image 
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776428931/SUP_k4f1ab.png"
            alt="ABZ Support"
            fill
            priority
            className="object-contain"
          />
        </div>
        
        {/* Tooltip Label */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white/95 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap border border-primary/10">
          Direct <span className="text-primary">Support</span>
        </span>
      </div>
    </a>
  );
}
