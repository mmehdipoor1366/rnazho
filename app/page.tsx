export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-12">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            به رزرو ناژو خوش آمدید
          </h1>
          
          <p className="text-2xl text-gray-600 mb-8">
            سامانه نوبت‌دهی و رزرو آنلاین
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="text-xl font-semibold mb-2">رزرو آسان</h3>
              <p className="text-gray-600">رزرو نوبت در چند کلیک</p>
            </div>

            <div className="p-6 bg-indigo-50 rounded-lg">
              <div className="text-4xl mb-3">⏰</div>
              <h3 className="text-xl font-semibold mb-2">مدیریت زمان</h3>
              <p className="text-gray-600">مدیریت هوشمند نوبت‌ها</p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-semibold mb-2">تجربه عالی</h3>
              <p className="text-gray-600">رابط کاربری ساده و زیبا</p>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              شروع رزرو
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              ساخته شده با Next.js 16 و TypeScript
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
