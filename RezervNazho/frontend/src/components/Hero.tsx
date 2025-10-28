"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          رزرو نوبت سریع و ساده با رزرونازخو
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-muted-foreground"
        >
          وقت خود را مدیریت کنید، یادآوری دریافت کنید و خدمات را آنلاین رزرو کنید — همه در یک‌جا.
        </motion.p>
        <motion.div
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <Link href="/login" className="rounded-md bg-primary px-6 py-3 text-white shadow-lg">رزرو نوبت</Link>
          <Link href="/home#services" className="rounded-md border border-input px-6 py-3">مشاهده خدمات</Link>
        </motion.div>
      </div>
    </section>
  );
}
