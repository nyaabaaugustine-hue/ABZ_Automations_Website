"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function WaterLoading() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar: 0 → 70% quickly, then wait for load → 100%
    const timer1 = setTimeout(() => setProgress(70), 200);
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => setIsVisible(false), 600);
      setTimeout(() => setShouldRender(false), 1300);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      const fallback = setTimeout(handleLoad, 4000);
      return () => {
        clearTimeout(timer1);
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
    return () => clearTimeout(timer1);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100000] bg-[#020817] flex flex-col items-center justify-center transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {/* ── Animated SVG Pipe + Tank System ── */}
      <svg
        viewBox="0 0 320 260"
        width="280"
        height="220"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          {/* Water gradient */}
          <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1d6faa" stopOpacity="1" />
          </linearGradient>
          {/* Tank gradient */}
          <linearGradient id="tankGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#0f2744" />
          </linearGradient>
          {/* Pipe gradient */}
          <linearGradient id="pipeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {/* Clip for tank water fill */}
          <clipPath id="tankClip">
            <rect x="176" y="80" width="100" height="140" rx="8" />
          </clipPath>
          {/* Wave clip */}
          <clipPath id="waveClip">
            <rect x="176" y="80" width="100" height="140" />
          </clipPath>
        </defs>

        {/* ── Source borehole circle ── */}
        <circle cx="44" cy="80" r="22" fill="url(#pipeGrad)" stroke="#334155" strokeWidth="2" />
        <circle cx="44" cy="80" r="14" fill="#0f172a" />
        <circle cx="44" cy="80" r="7" fill="#1d6faa" opacity="0.8">
          <animate attributeName="r" values="7;10;7" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <text x="44" y="115" textAnchor="middle" fill="#64748b" fontSize="7" fontWeight="700" fontFamily="monospace" letterSpacing="1">BOREHOLE</text>

        {/* ── Horizontal pipe (borehole → elbow) ── */}
        <rect x="66" y="73" width="70" height="14" rx="4" fill="url(#pipeGrad)" stroke="#475569" strokeWidth="1" />
        {/* Water flowing in pipe */}
        <rect x="66" y="75" width="70" height="10" rx="3" fill="url(#waterGrad)" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0.4;0.7" dur="1.2s" repeatCount="indefinite" />
        </rect>
        {/* Flow particles */}
        <circle cx="72" cy="80" r="2.5" fill="#7dd3fc" opacity="0.9">
          <animate attributeName="cx" values="72;130" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9;0" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="92" cy="80" r="2" fill="#bae6fd" opacity="0.8">
          <animate attributeName="cx" values="92;130" dur="1s" begin="0.3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0" dur="1s" begin="0.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="108" cy="80" r="1.5" fill="#38bdf8" opacity="0.7">
          <animate attributeName="cx" values="108;130" dur="1s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0" dur="1s" begin="0.6s" repeatCount="indefinite" />
        </circle>

        {/* ── Elbow joint ── */}
        <circle cx="140" cy="80" r="9" fill="url(#pipeGrad)" stroke="#475569" strokeWidth="1.5" />

        {/* ── VFD pump box ── */}
        <rect x="128" y="96" width="24" height="20" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
        <rect x="131" y="99" width="8" height="5" rx="1" fill="#1d6faa" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="0.8s" repeatCount="indefinite" />
        </rect>
        <rect x="141" y="99" width="8" height="5" rx="1" fill="#f59e0b" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <text x="140" y="125" textAnchor="middle" fill="#64748b" fontSize="6" fontWeight="700" fontFamily="monospace" letterSpacing="0.5">VFD</text>

        {/* ── Vertical pipe (elbow → tank) ── */}
        <rect x="133" y="89" width="14" height="72" rx="4" fill="url(#pipeGrad)" stroke="#475569" strokeWidth="1" />
        <rect x="135" y="91" width="10" height="68" rx="3" fill="url(#waterGrad)" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.3;0.6" dur="1.4s" repeatCount="indefinite" />
        </rect>
        {/* Downward flow particles */}
        <circle cx="140" cy="100" r="2" fill="#7dd3fc" opacity="0.9">
          <animate attributeName="cy" values="100;155" dur="1.1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9;0" dur="1.1s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="118" r="1.5" fill="#bae6fd" opacity="0.8">
          <animate attributeName="cy" values="118;155" dur="0.9s" begin="0.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0" dur="0.9s" begin="0.4s" repeatCount="indefinite" />
        </circle>

        {/* ── Sensor node ── */}
        <circle cx="140" cy="155" r="7" fill="#0f172a" stroke="#1d6faa" strokeWidth="2">
          <animate attributeName="stroke" values="#1d6faa;#38bdf8;#1d6faa" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="155" r="3" fill="#38bdf8">
          <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </circle>

        {/* ── Inlet pipe into tank ── */}
        <rect x="140" y="158" width="40" height="10" rx="3" fill="url(#pipeGrad)" stroke="#475569" strokeWidth="1" />
        <rect x="142" y="160" width="36" height="6" rx="2" fill="url(#waterGrad)" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.3;0.6" dur="1.2s" repeatCount="indefinite" />
        </rect>

        {/* ── TANK body ── */}
        <rect x="176" y="80" width="100" height="140" rx="10" fill="url(#tankGrad)" stroke="#334155" strokeWidth="2.5" />

        {/* Tank water fill — animates from 0 to ~85% */}
        <g clipPath="url(#tankClip)">
          <rect x="176" y="80" width="100" height="140" fill="url(#waterGrad)" opacity="0.15" />
          {/* Filling water rect */}
          <rect x="178" y="82" width="96" height="136" fill="url(#waterGrad)" opacity="0.75">
            <animate
              attributeName="y"
              values="218;98"
              dur="3s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.4 0 0.2 1"
            />
            <animate
              attributeName="height"
              values="0;120"
              dur="3s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.4 0 0.2 1"
            />
          </rect>
          {/* Wave on top of water */}
          <path d="M176 98 Q196 93 216 98 Q236 103 256 98 Q276 93 278 98" stroke="#7dd3fc" strokeWidth="2" fill="none" opacity="0.6">
            <animate attributeName="d"
              values="M176 98 Q196 93 216 98 Q236 103 256 98 Q276 93 278 98;M176 100 Q196 105 216 100 Q236 95 256 100 Q276 105 278 100;M176 98 Q196 93 216 98 Q236 103 256 98 Q276 93 278 98"
              dur="2s" repeatCount="indefinite" />
            <animate attributeName="transform"
              values="translate(0,120);translate(0,0)"
              dur="3s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.4 0 0.2 1"
            />
          </path>
        </g>

        {/* Tank outline on top */}
        <rect x="176" y="80" width="100" height="140" rx="10" fill="none" stroke="#475569" strokeWidth="2" />

        {/* Tank window */}
        <rect x="195" y="100" width="14" height="40" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" opacity="0.8" />
        {/* Water level in window */}
        <rect x="197" y="108" width="10" height="30" rx="2" fill="#1d6faa" opacity="0.5">
          <animate attributeName="height" values="0;30" dur="3s" fill="freeze" />
          <animate attributeName="y" values="138;108" dur="3s" fill="freeze" />
        </rect>

        {/* Tank level markers */}
        <line x1="216" y1="100" x2="222" y2="100" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="216" y1="120" x2="220" y2="120" stroke="#475569" strokeWidth="1" strokeLinecap="round" />
        <line x1="216" y1="140" x2="220" y2="140" stroke="#475569" strokeWidth="1" strokeLinecap="round" />
        <line x1="216" y1="160" x2="222" y2="160" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="216" y1="180" x2="220" y2="180" stroke="#475569" strokeWidth="1" strokeLinecap="round" />
        <line x1="216" y1="200" x2="222" y2="200" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />

        {/* Tank label */}
        <text x="226" y="218" textAnchor="middle" fill="#334155" fontSize="7" fontWeight="700" fontFamily="monospace" letterSpacing="1">POLYTANK</text>

        {/* AutoX controller badge */}
        <rect x="235" y="88" width="34" height="16" rx="4" fill="#1d6faa" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite" />
        </rect>
        <text x="252" y="98" textAnchor="middle" fill="white" fontSize="6" fontWeight="900" fontFamily="monospace" letterSpacing="0.5">AutoX</text>

        {/* Overflow drain pipe at bottom */}
        <rect x="220" y="218" width="16" height="20" rx="3" fill="url(#pipeGrad)" stroke="#334155" strokeWidth="1" />

        {/* Drip drops */}
        <ellipse cx="228" cy="244" rx="3" ry="4" fill="#38bdf8" opacity="0.8">
          <animate attributeName="cy" values="244;255" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="rx" values="3;1.5" dur="1.2s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="228" cy="244" rx="2.5" ry="3.5" fill="#7dd3fc" opacity="0.6">
          <animate attributeName="cy" values="244;255" dur="1.2s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0" dur="1.2s" begin="0.5s" repeatCount="indefinite" />
        </ellipse>

        {/* WiFi / signal arcs from AutoX */}
        <g filter="url(#glow)" opacity="0.7">
          <path d="M277 78 Q290 70 303 78" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round">
            <animate attributeName="opacity" values="0;1;0" dur="1.6s" begin="0s" repeatCount="indefinite" />
          </path>
          <path d="M279 72 Q292 62 305 72" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round">
            <animate attributeName="opacity" values="0;1;0" dur="1.6s" begin="0.4s" repeatCount="indefinite" />
          </path>
          <path d="M281 66 Q294 54 307 66" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round">
            <animate attributeName="opacity" values="0;1;0" dur="1.6s" begin="0.8s" repeatCount="indefinite" />
          </path>
          <circle cx="290" cy="88" r="2" fill="#38bdf8">
            <animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

      {/* Brand text */}
      <div className="mt-8 text-center space-y-2">
        <h2 className="font-headline text-white text-xl md:text-2xl font-bold tracking-tight">
          <span className="text-[#1d8fcc]">ABZ</span> Automations
        </h2>
        <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.5em]">
          Initializing Precision Systems
        </p>

        {/* Progress bar */}
        <div className="w-48 mx-auto mt-4 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1d8fcc] rounded-full transition-all duration-[1500ms] ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
