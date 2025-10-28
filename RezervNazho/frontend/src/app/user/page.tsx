import React from 'react'
import DashboardLayout from '../../components/dashboard/DashboardLayout'

export default function UserDashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">نوبت‌های من</h3>
              <button className="px-3 py-1 border rounded text-sm">رزرو جدید</button>
            </div>
            <div className="space-y-3">
              <div className="p-4 border rounded">دوشنبه — ساعت 14:30 — کلینیک آریا</div>
              <div className="p-4 border rounded">چهارشنبه — ساعت 10:00 — مطب حسینی</div>
            </div>
          </div>
        </div>

        <aside>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-card">
            <h4 className="font-semibold mb-2">پیام‌ها</h4>
            <div className="text-sm text-muted">پیامی دریافت نشده است.</div>
          </div>
        </aside>
      </div>
    </DashboardLayout>
  )
}
