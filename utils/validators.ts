/**
 * Validate email address
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate Iranian phone number
 */
export const isValidIranianPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+98|0)?9\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Validate Iranian national code
 */
export const isValidNationalCode = (code: string): boolean => {
  if (!/^\d{10}$/.test(code)) return false;

  const check = parseInt(code[9]);
  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(code[i]) * (10 - i);
  }

  const remainder = sum % 11;
  return (
    (remainder < 2 && check === remainder) ||
    (remainder >= 2 && check === 11 - remainder)
  );
};

/**
 * Validate password strength
 */
export const isStrongPassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
};