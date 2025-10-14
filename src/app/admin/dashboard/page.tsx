import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, DollarSign, TrendingUp, Activity, Settings } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-950 dark:to-purple-950 p-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div><h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">داشبورد مدیریت</h1><p className="text-slate-600 dark:text-slate-400">مدیریت کامل سیستم نوبت‌دهی</p></div>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600"><Settings className="w-4 h-4 ml-2" />تنظیمات</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-blue-500"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calendar className="w-5 h-5 text-blue-600" />کل نوبت‌ها</CardTitle></CardHeader><CardContent><div className="text-3xl font-bold text-blue-600 mb-1">۱,۲۳۴</div><p className="text-sm text-green-600 flex items-center gap-1"><TrendingUp className="w-3 h-3" />۱۲٪ نسبت به ماه قبل</p></CardContent></Card>
          <Card className="border-l-4 border-l-green-500"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><DollarSign className="w-5 h-5 text-green-600" />درآمد ماه</CardTitle></CardHeader><CardContent><div className="text-3xl font-bold text-green-600 mb-1">۴۵.۲M</div><p className="text-sm text-green-600 flex items-center gap-1"><TrendingUp className="w-3 h-3" />۸٪ نسبت به ماه قبل</p></CardContent></Card>
          <Card className="border-l-4 border-l-purple-500"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Users className="w-5 h-5 text-purple-600" />کاربران فعال</CardTitle></CardHeader><CardContent><div className="text-3xl font-bold text-purple-600 mb-1">۸۹۲</div><p className="text-sm text-green-600 flex items-center gap-1"><TrendingUp className="w-3 h-3" />۱۵٪ نسبت به ماه قبل</p></CardContent></Card>
          <Card className="border-l-4 border-l-orange-500"><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Activity className="w-5 h-5 text-orange-600" />نرخ حضور</CardTitle></CardHeader><CardContent><div className="text-3xl font-bold text-orange-600 mb-1">۹۴٪</div><p className="text-sm text-green-600 flex items-center gap-1"><TrendingUp className="w-3 h-3" />۳٪ نسبت به ماه قبل</p></CardContent></Card>
        </div>
      </div>
    </div>
  );
}
