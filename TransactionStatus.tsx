import React from 'react';
import { Transaction } from '../types';
import { formatAmount } from '../utils/formatters';
import { format } from 'date-fns';
import { sv } from 'date-fns/locale';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

interface TransactionStatusProps {
  transaction: Transaction;
  onClose: () => void;
}

export const TransactionStatus: React.FC<TransactionStatusProps> = ({
  transaction,
  onClose,
}) => {
  const isSuccess = transaction.status === 'completed';
  
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <div className={`w-full h-full flex flex-col ${isSuccess ? 'bg-gradient-to-b from-swish-success to-swish-success-dark' : 'bg-gradient-to-b from-red-500 to-red-600'}`}>
        <div className="flex-1 flex flex-col items-center justify-center text-white p-6 text-center">
          <div className="mb-6">
            {isSuccess ? (
              <FaCheckCircle className="w-16 h-16 animate-scale-check" />
            ) : (
              <FaTimes className="w-16 h-16" />
            )}
          </div>
          
          <h2 className="text-2xl font-bold mb-2">
            {isSuccess ? 'Din betalning är skickad!' : 'Betalningen misslyckades'}
          </h2>
          
          <p className="text-4xl font-bold my-4">
            {formatAmount(transaction.amount)}
          </p>
          
          <p className="text-lg mb-2">{transaction.recipient}</p>
          
          <p className="text-sm opacity-90">
            {format(transaction.timestamp, "d MMM yyyy 'kl.' HH:mm", { locale: sv })}
          </p>

          {transaction.message && (
            <p className="mt-4 text-sm opacity-90">{transaction.message}</p>
          )}
        </div>

        <div className="p-6">
          <button
            onClick={onClose}
            className="w-full bg-white/10 text-white border-2 border-white/20 py-3 px-4 rounded-xl font-medium hover:bg-white/20 transition-colors"
          >
            Stäng
          </button>
        </div>
        
        <img 
          src="/swish-logo-white.svg" 
          alt="Swish" 
          className="h-8 mx-auto mb-8 opacity-50"
        />
      </div>
    </div>
  );
};