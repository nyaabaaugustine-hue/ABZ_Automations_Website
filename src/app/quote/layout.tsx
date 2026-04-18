import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote | ABZ Automations",
  description:
    "Request a free custom quote from ABZ Automations. Our engineers will review your water automation needs and respond within 24 hours.",
  openGraph: {
    title: "Get a Quote | ABZ Automations",
    description: "Free consultation and custom quote from ABZ Automations engineers.",
    url: "https://abzautomations.com/quote",
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
