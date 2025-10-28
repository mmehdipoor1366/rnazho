export default function UserDashboardPage(){
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">پنل کاربری</h1>
          <p className="text-sm text-muted-foreground">نوبت‌های آینده و اعلان‌ها</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg p-4 bg-card shadow">نوبت‌های امروز</div>
        <div className="rounded-lg p-4 bg-card shadow">پیام‌ها</div>
        <div className="rounded-lg p-4 bg-card shadow">اعلان‌ها</div>
      </div>
    </div>
  )
}
