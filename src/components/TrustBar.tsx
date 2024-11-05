import React from 'react';
import { Award, Shield, Users, Building2 } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: <Award className="h-8 w-8" />,
      text: "Industry Accredited",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      text: "Money-Back Guarantee",
    },
    {
      icon: <Users className="h-8 w-8" />,
      text: "50,000+ Graduates",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      text: "Fortune 500 Partners",
    },
  ];

  return (
    <div className="bg-white/90 backdrop-blur-sm border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-blue-600 mb-2">{item.icon}</div>
              <span className="text-sm font-medium text-gray-600">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}