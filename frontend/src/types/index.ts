export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  userId: string;
}

export interface Expense {
  id: string;
  amount: number;
  date: string;
  categoryId: string;
  category?: Category;
  description?: string;
  type: 'one-time' | 'recurring';
  startDate?: string;
  endDate?: string;
  receiptId?: string;
  userId: string;
}

export interface Income {
  id: string;
  amount: number;
  date: string;
  source?: string;
  description?: string;
  userId: string;
}

export interface Summary {
  totalExpenses: number;
  totalIncome: number;
  balance: number;
  expensesByCategory: Record<string, number>;
  period: {
    start: string;
    end: string;
  };
}

export interface Alert {
  id: string;
  type: 'budget_overrun' | 'low_balance';
  message: string;
  severity: 'low' | 'medium' | 'high';
  createdAt: string;
}