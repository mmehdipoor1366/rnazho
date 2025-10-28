import React from 'react'
import DashboardLayout from '../../components/dashboard/DashboardLayout'
import dynamic from 'next/dynamic'

const ResponsiveContainer = dynamic(() => import('recharts').then((m) => m.ResponsiveContainer), { ssr: false })
const LineChart = dynamic(() => import('recharts').then((m) => m.LineChart), { ssr: false })
const Line = dynamic(() => import('recharts').then((m) => m.Line), { ssr: false })
const XAxis = dynamic(() => import('recharts').then((m) => m.XAxis), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then((m) => m.Tooltip), { ssr: false })

const data = [
  { name: 'دوشنبه', bookings: 12 },
  { name: 'سه‌شنبه', bookings: 18 },
  { name: 'چهارشنبه', bookings: 8 },
  { name: 'پنج‌شنبه', bookings: 15 },
  { name: 'جمعه', bookings: 6 }
]

export default function PartnerDashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-card">
          <h3 className="font-semibold mb-4">تقویم و مدیریت نوبت‌ها</h3>
          <div className="h-64 bg-gray-50 dark:bg-slate-900 rounded p-4">تقویم (جاگذاری شود)</div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-card">
          <h4 className="font-semibold mb-4">آمار رزروها</h4>
          <div className="h-40">
            {/* Chart rendered on client via recharts */}
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Line type="monotone" dataKey="bookings" stroke="#0066FF" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
