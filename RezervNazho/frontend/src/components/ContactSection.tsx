import React from "react";

export default function ContactSection(){
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-xl border p-6 bg-card">
          <h3 className="text-lg font-semibold">تماس با ما</h3>
          <p className="text-sm text-muted-foreground mt-2">برای کسب اطلاعات بیشتر می‌توانید با ما در تماس باشید.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-md bg-background">ایمیل: info@rezervnazho.ir</div>
            <div className="p-4 rounded-md bg-background">تلفن: ۰۲۱-۱۲۳۴۵۶۷</div>
          </div>
        </div>
      </div>
    </section>
  )
}
