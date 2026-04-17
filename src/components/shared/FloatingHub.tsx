
"use client";

import React from "react";
import { FloatingAI } from "./FloatingAI";
import { WhatsAppButton } from "./WhatsAppButton";

/**
 * @fileOverview Global container for all floating action buttons.
 * Ensures fixed positioning and vertical stacking in the bottom-right corner.
 */
export function FloatingHub() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] flex flex-col items-end gap-2 md:gap-4 pointer-events-none">
      {/* AI Assistant - Stacks on top */}
      <div className="pointer-events-auto">
        <FloatingAI />
      </div>
      
      {/* WhatsApp Support - Anchored at the base */}
      <div className="pointer-events-auto">
        <WhatsAppButton />
      </div>
    </div>
  );
}
