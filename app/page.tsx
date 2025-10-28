export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          خوش آمدید به رزرو ناژو
        </h1>
        <h2 className="text-2xl mb-2">Welcome to Rnazho</h2>
        <p className="text-gray-600 mb-8">
          سامانه رزرو وقت آنلاین
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            شروع رزرو
          </a>
          <a
            href="#"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            درباره ما
          </a>
        </div>
      </div>
    </main>
  );
}