
import type {Metadata} from 'next';
import './globals.css';
import { FloatingHub } from '@/components/shared/FloatingHub';
import { WaterLoading } from '@/components/shared/WaterLoading';
import { Toaster } from '@/components/ui/toaster';

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
  icons: {
    icon: [
      { url: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_200,g_face/v1776230467/image_j8ruov.webp', type: 'image/webp' },
      { url: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_32,g_face/v1776230467/image_j8ruov.webp', sizes: '32x32', type: 'image/webp' },
      { url: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_16,g_face/v1776230467/image_j8ruov.webp', sizes: '16x16', type: 'image/webp' },
    ],
    shortcut: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_200,g_face/v1776230467/image_j8ruov.webp',
    apple: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_180,g_face/v1776230467/image_j8ruov.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Force favicon — these explicit link tags override the physical favicon.ico */}
        <link rel="icon" type="image/webp" sizes="32x32" href="https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_32,g_face/v1776230467/image_j8ruov.webp" />
        <link rel="icon" type="image/webp" sizes="16x16" href="https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_16,g_face/v1776230467/image_j8ruov.webp" />
        <link rel="shortcut icon" type="image/webp" href="https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_200,g_face/v1776230467/image_j8ruov.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_180,g_face/v1776230467/image_j8ruov.webp" />
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
      </body>
    </html>
  );
}
