
"use client";

import React from "react";
import { ShieldAlert, ShieldCheck, XCircle, CheckCircle2, TrendingUp, Zap, Droplets } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const comparisonData = [
  {
    feature: "Pump Control",
    legacy: { text: "Manual / Floating Switch", status: "danger" },
    abz: { text: "AI-Driven VFD Logic", status: "success" },
  },
  {
    feature: "Overflow Management",
    legacy: { text: "Visual Check / Spillage", status: "danger" },
    abz: { text: "Ultrasonic Zero-Waste", status: "success" },
  },
  {
    feature: "Grid Protection",
    legacy: { text: "Generic Breakers", status: "danger" },
    abz: { text: "Active Surge Isolation", status: "success" },
  },
  {
    feature: "Remote Monitoring",
    legacy: { text: "None (Physical Visit)", status: "danger" },
    abz: { text: "4G/LTE Cloud Telemetry", status: "success" },
  },
  {
    feature: "Hardware Lifespan",
    legacy: { text: "2-3 Years (Frequent Burnout)", status: "danger" },
    abz: { text: "8-10 Years (Optimized Cycles)", status: "success" },
  },
];

export function Comparison() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-none px-6 py-2 font-bold uppercase tracking-[0.3em] text-[10px] rounded-full">
            Technical Audit
          </Badge>
          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold">
            The <span className="text-primary">ABZ Difference</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
            Comparing legacy Ghanaian plumbing systems with ABZ's precision automation architecture.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-6 px-4 text-left font-headline font-bold text-muted-foreground text-xs uppercase tracking-widest">Feature Architecture</th>
                <th className="py-6 px-4 text-center font-headline font-bold text-muted-foreground text-xs uppercase tracking-widest bg-secondary/30 rounded-t-3xl">Legacy Systems</th>
                <th className="py-6 px-4 text-center font-headline font-bold text-primary text-xs uppercase tracking-widest bg-primary/5 rounded-t-3xl">ABZ Smart Infrastructure</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className="border-b border-border/50 group hover:bg-muted/30 transition-colors">
                  <td className="py-8 px-4 font-bold text-foreground/80">{row.feature}</td>
                  <td className="py-8 px-4 bg-secondary/30 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <XCircle className="w-5 h-5 text-destructive" />
                      <span className="text-sm font-medium text-muted-foreground">{row.legacy.text}</span>
                    </div>
                  </td>
                  <td className="py-8 px-4 bg-primary/5 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      <span className="text-sm font-bold text-primary">{row.abz.text}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
           {[
             { icon: TrendingUp, title: "45% Reduction", desc: "Average reduction in monthly utility costs for industrial clients." },
             { icon: Zap, title: "Grid Immunity", desc: "Hardware designed to survive the harshest Ghanaian power surges." },
             { icon: Droplets, title: "Zero Waste", desc: "Automated logic ensures not a single gallon is lost to overflow." }
           ].map((stat, i) => (
             <div key={i} className="p-8 rounded-3xl bg-background border border-border/50 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-headline font-bold">{stat.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{stat.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
