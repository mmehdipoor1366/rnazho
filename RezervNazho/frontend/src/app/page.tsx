import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home(){
  return (
    <div>
      <Header />
      <main className="container py-20">
        <h1 className="text-4xl font-bold">رزرو ناژو — صفحهٔ اصلی</h1>
        <p className="mt-4 text-muted-foreground">سامانهٔ نمونه برای رزرو نوبت به زبان فارسی و RTL</p>
      </main>
      <Footer />
    </div>
  )
}
