import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950 p-6">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            داشبورد کاربر
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            نوبت‌های خود را مدیریت کنید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                نوبت‌های آینده
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">۳</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-600" />
                نوبت‌های گذشته
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">۱۲</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-purple-600" />
                خدمات دریافتی
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">۵</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>نوبت‌های من</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 text-slate-500">
              شما هنوز نوبتی ندارید
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600">
              دریافت نوبت جدید
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
