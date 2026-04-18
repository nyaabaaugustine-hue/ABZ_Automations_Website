
import type {Metadata} from 'next';
import './globals.css';
import { FloatingHub } from '@/components/shared/FloatingHub';
import { WaterLoading } from '@/components/shared/WaterLoading';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'ABZ Automations | Precision Water Solutions',
  description: 'Pioneering smart water automation and sustainable engineering solutions in Ghana.',
  openGraph: {
    title: 'ABZ Automations | Precision Water Solutions',
    description: 'Pioneering smart water automation and sustainable engineering solutions in Ghana.',
    url: 'https://abz-automations.com',
    siteName: 'ABZ Automations',
    images: [
      {
        url: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776230467/image_j8ruov.webp',
        width: 1200,
        height: 630,
        alt: 'ABZ Automations Logo',
      },
    ],
    locale: 'en_GH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABZ Automations | Precision Water Solutions',
    description: 'Pioneering smart water automation and sustainable engineering solutions in Ghana.',
    images: ['https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776230467/image_j8ruov.webp'],
  },
  // favicon served by src/app/icon.tsx (Next.js dynamic icon route)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Plus+Jakarta+Sans:wght@300..800&display=swap" rel="stylesheet" />
      </head>
      <body 
        className="font-body antialiased selection:bg-primary selection:text-primary-foreground" 
        suppressHydrationWarning
      >
        <WaterLoading />
        {children}
        <FloatingHub />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
