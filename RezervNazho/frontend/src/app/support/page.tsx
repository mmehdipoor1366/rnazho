import React from 'react'
import Container from '../../components/Container'

export default function SupportPage() {
  return (
    <Container>
      <div className="max-w-2xl mx-auto py-16">
        <h2 className="text-2xl font-semibold mb-4">پشتیبانی</h2>
        <p className="text-muted mb-6">اگر سوال یا مشکلی دارید از طریق فرم زیر با ما در ارتباط باشید.</p>

        <form className="space-y-4">
          <input placeholder="نام و نام خانوادگی" className="w-full p-3 border rounded" />
          <input placeholder="ایمیل" className="w-full p-3 border rounded" />
          <textarea placeholder="توضیحات" className="w-full p-3 border rounded h-40" />
          <div className="flex items-center gap-3">
            <button className="px-5 py-3 bg-primary text-white rounded">ارسال</button>
            <button type="button" className="px-5 py-3 border rounded">انصراف</button>
          </div>
        </form>
      </div>
    </Container>
  )
}
import React from 'react'
import Container from '../components/Container'

export default function SupportPage() {
  return (
    <Container>
      <div className="py-12">
        <h2 className="text-2xl font-semibold">پشتیبانی</h2>
        <p className="mt-4">برای درخواست پشتیبانی با ما تماس بگیرید یا تیکت ارسال کنید.</p>
      </div>
    </Container>
  )
}
