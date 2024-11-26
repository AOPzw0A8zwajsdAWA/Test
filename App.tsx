import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Tabs } from './components/Tabs';
import { SwishForm } from './components/SwishForm';
import { Footer } from './components/Footer';
import { TabType, SwishFormData } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('regular');

  const handleSwish = (data: SwishFormData) => {
    console.log('Payment processed:', data);
  };

  return (
    <div className="min-h-screen bg-swish-light-blue py-8 px-4">
      <Toaster position="top-center" />
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-swish p-6">
        <img 
          src="/swish-logo.svg" 
          alt="Swish" 
          className="h-8 mx-auto mb-6"
        />
        
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <SwishForm onSubmit={handleSwish} />
        <Footer />
      </div>
    </div>
  );
}