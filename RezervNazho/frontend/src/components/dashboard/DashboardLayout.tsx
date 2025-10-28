"use client"

import React from 'react'
import Sidebar from '../Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8 flex gap-6">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
