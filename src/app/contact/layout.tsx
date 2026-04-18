import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ABZ Automations",
  description:
    "Get in touch with ABZ Automations. Call, email, or WhatsApp our engineering team in Kumasi, Ghana for quotes, consultations, and support.",
  openGraph: {
    title: "Contact Us | ABZ Automations",
    description: "Reach the ABZ Automations engineering team in Kumasi, Ghana.",
    url: "https://abzautomations.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
