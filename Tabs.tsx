import React from 'react';
import { TabType } from '../types';
import { clsx } from 'clsx';

interface TabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex bg-gray-100 p-1 rounded-xl">
      <button
        onClick={() => onTabChange('regular')}
        className={clsx(
          'flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors',
          activeTab === 'regular'
            ? 'bg-white text-swish-blue shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        )}
      >
        Vanlig
      </button>
      <button
        onClick={() => onTabChange('business')}
        className={clsx(
          'flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors',
          activeTab === 'business'
            ? 'bg-white text-swish-blue shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        )}
      >
        Företag
      </button>
    </div>
  );
};