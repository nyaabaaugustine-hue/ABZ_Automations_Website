import type {Metadata} from 'next';
import './globals.css';
import { FloatingAI } from '@/components/shared/FloatingAI';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { WaterLoading } from '@/components/shared/WaterLoading';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'ABZ Automations | Precision Water Solutions',
  description: 'Pioneering smart water automation and sustainable engineering solutions in Ghana.',
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
        <link rel="icon" href="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776230467/image_j8ruov.webp" type="image/webp" />
      </head>
      <body 
        className="font-body antialiased selection:bg-primary selection:text-primary-foreground" 
        suppressHydrationWarning
      >
        <WaterLoading />
        {children}
        <WhatsAppButton />
        <FloatingAI />
        <Toaster />
      </body>
    </html>
  );
}