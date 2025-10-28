"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold mb-4">
            رزرو آسان و سریع — وقت خود را مدیریت کنید
          </motion.h1>
          <p className="text-lg text-muted mb-6">با RezervNazho مشتریان خود را خوشحال کنید، نوبت‌ها را هوشمندانه مدیریت کنید و رشد کنید.</p>

          <div className="flex gap-3">
            <a className="px-6 py-3 bg-primary text-white rounded-lg shadow">رزرو نوبت</a>
            <a className="px-6 py-3 border rounded-lg">تماس با ما</a>
          </div>
        </div>

        <div>
          <motion.div initial={{ scale: 0.98 }} animate={{ scale: 1 }} className="bg-white dark:bg-slate-800 rounded-lg shadow-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted">نوبت بعدی</div>
                <div className="text-lg font-semibold">دوشنبه — ساعت 14:30</div>
              </div>
              <div className="text-right">
                <div className="text-sm">نام مشتری</div>
                <div className="text-xs text-muted">کلینیک زیبایی</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
