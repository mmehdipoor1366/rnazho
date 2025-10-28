import React from "react";

export default function SupportDashboardPage(){
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">پنل پشتیبانی</h1>
          <p className="text-sm text-muted-foreground">مدیریت تیکت‌ها و پاسخ به کاربران</p>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="rounded-lg p-4 bg-card shadow">جستجو و فیلتراسیون تیکت‌ها</div>
        <div className="rounded-lg p-4 bg-card shadow">لیست تیکت‌ها</div>
      </div>
    </div>
  )
}
