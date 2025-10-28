import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background/60 dark:bg-slate-900/80">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-bold">رزرونازخو</div>
            <div className="text-sm text-muted-foreground">سامانه نوبت‌دهی آنلاین</div>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm">توئیتر</Link>
            <Link href="#" className="text-sm">اینستاگرام</Link>
            <Link href="#" className="text-sm">لینکداین</Link>
          </div>
        </div>
        <div className="mt-6 text-xs text-muted-foreground">© ۲۰۲۵ رزرونازخو — تمامی حقوق محفوظ است</div>
      </div>
    </footer>
  );
}
