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
  Users,
  Bell,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Smartphone,
  BarChart3,
  Star,
  ArrowLeft,
  Sparkles,
  Heart,
  Award,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-indigo-950 dark:to-purple-950"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header/Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                ناژو
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="#features"
                className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors font-medium"
              >
                امکانات
              </Link>
              <Link
                href="#how-it-works"
                className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors font-medium"
              >
                نحوه کار
              </Link>
              <Link
                href="#testimonials"
                className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors font-medium"
              >
                نظرات
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                className="hidden sm:inline-flex hover:bg-slate-100 dark:hover:bg-slate-800"
                asChild
              >
                <Link href="/auth/login">ورود</Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                asChild
              >
                <Link href="/auth/signup">
                  <Sparkles className="w-4 h-4 ml-2" />
                  شروع رایگان
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center max-w-5xl mx-auto animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold mb-8 shadow-md hover:shadow-lg transition-shadow">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>سیستم نوبت‌دهی هوشمند و پیشرفته</span>
              <Sparkles className="w-4 h-4 text-purple-500" />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-slate-100 dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
                مدیریت نوبت‌ها
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                آسان‌تر از همیشه
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              با <strong className="text-blue-600 dark:text-blue-400">ناژو</strong>، دیگر نگران مدیریت نوبت‌ها نباشید. 
              مشتریان شما به راحتی نوبت می‌گیرند و شما بر رشد کسب‌وکارتان تمرکز می‌کنید
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white text-lg h-16 px-10 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all rounded-2xl font-bold"
                asChild
              >
                <Link href="/auth/signup">
                  <Sparkles className="w-5 h-5 ml-2" />
                  شروع رایگان - بدون کارت اعتباری
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg h-16 px-10 border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl font-bold"
                asChild
              >
                <Link href="#demo">مشاهده دمو</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>نصب فوری</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span>امن و مطمئن</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>پشتیبانی ۲۴/۷</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
            {[
              { number: "۱۰۰۰+", label: "کسب‌وکار فعال", icon: TrendingUp, gradient: "from-blue-600 to-purple-600" },
              { number: "۵۰۰۰+", label: "نوبت روزانه", icon: Calendar, gradient: "from-purple-600 to-pink-600" },
              { number: "۹۸٪", label: "رضایت مشتریان", icon: Star, gradient: "from-pink-600 to-red-600" }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity`}></div>
                <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className={`text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-semibold">
                    {stat.label}
                  </div>
                  <stat.icon className="w-8 h-8 text-blue-500 mt-4 opacity-50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>امکانات پیشرفته</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              همه چیز در یک جا
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              تمام ابزارهایی که برای مدیریت حرفه‌ای نوبت‌های کسب‌وکارتان نیاز دارید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Calendar, title: "نوبت‌دهی آنلاین", description: "مشتریان شما می‌توانند ۲۴/۷ نوبت بگیرند، بدون نیاز به تماس تلفنی", gradient: "from-blue-500 to-cyan-500" },
              { icon: Bell, title: "یادآوری هوشمند", description: "ارسال خودکار پیامک و اعلان یادآوری به مشتریان قبل از نوبت", gradient: "from-purple-500 to-pink-500" },
              { icon: Users, title: "مدیریت کارکنان", description: "تعیین برنامه کاری و مدیریت نوبت‌های هر کارمند به صورت جداگانه", gradient: "from-pink-500 to-rose-500" },
              { icon: BarChart3, title: "آمار و گزارش", description: "نمایش آمار کامل نوبت‌ها، درآمد و عملکرد کسب‌وکار شما", gradient: "from-orange-500 to-red-500" },
              { icon: Smartphone, title: "موبایل فرست", description: "رابط کاربری کاملاً ریسپانسیو و بهینه‌شده برای موبایل", gradient: "from-green-500 to-emerald-500" },
              { icon: Shield, title: "امنیت بالا", description: "حفاظت از اطلاعات شما و مشتریانتان با بالاترین استانداردها", gradient: "from-indigo-500 to-blue-500" }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                <Card className="relative h-full border-2 border-slate-200 dark:border-slate-800 rounded-3xl hover:border-slate-300 dark:hover:border-slate-700 transition-all transform hover:-translate-y-2 hover:shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold mb-3">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>ساده و سریع</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              شروع به کار در ۳ قدم
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              تنها چند دقیقه تا راه‌اندازی سیستم نوبت‌دهی شما
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { step: "۱", title: "ثبت نام کنید", description: "به سادگی یک فرم ساده را پر کنید و حساب کاربری خود را بسازید", gradient: "from-blue-500 to-cyan-500" },
              { step: "۲", title: "تنظیمات را انجام دهید", description: "برنامه کاری، خدمات و کارکنان خود را تعریف کنید", gradient: "from-purple-500 to-pink-500" },
              { step: "۳", title: "شروع به کار کنید", description: "لینک نوبت‌دهی خود را با مشتریان به اشتراک بگذارید", gradient: "from-pink-500 to-red-500" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mx-auto mb-8 w-24 h-24">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                  <div className={`relative w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white text-4xl font-black shadow-2xl transform group-hover:scale-110 transition-transform`}>
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              <span>نظرات کاربران</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">کاربران ما چه می‌گویند؟</h2>
            <p className="text-xl text-white/90">ببینید دیگران درباره ناژو چه نظری دارند</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "محمد احمدی", role: "مدیر سالن آرایشگاه", text: "ناژو واقعاً کار ما را آسان کرده. دیگر نگران مدیریت نوبت‌ها نیستیم و مشتریان هم خیلی راضی هستند." },
              { name: "سارا کریمی", role: "صاحب کلینیک دندانپزشکی", text: "رابط کاربری خیلی ساده و کاربردی است. حتی کارکنان ما که با تکنولوژی آشنا نیستند به راحتی با آن کار می‌کنند." },
              { name: "علی رضایی", role: "مدیر مرکز مشاوره", text: "از وقتی ناژو رو شروع کردیم، تعداد نوبت‌های از دست رفته ما ۸۰٪ کاهش پیدا کرده. عالیه!" }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-white/90 text-base leading-relaxed">"{testimonial.text}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-bold text-white text-lg">{testimonial.name}</div>
                  <div className="text-sm text-white/80">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[3rem] blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <Card className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-100 dark:via-white dark:to-slate-50 border-0 shadow-2xl rounded-[3rem] overflow-hidden">
              <CardHeader className="relative text-center p-12 sm:p-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-slate-900/20 backdrop-blur-sm rounded-full text-white dark:text-slate-900 text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>بدون نیاز به کارت اعتباری</span>
                </div>
                <CardTitle className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white dark:text-slate-900">آماده شروع هستید؟</CardTitle>
                <CardDescription className="text-xl sm:text-2xl text-slate-300 dark:text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  همین حالا به صورت رایگان شروع کنید و تفاوت را تجربه کنید
                </CardDescription>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 text-lg h-16 px-12 shadow-2xl transform hover:scale-105 transition-all rounded-2xl font-bold" asChild>
                    <Link href="/auth/signup">
                      <Sparkles className="w-5 h-5 ml-2" />
                      شروع رایگان
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 dark:border-slate-900 dark:text-slate-900 dark:hover:bg-slate-900/10 text-lg h-16 px-12 rounded-2xl font-bold" asChild>
                    <Link href="/contact">تماس با ما</Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 dark:bg-slate-900 text-white py-16 px-4 sm:px-6 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">ناژو</span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed">سیستم نوبت‌دهی هوشمند برای کسب‌وکارهای مدرن</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-white">محصول</h3>
              <ul className="space-y-3">
                <li><Link href="#features" className="text-slate-400 hover:text-white transition-colors">امکانات</Link></li>
                <li><Link href="#pricing" className="text-slate-400 hover:text-white transition-colors">قیمت‌ها</Link></li>
                <li><Link href="/demo" className="text-slate-400 hover:text-white transition-colors">دمو</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-white">شرکت</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">درباره ما</Link></li>
                <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">بلاگ</Link></li>
                <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">تماس با ما</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-white">پشتیبانی</h3>
              <ul className="space-y-3">
                <li><Link href="/help" className="text-slate-400 hover:text-white transition-colors">راهنما</Link></li>
                <li><Link href="/docs" className="text-slate-400 hover:text-white transition-colors">مستندات</Link></li>
                <li><Link href="/support" className="text-slate-400 hover:text-white transition-colors">پشتیبانی</Link></li>
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
