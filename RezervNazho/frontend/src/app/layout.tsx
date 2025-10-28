import './globals.css'
import '../styles/theme.css'
import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'

const vazir = Vazirmatn({ weight: ['300','400','700'], subsets: ['arabic'], variable: '--font-vazir' })

export const metadata: Metadata = {
  title: 'رزرو ناژو - rnazho',
  description: 'سامانهٔ نوبت‌دهی آنلاین rnazho',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.variable} font-vazir`}>{children}</body>
    </html>
  )
}
