import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">رزرو ناژو</h3>
            <p className="text-gray-300">
              سامانه رزرو وقت آنلاین برای مشاغل و مراکز خدماتی
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">لینک‌های مفید</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  راهنمای استفاده
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  قوانین و مقررات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  حریم خصوصی
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">تماس با ما</h4>
            <p className="text-gray-300">
              ایمیل: info@rnazho.com
              <br />
              تلفن: 021-12345678
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {currentYear} رزرو ناژو. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};