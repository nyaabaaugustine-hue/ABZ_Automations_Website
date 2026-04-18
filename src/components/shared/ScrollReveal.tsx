"use client";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Variant = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleUp" | "stagger";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;   // ms
  duration?: number; // ms
  threshold?: number;
  once?: boolean;
}

const variants: Record<Variant, { hidden: string; visible: string }> = {
  fadeUp:    { hidden: "opacity-0 translate-y-10",  visible: "opacity-100 translate-y-0" },
  fadeIn:    { hidden: "opacity-0",                  visible: "opacity-100" },
  fadeLeft:  { hidden: "opacity-0 translate-x-10",  visible: "opacity-100 translate-x-0" },
  fadeRight: { hidden: "opacity-0 -translate-x-10", visible: "opacity-100 translate-x-0" },
  scaleUp:   { hidden: "opacity-0 scale-95",         visible: "opacity-100 scale-100" },
  stagger:   { hidden: "opacity-0 translate-y-8",   visible: "opacity-100 translate-y-0" },
};

export function ScrollReveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 700,
  threshold = 0.12,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); if (once) io.unobserve(el); }
        else if (!once) setVisible(false);
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  const v = variants[variant];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out will-change-transform",
        visible ? v.visible : v.hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
