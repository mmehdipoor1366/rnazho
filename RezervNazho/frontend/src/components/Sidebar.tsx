import Link from "next/link";

export default function Sidebar(){
  return (
    <aside className="w-64 border-r p-4 hidden lg:block">
      <nav className="flex flex-col gap-2">
        <Link href="/user/dashboard" className="px-3 py-2 rounded-md hover:bg-muted">داشبورد</Link>
        <Link href="/user/appointments" className="px-3 py-2 rounded-md hover:bg-muted">نوبت‌های من</Link>
        <Link href="/user/payments" className="px-3 py-2 rounded-md hover:bg-muted">پرداخت‌ها</Link>
        <Link href="/user/settings" className="px-3 py-2 rounded-md hover:bg-muted">تنظیمات</Link>
      </nav>
    </aside>
  )
}
