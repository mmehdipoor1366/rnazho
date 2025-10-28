import React from "react";

export default function PartnerDashboardPage(){
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">پنل همکار</h1>
          <p className="text-sm text-muted-foreground">مدیریت تقویم و خدمات</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg p-4 bg-card shadow">تقویم (درجا)</div>
        <div className="rounded-lg p-4 bg-card shadow">آمار و نمودارها</div>
      </div>
    </div>
  )
}
