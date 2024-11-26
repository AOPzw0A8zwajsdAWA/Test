import { SwishFormData, Transaction } from '../types';

export const processPayment = async (data: SwishFormData): Promise<Transaction> => {
  // Simulate payment processing
  await new Promise(resolve => setTimeout(resolve, 1500));

  const success = Math.random() > 0.1; // 90% success rate

  if (!success) {
    throw new Error('Betalningen misslyckades. Försök igen.');
  }

  return {
    id: Math.random().toString(36).substr(2, 9),
    recipient: data.recipient,
    phoneNumber: data.phoneNumber,
    amount: parseFloat(data.amount),
    message: data.message,
    timestamp: new Date(),
    status: 'completed'
  };
};