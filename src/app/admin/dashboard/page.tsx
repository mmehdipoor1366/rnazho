import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, DollarSign, TrendingUp, Activity, Clock, BarChart3, Settings } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-950 dark:to-purple-950 p-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              داشبورد مدیریت
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              مدیریت کامل سیستم نوبت‌دهی
            </p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
            <Settings className="w-4 h-4 ml-2" />
            تنظیمات
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
                کل نوبت‌ها
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-1">۱,۲۳۴</div>
              <p className="text-sm text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                ۱۲٪ نسبت به ماه قبل
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <DollarSign className="w-5 h-5 text-green-600" />
                درآمد ماه
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 mb-1">۴۵.۲M</div>
              <p className="text-sm text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                ۸٪ نسبت به ماه قبل
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5 text-purple-600" />
                کاربران فعال
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600 mb-1">۸۹۲</div>
              <p className="text-sm text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                ۱۵٪ نسبت به ماه قبل
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Activity className="w-5 h-5 text-orange-600" />
                نرخ حضور
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600 mb-1">۹۴٪</div>
              <p className="text-sm text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                ۳٪ نسبت به ماه قبل
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                نمودار نوبت‌ها
              </CardTitle>
              <CardDescription>آمار نوبت‌های ۳۰ روز اخیر</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="text-center text-slate-500">
                  <BarChart3 className="w-16 h-16 mx-auto mb-2 opacity-20" />
                  <p>نمودار آماری در اینجا نمایش داده می‌شود</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                فعالیت‌های اخیر
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium">نوبت جدید ایجاد شد</div>
                    <div className="text-xs text-slate-500">۵ دقیقه پیش</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium">کاربر جدید ثبت نام کرد</div>
                    <div className="text-xs text-slate-500">۱۵ دقیقه پیش</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium">نوبت تکمیل شد</div>
                    <div className="text-xs text-slate-500">۳۰ دقیقه پیش</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium">نوبت لغو شد</div>
                    <div className="text-xs text-slate-500">۱ ساعت پیش</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium">پرداخت دریافت شد</div>
                    <div className="text-xs text-slate-500">۲ ساعت پیش</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>محبوب‌ترین خدمات</CardTitle>
              <CardDescription>بر اساس تعداد نوبت‌ها</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">کوتاهی مو</div>
                    <div className="text-sm text-slate-500">۳۴۵ نوبت</div>
                  </div>
                  <div className="w-24 bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">رنگ مو</div>
                    <div className="text-sm text-slate-500">۲۸۷ نوبت</div>
                  </div>
                  <div className="w-24 bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">اصلاح صورت</div>
                    <div className="text-sm text-slate-500">۱۹۲ نوبت</div>
                  </div>
                  <div className="w-24 bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '55%'}}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>کارکنان برتر</CardTitle>
              <CardDescription>بر اساس تعداد نوبت‌های انجام شده</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">۱</div>
                  <div className="flex-1">
                    <div className="font-medium">علی رضایی</div>
                    <div className="text-sm text-slate-500">۱۵۶ نوبت</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">۲</div>
                  <div className="flex-1">
                    <div className="font-medium">سارا احمدی</div>
                    <div className="text-sm text-slate-500">۱۴۲ نوبت</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">۳</div>
                  <div className="flex-1">
                    <div className="font-medium">محمد کریمی</div>
                    <div className="text-sm text-slate-500">۱۲۸ نوبت</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
