"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full border-b bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
            ر
          </div>
          <div className="text-sm font-bold">رزرونازخو</div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/home" className="text-sm">خانه</Link>
          <Link href="/home#services" className="text-sm">خدمات</Link>
          <Link href="/home#contact" className="text-sm">تماس</Link>
          <Link href="/login" className="text-sm px-3 py-1 rounded-md bg-primary text-white">ورود</Link>
        </nav>
      </div>
    </header>
  );
}
