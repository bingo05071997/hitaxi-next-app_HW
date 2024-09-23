import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HiTaxi',
  description: 'Your friendly and reliable daily taxi service for seamless, safe, and affordable rides.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const className = `${inter.className} dark`;

  return (
    <html lang="en">
      <body className={className}>
        <div className="max-w-screen-sm flex-grow flex flex-col w-full">{children}</div>
      </body>
    </html>
  );
}
