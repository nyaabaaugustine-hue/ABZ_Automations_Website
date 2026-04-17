
"use client";

import React from "react";
import { FloatingAI } from "./FloatingAI";
import { WhatsAppButton } from "./WhatsAppButton";

/**
 * @fileOverview GLOBAL FLOATING HUB
 * This is the ONLY container responsible for the position of floating buttons.
 * It is anchored directly to the viewport body to avoid inheritance issues.
 */
export function FloatingHub() {
  return (
    <div className="!fixed !bottom-[15px] !right-[15px] md:!bottom-[20px] md:!right-[20px] !z-[999999] flex flex-col items-end justify-end gap-[8px] pointer-events-none">
      {/* WhatsApp Support - Positioned on top in the vertical stack */}
      <div className="pointer-events-auto">
        <WhatsAppButton />
      </div>
      
      {/* AI Assistant - Positioned at the very base */}
      <div className="pointer-events-auto">
        <FloatingAI />
      </div>
    </div>
  );
}
