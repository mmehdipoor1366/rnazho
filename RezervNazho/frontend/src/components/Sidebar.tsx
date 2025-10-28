import React from 'react'

export default function Sidebar({ children }: { children?: React.ReactNode }) {
  return (
    <aside className="w-64 hidden lg:block">
      <div className="p-4 bg-white rounded shadow">منو</div>
    </aside>
  )
}
