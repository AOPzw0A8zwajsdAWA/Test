import { SwishFormData, ValidationResult } from '../types';

export const validatePhoneNumber = (phoneNumber: string): ValidationResult => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  if (cleaned.length !== 10) {
    return { isValid: false, error: 'Telefonnummer måste vara 10 siffror' };
  }
  return { isValid: true };
};

export const validateAmount = (amount: string): ValidationResult => {
  const numAmount = parseFloat(amount);
  if (isNaN(numAmount) || numAmount <= 0) {
    return { isValid: false, error: 'Ogiltigt belopp' };
  }
  if (numAmount > 15000) {
    return { isValid: false, error: 'Belopp kan inte överstiga 15000 kr' };
  }
  return { isValid: true };
};

export const validateForm = (data: SwishFormData): ValidationResult => {
  if (!data.recipient.trim()) {
    return { isValid: false, error: 'Mottagare krävs' };
  }

  const phoneValidation = validatePhoneNumber(data.phoneNumber);
  if (!phoneValidation.isValid) {
    return phoneValidation;
  }

  const amountValidation = validateAmount(data.amount);
  if (!amountValidation.isValid) {
    return amountValidation;
  }

  return { isValid: true };
};