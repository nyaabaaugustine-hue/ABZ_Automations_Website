"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * @fileOverview A premium, "calm" WhatsApp floating button.
 * Features subtle animations and professional brand-aligned styling.
 */

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/233541988383"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-[110px] right-6 md:bottom-[130px] md:right-10 z-[100] group transition-all duration-500",
        "animate-in fade-in slide-in-from-bottom-10"
      )}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Calm ambient glow */}
        <div className="absolute inset-0 bg-[#25D366] rounded-2xl blur-xl opacity-10 group-hover:opacity-30 transition-opacity animate-pulse"></div>
        
        {/* Main Button Container */}
        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-[0_20px_40px_-12px_rgba(37,211,102,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 border border-white/20">
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 fill-white/10" />
          
          {/* Subtle "Online" indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md">
             <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Premium Tooltip Label */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-[#075E54] text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap border border-[#25D366]/10">
          Direct <span className="text-[#25D366]">WhatsApp</span>
        </span>
      </div>
    </a>
  );
}
