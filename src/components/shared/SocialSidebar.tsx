
'use client';

import React from 'react';
import { 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  ChevronRight,
  Share2
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const socials = [
  { 
    name: 'WhatsApp', 
    icon: MessageCircle, 
    href: 'https://wa.me/233546101305', 
    color: 'bg-[#25D366]',
    label: 'Chat with Us'
  },
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    href: '#', 
    color: 'bg-[#0077B5]',
    label: 'Professional Network'
  },
  { 
    name: 'Facebook', 
    icon: Facebook, 
    href: '#', 
    color: 'bg-[#1877F2]',
    label: 'Latest Updates'
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    href: '#', 
    color: 'bg-[#E4405F]',
    label: 'Behind the Scenes'
  },
  { 
    name: 'X (Twitter)', 
    icon: Twitter, 
    href: '#', 
    color: 'bg-black',
    label: 'Tech News'
  },
];

export function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[70] hidden md:flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            className="h-32 w-10 rounded-r-[6%] rounded-l-none bg-primary text-white flex flex-col items-center justify-center gap-4 shadow-2xl transition-all hover:w-12 hover:bg-primary/90 group border-y border-r border-white/20 premium-shadow"
          >
            <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold uppercase tracking-[0.3em] opacity-90">
              Connect
            </span>
            <ChevronRight className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          side="right" 
          sideOffset={12} 
          className="p-3 rounded-[6%] border-white/30 glass min-w-[240px] animate-in slide-in-from-left-4 duration-500 shadow-2xl"
        >
          <div className="px-3 py-2 mb-3 border-b border-white/10">
             <div className="flex items-center gap-2">
               <Share2 className="w-4 h-4 text-accent" />
               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">Social Ecosystem</p>
             </div>
          </div>
          <div className="space-y-1">
            {socials.map((social) => (
              <DropdownMenuItem key={social.name} asChild>
                <a 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-[6%] cursor-pointer hover:bg-primary/5 transition-all group outline-none"
                >
                  <div className={cn(
                    "w-10 h-10 rounded-[6%] flex items-center justify-center text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                    social.color
                  )}>
                    <social.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-foreground">{social.name}</span>
                    <span className="text-[10px] text-muted-foreground font-medium">{social.label}</span>
                  </div>
                </a>
              </DropdownMenuItem>
            ))}
          </div>
          
          <div className="mt-3 pt-3 border-t border-white/10 px-3">
            <p className="text-[9px] text-muted-foreground italic text-center">
              Available 24/7 for technical inquiries.
            </p>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
