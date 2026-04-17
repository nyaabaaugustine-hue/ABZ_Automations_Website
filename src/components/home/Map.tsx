
"use client";

import React, { useState } from "react";
import { MapPin, Mail, Phone, ExternalLink, Copy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

export function Map() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied!",
      description: `${field} has been copied to your clipboard.`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <Badge className="bg-primary/10 text-primary border-none px-4 py-1 font-bold uppercase tracking-widest text-[10px] mb-4">
                Connect With Us
              </Badge>
              <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our <span className="text-primary">Headquarters</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Visit us at the heart of innovation in Kumasi. We are located within the prestigious KNUST Business Incubator.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { label: "Physical Location", value: "Kumasi Business Incubator, KNUST, Kumasi, Ghana", gps: "AK-315-2929", icon: MapPin, color: "bg-primary/10", text: "text-primary" },
                { label: "Call Our Experts", value: "+233 (0) 54 610 1305", icon: Phone, color: "bg-accent/10", text: "text-accent" },
                { label: "Email Inquiries", value: "info@abzautomations.com", icon: Mail, color: "bg-secondary", text: "text-primary" }
              ].map((item, i) => (
                <div key={i} className="group bg-white p-5 rounded-[24px] border border-border/50 shadow-sm hover:shadow-lg transition-all flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center ${item.text} shrink-0`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-base mb-0.5">{item.label}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-1">{item.value}</p>
                    {item.gps && (
                      <div className="inline-flex items-center gap-2 bg-accent/5 px-2 py-0.5 rounded-lg border border-accent/10">
                        <span className="font-mono text-[10px] font-bold text-accent">{item.gps}</span>
                        <button onClick={() => copyToClipboard(item.gps!, "GPS Address")} className="text-accent hover:text-accent/70">
                          {copiedField === "GPS Address" ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="rounded-2xl h-12 px-8 font-bold shadow-xl shadow-primary/20 w-full md:w-auto" asChild>
              <a href="https://maps.google.com/?q=Kumasi+Business+Incubator+KNUST" target="_blank" rel="noopener noreferrer">
                Open In Google Maps <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="lg:col-span-7 relative h-[450px] lg:h-[600px] group">
            <div className="absolute inset-0 bg-primary/10 rounded-[32px] -rotate-1 transition-transform group-hover:rotate-0 duration-700"></div>
            <div className="relative h-full w-full bg-white rounded-[32px] overflow-hidden shadow-2xl border-2 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3323456789!2d-1.5678901234567!3d6.6789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96e47f56cfdf%3A0xc3b5e5c06977df7f!2sKumasi%20Business%20Incubator!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 brightness-95"
              ></iframe>
              
              <div className="absolute bottom-6 left-6 p-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Live Office Hours</span>
                </div>
                <p className="text-xs font-bold text-foreground">Mon - Fri: 8:00 AM - 5:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
