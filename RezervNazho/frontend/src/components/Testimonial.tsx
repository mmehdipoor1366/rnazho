import React from "react";

export default function Testimonial({ quote, author }:{quote:string;author:string}){
  return (
    <div className="rounded-xl border p-6 bg-background shadow-sm">
      <p className="text-muted-foreground">“{quote}”</p>
      <div className="mt-4 text-sm font-medium">— {author}</div>
    </div>
  )
}
