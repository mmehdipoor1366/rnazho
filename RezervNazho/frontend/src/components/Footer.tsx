import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t bg-surface dark:bg-slate-900">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <div className="text-lg font-bold">رزرو نَژُو</div>
            <p className="text-sm text-muted">سامانه مدرن نوبت‌دهی و رزرو آنلاین</p>
          </div>

          <div className="flex gap-4">
            <a className="text-muted hover:text-primary">اینستاگرام</a>
            <a className="text-muted hover:text-primary">تلگرام</a>
            <a className="text-muted hover:text-primary">لینکدین</a>
          </div>
        </div>

        <div className="mt-6 text-sm text-center text-muted">© {new Date().getFullYear()} RezervNazho</div>
      </div>
    </footer>
  )
}
