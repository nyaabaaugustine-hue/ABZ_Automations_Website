"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { X, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// Change this key name to reset the "seen" state for all visitors
const STORAGE_KEY = "abz_video_seen_v2";

export function VideoPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = useCallback(() => {
    setMounted(false);
    try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
    timerRef.current = setTimeout(() => setVisible(false), 400);
  }, []);

  useEffect(() => {
    // Only runs on client — safe for SSR
    let seen = false;
    try { seen = localStorage.getItem(STORAGE_KEY) === "1"; } catch {}
    if (seen) return;

    // Show after 2.8 s
    timerRef.current = setTimeout(() => {
      setVisible(true);
      // Double-rAF ensures the element is in the DOM before animating
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setMounted(true))
      );
    }, 2800);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, close]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[1000001] flex items-center justify-center",
        "px-3 py-3 sm:px-6 sm:py-6",
        "transition-opacity duration-300 ease-out",
        mounted ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
        onClick={close}
      />
      <div
        className={cn(
          "relative z-10 w-full max-w-3xl rounded-2xl sm:rounded-3xl overflow-hidden",
          "shadow-[0_24px_80px_rgba(0,0,0,0.7)] border border-white/10 flex flex-col",
          "transition-all duration-[380ms]",
          mounted ? "scale-100 translate-y-0 opacity-100" : "scale-[0.88] translate-y-8 opacity-0"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.34,1.52,0.64,1)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3 bg-[#020817] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
              <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary fill-primary" />
            </div>
            <span className="text-white text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] truncate">
              ABZ Automations — See It In Action
            </span>
          </div>
          <button
            onClick={close}
            className="ml-3 w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors duration-200 shrink-0"
            aria-label="Close video"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Video embed */}
        <div className="relative w-full bg-black" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/5OqR-2eFIjI?si=bFYvNr365UdUS8l4&autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
            title="ABZ Automations Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* Footer */}
        <div className="bg-[#020817] px-4 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between shrink-0">
          <span className="text-white/40 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] truncate mr-4">
            Precision Water Solutions · Kumasi, Ghana
          </span>
          <button
            onClick={close}
            className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors duration-200 shrink-0"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
