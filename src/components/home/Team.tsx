
"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const team = [
  {
    name: "Samuel Amankwah",
    role: "CEO & Founder",
    image: PlaceHolderImages.find(img => img.id === "team-member-1")?.imageUrl || "https://picsum.photos/seed/team1/400/400",
    socials: { linkedin: "#", twitter: "#", facebook: "#" }
  },
  {
    name: "Akua Owusu",
    role: "Lead Systems Engineer",
    image: PlaceHolderImages.find(img => img.id === "team-member-2")?.imageUrl || "https://picsum.photos/seed/team2/400/400",
    socials: { linkedin: "#", twitter: "#", facebook: "#" }
  },
  {
    name: "John Mensah",
    role: "Operations Director",
    image: PlaceHolderImages.find(img => img.id === "team-member-3")?.imageUrl || "https://picsum.photos/seed/team3/400/400",
    socials: { linkedin: "#", twitter: "#", facebook: "#" }
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Leadership</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6">Meet The Experts</h3>
          <p className="text-muted-foreground text-lg">
            Our team brings together decades of experience in automation, engineering, and sustainable water management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, idx) => (
            <div key={idx} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-primary border-dashed group-hover:rotate-45 transition-transform duration-1000"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <h4 className="text-xl font-headline font-bold mb-1">{member.name}</h4>
              <p className="text-primary font-medium mb-6">{member.role}</p>
              <div className="flex justify-center gap-4">
                <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={member.socials.twitter} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href={member.socials.facebook} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
