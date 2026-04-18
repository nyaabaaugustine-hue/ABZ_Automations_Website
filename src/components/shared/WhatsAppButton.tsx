"use client";

import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * @fileOverview WhatsApp support button.
 * Positioning is handled by the parent FloatingHub container.
 */
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/233541988383?text=Hi%20ABZ%20Automations%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20water%20automation%20solutions."
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center gap-3 transition-all duration-500",
        "animate-in fade-in slide-in-from-right-full duration-1000 ease-out"
      )}
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip Label — appears on hover */}
      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap px-3 py-1.5 bg-white/95 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-[0.15em] rounded-xl shadow-xl border border-primary/10">
        WhatsApp <span className="text-[#25D366]">Support</span>
      </span>

      {/* Button */}
      <div className="relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
        {/* Pulse ring — sized to match the image */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
        {/* Main button */}
        <div className="relative flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776482981/newlog_egxlea.png"
            alt="WhatsApp Support"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
            unoptimized
          />
        </div>
      </div>
    </a>
  );
}
