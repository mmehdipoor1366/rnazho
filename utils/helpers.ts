/**
 * Format date to Persian locale
 */
export const formatPersianDate = (date: Date): string => {
  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

/**
 * Format time to Persian locale
 */
export const formatPersianTime = (date: Date): string => {
  return new Intl.DateTimeFormat("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

/**
 * Validate Iranian phone number
 */
export const validateIranianPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+98|0)?9\d{9}$/;
  return phoneRegex.test(phone);
};

/**
 * Format Iranian phone number
 */
export const formatIranianPhone = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "");

  // Format as: 0912 345 6789
  if (cleaned.length === 11 && cleaned.startsWith("0")) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }

  return phone;
};

/**
 * Convert English numbers to Persian numbers
 */
export const toPersianNumber = (str: string | number): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

/**
 * Convert Persian numbers to English numbers
 */
export const toEnglishNumber = (str: string): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let result = str;
  persianDigits.forEach((digit, index) => {
    result = result.replace(new RegExp(digit, "g"), index.toString());
  });
  return result;
};
