import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold">رزرو نَژُو</a>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/">
            <a className="text-sm">خانه</a>
          </Link>
          <Link href="/user">
            <a className="text-sm">کاربر</a>
          </Link>
          <Link href="/partner">
            <a className="text-sm">شریک</a>
          </Link>
          <Link href="/support">
            <a className="text-sm">پشتیبانی</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
