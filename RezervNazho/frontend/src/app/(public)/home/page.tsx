import React from 'react'
import Container from '../../components/Container'
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'
import Testimonial from '../../components/Testimonial'

export default function HomePage() {
  return (
    <Container>
      <Hero />

      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard title="رزرو آنلاین" desc="رزرو ساده و قابل ادغام با وب‌سایت شما" icon={<span>📅</span>} />
          <FeatureCard title="مدیریت سرویس" desc="سرویس‌ها، قیمت‌ها و زمان‌بندی را به راحتی تنظیم کنید" icon={<span>⚙️</span>} />
          <FeatureCard title="یادآوری خودکار" desc="ارسال نوتیفیکیشن و پیامک یادآوری" icon={<span>🔔</span>} />
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">نظرات مشتریان</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial quote="پلتفرم ساده و قابل اطمینان. رضایت مشتریان ما افزایش یافت." author="کلینیک زیبایی آریا" />
            <Testimonial quote="گزارش‌ها و مدیریت نوبت‌ها بسیار کاربردی است." author="مطب دکتر حسینی" />
            <Testimonial quote="پشتیبانی سریع و دقیق، تجربهٔ عالی." author="سالن زیبایی نگار" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-semibold mb-4">تماس با ما</h3>
          <p className="text-muted mb-6">برای کسب اطلاعات بیشتر فرم زیر را پر کنید یا با ما تماس بگیرید.</p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="نام" className="p-3 border rounded" />
            <input placeholder="ایمیل" className="p-3 border rounded" />
            <textarea placeholder="پیام" className="p-3 border rounded md:col-span-2" />
            <button className="px-6 py-3 bg-primary text-white rounded-md md:col-span-2">ارسال</button>
          </form>
        </div>
      </section>
    </Container>
  )
}
