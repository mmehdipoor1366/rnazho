import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'رزرو ناژو | Rnazho',
  description: 'سامانه رزرو وقت حرفه‌ای',
  keywords: ['رزرو وقت', 'نوبت دهی', 'appointment booking'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}