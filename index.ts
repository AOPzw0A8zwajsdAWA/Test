export type TabType = 'regular' | 'business';

export interface SwishFormData {
  recipient: string;
  phoneNumber: string;
  amount: string;
  message?: string;
}

export interface Transaction {
  id: string;
  recipient: string;
  phoneNumber: string;
  amount: number;
  message?: string;
  timestamp: Date;
  status: 'pending' | 'completed' | 'failed';
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}