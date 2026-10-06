/**
 * Frontend Utilities for Naveen Home Tuitions
 * 100% Frontend-Only — Absolutely No Storage / No Database
 * 
 * Forms validate inputs and directly generate WhatsApp links to +91 95052 03418.
 */

/**
 * Validates 10-digit Indian Mobile Numbers.
 * Supports: 9876543210, +91 9876543210, 09876543210.
 */
export function validateIndianMobile(phone: string): { isValid: boolean; cleaned: string; error?: string } {
  const digitsOnly = phone.replace(/[\s\-\(\)\+]/g, '');
  let standard10 = digitsOnly;

  if (digitsOnly.startsWith('91') && digitsOnly.length === 12) {
    standard10 = digitsOnly.slice(2);
  } else if (digitsOnly.startsWith('0') && digitsOnly.length === 11) {
    standard10 = digitsOnly.slice(1);
  }

  if (standard10.length === 0) {
    return { isValid: false, cleaned: '', error: 'Mobile number is required' };
  }

  if (!/^[6-9]\d{9}$/.test(standard10)) {
    return {
      isValid: false,
      cleaned: standard10,
      error: 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210)',
    };
  }

  return { isValid: true, cleaned: standard10 };
}
