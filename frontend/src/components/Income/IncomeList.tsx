import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Calendar, TrendingUp } from 'lucide-react';
import { Income } from '../../types';

const IncomeList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const incomes: Income[] = [
    {
      id: '1',
      amount: 4200.00,
      date: '2024-01-15',
      source: 'Tech Corp',
      description: 'Monthly salary',
      userId: '1',
    },
    {
      id: '2',
      amount: 850.00,
      date: '2024-01-10',
      source: 'Freelance Project',
      description: 'Website development for client',
      userId: '1',
    },
    {
      id: '3',
      amount: 125.50,
      date: '2024-01-08',
      source: 'Investment Returns',
      description: 'Dividend payments',
      userId: '1',
    },
  ];

  const filteredIncomes = incomes.filter(income => 
    income.source?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    income.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalIncome = filteredIncomes.reduce((sum, income) => sum + income.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Income</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Income</span>
        </button>
      </div>

      {/* Summary Card */}
      <div className="bg-linear-to-r from-green-500 to-green-600 rounded-xl shadow-xs p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium opacity-90">Total Income</h3>
            <p className="text-3xl font-bold">${totalIncome.toFixed(2)}</p>
            <p className="text-sm opacity-80 mt-1">This month</p>
          </div>
          <div className="p-3 bg-white bg-opacity-20 rounded-full">
            <TrendingUp className="h-8 w-8" />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search income sources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Income List */}
      <div className="bg-white rounded-xl shadow-xs border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            {filteredIncomes.length} Income Entries
          </h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {filteredIncomes.map((income) => (
            <div key={income.id} className="p-6 hover:bg-gray-50 transition-colors duration-150">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {income.source || 'Untitled Income'}
                    </h4>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{income.date}</span>
                    </div>
                  </div>
                  
                  {income.description && (
                    <p className="text-sm text-gray-600">{income.description}</p>
                  )}
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">
                      +${income.amount.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncomeList;