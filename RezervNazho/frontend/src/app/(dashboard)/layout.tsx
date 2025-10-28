import React from "react";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({children}:{children:React.ReactNode}){
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 grid gap-6 lg:grid-cols-[260px_1fr]">
        <Sidebar />
        <div className="rounded-lg p-6 bg-card shadow-sm">{children}</div>
      </div>
    </div>
  )
}
