
"use client";

import React from "react";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Map() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div>
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Global Reach</h2>
              <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6">Our Headquarters</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Visit us at the Kumasi Business Incubator, located within the Kwame Nkrumah University of Science and Technology (KNUST).
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-muted-foreground">Kumasi Business Incubator, KNUST, Kumasi, Ghana</p>
                  <p className="text-accent font-mono text-sm mt-1">Ghana Post GPS: AK-039-5028</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  <p className="text-muted-foreground">+233 (0) 24 123 4567</p>
                  <p className="text-muted-foreground">+233 (0) 50 987 6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-muted-foreground">hello@abzautomations.com</p>
                  <p className="text-muted-foreground">support@abzautomations.com</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="rounded-xl px-10 font-bold">
              Get Directions <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl -rotate-3 transition-transform group-hover:rotate-0"></div>
            <div className="relative h-[500px] w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-white">
              {/* Map embed iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3323456789!2d-1.5678901234567!3d6.6789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96e47f56cfdf%3A0xc3b5e5c06977df7f!2sKumasi%20Business%20Incubator!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
