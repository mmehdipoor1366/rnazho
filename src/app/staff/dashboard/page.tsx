import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";

export default function StaffDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-950 dark:to-green-950 p-6">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">داشبورد کارکنان</h1>
          <p className="text-slate-600 dark:text-slate-400">مدیریت نوبت‌ها و برنامه کاری</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Calendar className="w-5 h-5 text-blue-600" />امروز</CardTitle></CardHeader><CardContent><div className="text-3xl font-bold text-blue-600">۸</div><p className="text-sm text-slate-500">نوبت</p></CardContent></Card>
          <Card><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Clock className="w-5 h-5 text-orange-600" />در انتظار</CardTitle></CardHeader><CardContent><div className="text-3xl font-bold text-orange-600">۳</div><p className="text-sm text-slate-500">نوبت</p></CardContent></Card>
          <Card><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><CheckCircle className="w-5 h-5 text-green-600" />انجام شده</CardTitle></CardHeader><CardContent><div className="text-3xl font-bold text-green-600">۵</div><p className="text-sm text-slate-500">نوبت</p></CardContent></Card>
          <Card><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Users className="w-5 h-5 text-purple-600" />مشتریان</CardTitle></CardHeader><CardContent><div className="text-3xl font-bold text-purple-600">۲۴</div><p className="text-sm text-slate-500">کل</p></CardContent></Card>
        </div>
        <Card>
          <CardHeader><CardTitle>نوبت‌های امروز</CardTitle><CardDescription>لیست نوبت‌های امروز شما</CardDescription></CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div><div className="font-semibold">علی رضایی</div><div className="text-sm text-slate-500">کوتاهی مو</div></div>
                <div className="text-left"><div className="font-semibold">۱۰:۰۰</div><Button size="sm" className="mt-2">شروع</Button></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
