"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "Abdullah Mohammed Zainudeen",
    role: "CEO / Lead Engineer",
    image: PlaceHolderImages.find(img => img.id === "team-member-1")?.imageUrl || "https://picsum.photos/seed/team-abz-1/600/800",
    socials: { linkedin: "#", twitter: "#", mail: "info@abzautomations.com" }
  },
  {
    name: "Mohammed Hardi Abdul Baaki",
    role: "Chief Operations Officer (COO)",
    image: PlaceHolderImages.find(img => img.id === "team-member-2")?.imageUrl || "https://picsum.photos/seed/team-abz-2/600/800",
    socials: { linkedin: "#", twitter: "#", mail: "info@abzautomations.com" }
  },
  {
    name: "Yakubu Bunyamin",
    role: "Chief Technology Officer (CTO)",
    image: PlaceHolderImages.find(img => img.id === "team-member-3")?.imageUrl || "https://picsum.photos/seed/team-abz-3/600/800",
    socials: { linkedin: "#", twitter: "#", mail: "info@abzautomations.com" }
  },
  {
    name: "Abdul Rahim Mettle Nii Okai",
    role: "Chief Marketing Officer (CMO)",
    image: PlaceHolderImages.find(img => img.id === "team-member-4")?.imageUrl || "https://picsum.photos/seed/team-abz-4/600/800",
    socials: { linkedin: "#", twitter: "#", mail: "info@abzautomations.com" }
  }
];

export function Team() {
  return (
    <section id="team" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <Badge className="bg-primary/10 text-primary border-none px-6 py-2 font-bold uppercase tracking-[0.3em] text-[11px] rounded-full">
            Our Hardworking Team
          </Badge>
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold">
            Meet The <span className="text-primary">Experts</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Decades of experience in automation and engineering for sustainable water management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="group bg-background rounded-[6%] overflow-hidden border border-border/50 shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-4"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8 justify-center">
                   <div className="flex gap-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                      <a href={member.socials.linkedin} className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all border border-white/30">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={member.socials.twitter} className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all border border-white/30">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href={`mailto:${member.socials.mail}`} className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all border border-white/30">
                        <Mail className="w-5 h-5" />
                      </a>
                   </div>
                </div>
              </div>
              
              <div className="p-10 text-left space-y-3 bg-white">
                <h4 className="text-2xl font-headline font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}