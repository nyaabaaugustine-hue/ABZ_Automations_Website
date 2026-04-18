import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | ABZ Automations — Smart Water Solutions",
  description:
    "Explore ABZ Automations' professional services: Smart Pump Installation, Tank Sanitization, R/O Automation, and custom water engineering for Ghana.",
  openGraph: {
    title: "Our Services | ABZ Automations",
    description: "Professional water automation services engineered for Ghana.",
    url: "https://abzautomations.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
