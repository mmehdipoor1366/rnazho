import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import ContactSection from "@/components/ContactSection";

export default function HomePage(){
  return (
    <div>
      <Hero />
      <section id="services" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">خدمات ما</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard title="ویزیت آنلاین" desc="رزرو ویزیت آنلاین با پزشکان و مشاوران" />
            <ServiceCard title="مشاوره تلفنی" desc="رزرو تماس تلفنی با متخصصان" />
            <ServiceCard title="مدیریت تقویم" desc="هماهنگی و مدیریت ساعات کاری" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">نظرات کاربران</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Testimonial quote="خدمات عالی و پشتیبانی سریع" author="مریم" />
            <Testimonial quote="رزرو سریع و بدون دردسر" author="علی" />
            <Testimonial quote="طراحی ساده و قابل استفاده" author="سارا" />
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
