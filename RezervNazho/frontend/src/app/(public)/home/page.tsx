import React from 'react'
import Container from '../../components/Container'

export default function HomePage() {
  return (
    <Container>
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">رزرو نَژُو — سامانه نوبت‌گیری مدرن</h1>
          <p className="text-lg text-muted mb-8">ساده، زیبا و قابل توسعه برای کسب‌وکارهای کوچک و متوسط</p>
          <div className="flex gap-3 justify-center">
            <a className="px-6 py-3 bg-primary text-white rounded-lg">شروع کنید</a>
            <a className="px-6 py-3 border border-muted rounded-lg">بیشتر بدانید</a>
          </div>
        </div>
      </section>
    </Container>
  )
}
