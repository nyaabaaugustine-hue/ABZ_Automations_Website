import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | ABZ Automations — Industrial Precision Hardware",
  description:
    "Explore ABZ Automations' full range of smart water hardware: AutoX Pro Elite, VFD controllers, flow sensors, and tank monitoring systems engineered for Ghana.",
  openGraph: {
    title: "Shop | ABZ Automations",
    description: "Industrial-grade water automation hardware built and tested for Ghanaian conditions.",
    url: "https://abzautomations.com/products",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
