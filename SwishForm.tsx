import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { SwishFormData, Transaction } from '../types';
import { validateForm } from '../utils/validation';
import { processPayment } from '../utils/payment';
import { TransactionStatus } from './TransactionStatus';
import { FaUser, FaPhone, FaMoneyBill, FaComment } from 'react-icons/fa';

interface SwishFormProps {
  onSubmit: (data: SwishFormData) => void;
}

export const SwishForm: React.FC<SwishFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<SwishFormData>({
    recipient: '',
    phoneNumber: '',
    amount: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [lastTransaction, setLastTransaction] = useState<Transaction | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateForm(formData);
    if (!validation.isValid) {
      toast.error(validation.error);
      return;
    }

    setIsLoading(true);
    try {
      const transaction = await processPayment(formData);
      setLastTransaction(transaction);
      toast.success('Betalning genomförd!');
      onSubmit(formData);
      setFormData({ recipient: '', phoneNumber: '', amount: '', message: '' });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Ett fel uppstod');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputClasses = "pl-10 w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-swish-blue bg-gray-50 transition-colors";
  const iconClasses = "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400";

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <FaUser className={iconClasses} />
          <input
            type="text"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            placeholder="Mottagare"
            className={inputClasses}
            disabled={isLoading}
          />
        </div>

        <div className="relative">
          <FaPhone className={iconClasses} />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Telefonnummer"
            className={inputClasses}
            disabled={isLoading}
          />
        </div>

        <div className="relative">
          <FaMoneyBill className={iconClasses} />
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Belopp"
            className={inputClasses}
            disabled={isLoading}
          />
        </div>

        <div className="relative">
          <FaComment className={iconClasses} />
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Meddelande (valfritt)"
            className={inputClasses}
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-swish-blue text-white py-3 px-4 rounded-xl font-medium transition-colors ${
            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'
          }`}
        >
          {isLoading ? 'Bearbetar...' : 'Swisha'}
        </button>
      </form>

      {lastTransaction && (
        <TransactionStatus
          transaction={lastTransaction}
          onClose={() => setLastTransaction(null)}
        />
      )}
    </div>
  );
};