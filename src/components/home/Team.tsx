
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
    image: PlaceHolderImages.find(img => img.id === "team-member-1")?.imageUrl || "https://picsum.photos/seed/team1/600/800",
    socials: { linkedin: "#", twitter: "#", mail: "abdullah@abzautomations.com" }
  },
  {
    name: "Mohammed Hardi Abdul Baaki",
    role: "Chief Operations Officer (COO)",
    image: PlaceHolderImages.find(img => img.id === "team-member-2")?.imageUrl || "https://picsum.photos/seed/team2/600/800",
    socials: { linkedin: "#", twitter: "#", mail: "hardi@abzautomations.com" }
  },
  {
    name: "Yakubu Bunyamin",
    role: "Chief Technology Officer (CTO)",
    image: PlaceHolderImages.find(img => img.id === "team-member-3")?.imageUrl || "https://picsum.photos/seed/team3/600/800",
    socials: { linkedin: "#", twitter: "#", mail: "yakubu@abzautomations.com" }
  },
  {
    name: "Abdul Rahim Mettle Nii Okai",
    role: "Chief Marketing Officer (CMO)",
    image: PlaceHolderImages.find(img => img.id === "team-member-4")?.imageUrl || "https://picsum.photos/seed/team4/600/800",
    socials: { linkedin: "#", twitter: "#", mail: "rahim@abzautomations.com" }
  }
];

export function Team() {
  return (
    <section id="team" className="py-32 bg-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <Badge className="bg-primary/10 text-primary border-none px-4 py-1 font-bold uppercase tracking-widest text-[10px]">
            Our Hardworking Team
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
            Meet The <span className="text-primary">Experts</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our team brings together decades of experience in automation, engineering, and sustainable water management to solve the challenges of today and tomorrow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="group bg-background rounded-[6%] overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  data-ai-hint="professional man"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 justify-center">
                   <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <a href={member.socials.linkedin} className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors border border-white/20">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={member.socials.twitter} className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors border border-white/20">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href={`mailto:${member.socials.mail}`} className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors border border-white/20">
                        <Mail className="w-4 h-4" />
                      </a>
                   </div>
                </div>
              </div>
              
              <div className="p-8 text-left space-y-2 bg-white">
                <h4 className="text-xl font-headline font-bold leading-tight group-hover:text-primary transition-colors">
                  {member.name}
                </h4>
                <p className="text-primary font-bold text-xs uppercase tracking-widest">
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
