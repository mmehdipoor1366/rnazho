import React from "react";

export default function ServiceCard({ title, desc }:{title:string;desc:string}){
  return (
    <div className="rounded-xl border p-6 bg-card shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  )
}
