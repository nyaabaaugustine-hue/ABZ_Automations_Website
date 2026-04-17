"use client";

import React, { useState, useEffect } from "react";
import { X, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function VideoPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger after hero animations finish (~1.5s) — 2800ms gives breathing room
    const timer = setTimeout(() => {
      setVisible(true);
      // Tiny frame delay so CSS transition fires after element mounts in DOM
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setMounted(true))
      );
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setMounted(false);
    setTimeout(() => setVisible(false), 380);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[99999] flex items-center justify-center p-4",
        "transition-opacity duration-300 ease-out",
        mounted ? "opacity-100" : "opacity-0"
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
        onClick={close}
      />

      {/* Modal card */}
      <div
        className={cn(
          "relative z-10 w-full max-w-3xl rounded-3xl overflow-hidden",
          "shadow-[0_30px_80px_rgba(0,0,0,0.65)] border border-white/10",
          "transition-all duration-[380ms]",
          mounted
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-[0.88] translate-y-10 opacity-0"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.34,1.52,0.64,1)" }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#020817] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
              <Play className="w-3.5 h-3.5 text-primary fill-primary" />
            </div>
            <span className="text-white text-[11px] font-bold uppercase tracking-[0.25em]">
              ABZ Automations — See It In Action
            </span>
          </div>
          <button
            onClick={close}
            className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Close video"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 16:9 video container */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/5OqR-2eFIjI?si=bFYvNr365UdUS8l4&autoplay=1&rel=0&modestbranding=1"
            title="ABZ Automations Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* Bottom strip */}
        <div className="bg-[#020817] px-5 py-3 flex items-center justify-between">
          <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
            Precision Water Solutions · Kumasi, Ghana
          </span>
          <button
            onClick={close}
            className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary hover:text-accent transition-colors duration-200"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
