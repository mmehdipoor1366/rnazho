import React from 'react'

export default function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-card p-6">
      <div className="text-muted">“{quote}”</div>
      <div className="mt-4 font-semibold">{author}</div>
    </div>
  )
}
