"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function Header() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])

  return (
    <header className={clsx('border-b bg-surface dark:bg-slate-900')}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
          <Link href="/">
            <a className="text-xl font-bold text-primary">رزرو نَژُو</a>
          </Link>
          <span className="text-sm text-muted hidden md:inline">سامانه رزرو و نوبت‌دهی</span>
        </motion.div>

        <nav className="flex items-center gap-4">
          <Link href="/">
            <a className="text-sm text-muted hover:text-primary">خانه</a>
          </Link>
          <Link href="/partner">
            <a className="text-sm text-muted hover:text-primary">شریک</a>
          </Link>
          <Link href="/user">
            <a className="text-sm text-muted hover:text-primary">کاربر</a>
          </Link>
          <Link href="/support">
            <a className="text-sm text-muted hover:text-primary">پشتیبانی</a>
          </Link>
          <button
            aria-label="Toggle dark"
            onClick={() => setDark((s) => !s)}
            className="ml-2 px-2 py-1 rounded border text-sm"
          >
            {dark ? 'روشن' : 'تاریک'}
          </button>
        </nav>
      </div>
    </header>
  )
}
