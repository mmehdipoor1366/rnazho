import React from 'react'
import DashboardLayout from '../../components/dashboard/DashboardLayout'

export default function SupportPage() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto py-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-card">
          <h3 className="text-lg font-semibold mb-4">درخواست‌های پشتیبانی</h3>
          <div className="mb-4">
            <input placeholder="جستجوی تیکت..." className="w-full p-3 border rounded" />
          </div>
          <div className="space-y-3">
            <div className="p-4 border rounded">تیکت #123 — مشکل پرداخت — <span className="text-sm text-muted">در انتظار پاسخ</span></div>
            <div className="p-4 border rounded">تیکت #122 — سوال درباره سرویس — <span className="text-sm text-muted">پاسخ داده شده</span></div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
import React from 'react'
import Container from '../components/Container'

export default function SupportPage() {
  return (
    <Container>
      <div className="py-12">
        <h2 className="text-2xl font-semibold">پشتیبانی</h2>
        <p className="mt-4">برای درخواست پشتیبانی با ما تماس بگیرید یا تیکت ارسال کنید.</p>
      </div>
    </Container>
  )
}
