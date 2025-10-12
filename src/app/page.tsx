"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Users,
  Bell,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Smartphone,
  BarChart3,
  MessageSquare,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ناژو
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link
              href="#features"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            >
              امکانات
            </Link>
            <Link
              href="#how-it-works"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            >
              نحوه کار
            </Link>
            <Link
              href="#pricing"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            >
              قیمت‌ها
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">ورود</Link>
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              asChild
            >
              <Link href="/auth/signup">ثبت نام رایگان</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>سیستم نوبت‌دهی هوشمند</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent leading-tight">
            مدیریت نوبت‌ها
            <br />
            به سادگی یک کلیک
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            با ناژو، نوبت‌دهی را آسان کنید. مشتریان شما می‌توانند به راحتی نوبت
            بگیرند و شما بدون دردسر کسب‌وکارتان را مدیریت کنید.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg h-14 px-8"
              asChild
            >
              <Link href="/auth/signup">
                شروع رایگان
                <Calendar className="mr-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg h-14 px-8 border-2"
              asChild
            >
              <Link href="#demo">مشاهده دمو</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                ۱۰۰۰+
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                کسب‌وکار فعال
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                ۵۰۰۰+
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                نوبت روزانه
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                ۹۸٪
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                رضایت مشتریان
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white/50 dark:bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">
              امکانات ویژه
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              همه چیزی که برای مدیریت حرفه‌ای نوبت‌های کسب‌وکارتان نیاز دارید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">نوبت‌دهی آنلاین</CardTitle>
                <CardDescription className="text-base">
                  مشتریان شما می‌توانند ۲۴/۷ نوبت بگیرند، بدون نیاز به تماس
                  تلفنی
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 2 */}
            <Card className="border-2 hover:border-indigo-500 transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">یادآوری هوشمند</CardTitle>
                <CardDescription className="text-base">
                  ارسال خودکار پیامک و اعلان یادآوری به مشتریان قبل از نوبت
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 3 */}
            <Card className="border-2 hover:border-purple-500 transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">مدیریت کارکنان</CardTitle>
                <CardDescription className="text-base">
                  تعیین برنامه کاری و مدیریت نوبت‌های هر کارمند به صورت جداگانه
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 4 */}
            <Card className="border-2 hover:border-pink-500 transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">آمار و گزارش</CardTitle>
                <CardDescription className="text-base">
                  نمایش آمار کامل نوبت‌ها، درآمد و عملکرد کسب‌وکار شما
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 5 */}
            <Card className="border-2 hover:border-cyan-500 transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">موبایل فرست</CardTitle>
                <CardDescription className="text-base">
                  رابط کاربری کاملاً ریسپانسیو و بهینه‌شده برای موبایل
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 6 */}
            <Card className="border-2 hover:border-green-500 transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">امنیت بالا</CardTitle>
                <CardDescription className="text-base">
                  حفاظت از اطلاعات شما و مشتریانتان با بالاترین استانداردها
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">
              چگونه کار می‌کند؟
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              تنها ۳ قدم تا راه‌اندازی سیستم نوبت‌دهی شما
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                ۱
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                ثبت نام کنید
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                به سادگی یک فرم ساده را پر کنید و حساب کاربری خود را بسازید
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                ۲
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                تنظیمات را انجام دهید
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                برنامه کاری، خدمات و کارکنان خود را تعریف کنید
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                ۳
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                شروع به کار کنید
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                لینک نوبت‌دهی خود را با مشتریان به اشتراک بگذارید
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              نظرات کاربران
            </h2>
            <p className="text-xl text-blue-100">
              ببینید دیگران درباره ناژو چه می‌گویند
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <CardDescription className="text-white/90 text-base">
                  "ناژو واقعاً کار ما را آسان کرده. دیگر نگران مدیریت نوبت‌ها
                  نیستیم و مشتریان هم خیلی راضی هستند."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-white">محمد احمدی</div>
                <div className="text-sm text-blue-100">
                  مدیر سالن آرایشگاه
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <CardDescription className="text-white/90 text-base">
                  "رابط کاربری خیلی ساده و کاربردی است. حتی کارکنان ما که با
                  تکنولوژی آشنا نیستند به راحتی با آن کار می‌کنند."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-white">سارا کریمی</div>
                <div className="text-sm text-blue-100">صاحب کلینیک دندانپزشکی</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <CardDescription className="text-white/90 text-base">
                  "از وقتی ناژو رو شروع کردیم، تعداد نوبت‌های از دست رفته ما ۸۰٪
                  کاهش پیدا کرده. عالیه!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-white">علی رضایی</div>
                <div className="text-sm text-blue-100">مدیر مرکز مشاوره</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-100 dark:to-slate-50 border-0 shadow-2xl">
            <CardHeader className="text-center p-12">
              <CardTitle className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-slate-900">
                آماده شروع هستید؟
              </CardTitle>
              <CardDescription className="text-xl text-slate-300 dark:text-slate-600 mb-8 max-w-2xl mx-auto">
                همین حالا به صورت رایگان شروع کنید و تفاوت را تجربه کنید. بدون
                نیاز به کارت اعتباری!
              </CardDescription>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 text-lg h-14 px-10"
                  asChild
                >
                  <Link href="/auth/signup">شروع رایگان</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 dark:border-slate-900 dark:text-slate-900 text-lg h-14 px-10"
                  asChild
                >
                  <Link href="/contact">تماس با ما</Link>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ناژو</span>
              </div>
              <p className="text-slate-400 text-sm">
                سیستم نوبت‌دهی هوشمند برای کسب‌وکارهای مدرن
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">محصول</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="#features" className="hover:text-white">
                    امکانات
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-white">
                    قیمت‌ها
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="hover:text-white">
                    دمو
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">شرکت</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    بلاگ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    تماس با ما
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">پشتیبانی</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/help" className="hover:text-white">
                    راهنما
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="hover:text-white">
                    مستندات
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white">
                    پشتیبانی
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© ۱۴۰۳ ناژو. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
