import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import ParallaxBackground from '@/components/ParallaxBackground';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pickleball Tournaments - Elite Competition Platform',
  description: 'Join the most exciting pickleball tournaments with stunning visuals and competitive play',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ParallaxBackground />
          <Header />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}