
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
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-2">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-bold">
                {stat.value}
              </h3>
              <p className="text-primary-foreground/70 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
