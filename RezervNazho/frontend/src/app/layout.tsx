import "../../../../tailwind.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "رزرونازخو",
  description: "سامانه نوبت‌دهی آنلاین",
};

export default function RootLayout({ children }:{children:React.ReactNode}){
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased bg-background text-foreground">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
