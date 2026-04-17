
"use client";

import React from "react";
import { Users, CheckCircle, Award, Clock } from "lucide-react";

const stats = [
  { label: "Satisfied Clients", value: "500+", icon: Users },
  { label: "Projects Completed", value: "1,200+", icon: CheckCircle },
  { label: "Industry Awards", value: "15", icon: Award },
  { label: "Years Experience", value: "10+", icon: Clock },
];

export function Stats() {
  return (
    <section className="py-12 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent)_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-4 group transition-transform duration-500 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-[6%] bg-white/10 mb-1 border border-white/10 shadow-2xl transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent">
                <stat.icon className="w-8 h-8 text-accent group-hover:text-current transition-colors duration-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter">
                  {stat.value}
                </h3>
                <p className="text-primary-foreground/70 font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
