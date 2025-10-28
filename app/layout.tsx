import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "رزرو ناژو | سامانه نوبت‌دهی آنلاین",
  description: "سامانه نوبت‌دهی و رزرو آنلاین ناژو - رزرو سریع و آسان",
  keywords: "رزرو آنلاین, نوبت‌دهی, ناژو, رزرو ناژو",
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
