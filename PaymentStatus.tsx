import React from 'react';
import { Transaction } from '../types';
import { format } from 'date-fns';
import { sv } from 'date-fns/locale';

interface PaymentStatusProps {
  transaction: Transaction;
}

export const PaymentStatus: React.FC<PaymentStatusProps> = ({ transaction }) => {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Betalningsdetaljer</h3>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-medium">Status:</span>{' '}
          <span className={transaction.status === 'completed' ? 'text-green-600' : 'text-red-600'}>
            {transaction.status === 'completed' ? 'Genomförd' : 'Misslyckad'}
          </span>
        </p>
        <p>
          <span className="font-medium">Mottagare:</span> {transaction.recipient}
        </p>
        <p>
          <span className="font-medium">Belopp:</span> {transaction.amount} kr
        </p>
        <p>
          <span className="font-medium">Datum:</span>{' '}
          {format(transaction.timestamp, 'PPP HH:mm', { locale: sv })}
        </p>
      </div>
    </div>
  );
};