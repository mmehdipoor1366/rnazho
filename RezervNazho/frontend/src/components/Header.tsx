"use client"
import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b bg-white/60 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold">ر</div>
          <span className="font-semibold">رزرو ناژو</span>
        </Link>
        <nav className="hidden md:flex gap-4">
          <Link href="/">خانه</Link>
          <Link href="/login">ورود</Link>
        </nav>
      </div>
    </header>
  )
}
