import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import type React from 'react';

const WantedSansVariable = localFont({
  src: [
    {
      path: './fonts/WantedSansVariable.woff2',
    },
  ],
  variable: '--font-WantedSansVariable',
});

export const metadata: Metadata = {
  title: "세상을 비추는 달, LUNA",
  description: "한국디지털미디어고등학교 IT 소셜벤처 동아리, LUNA",
  openGraph: {
    images: [{ url: 'https://luna.codes/images/cover.png' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="ko">
      <body className={WantedSansVariable.className}>{children}</body>
      </html>
  );
}
