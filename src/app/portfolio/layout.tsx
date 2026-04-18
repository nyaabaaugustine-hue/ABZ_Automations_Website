import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | ABZ Automations — Built for Ghana",
  description:
    "Explore ABZ Automations' project portfolio — residential, agricultural, industrial, and commercial water automation installations across Ghana.",
  openGraph: {
    title: "Portfolio | ABZ Automations",
    description: "Real projects. Real results. Water automation built for Ghana.",
    url: "https://abzautomations.com/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
