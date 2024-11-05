import React from 'react';
import { CheckCircle2, MousePointerClick } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  link: string;
  price: string;
  features: string[];
  category: string;
  image: string;
  badge?: string;
}

export default function CourseCard({
  title,
  description,
  link,
  price,
  features,
  category,
  image,
  badge
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={`${title} - Professional Copywriting Course`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        {badge && (
          <div className="absolute top-4 right-4">
            <span className="px-4 py-2 bg-yellow-400 text-blue-900 rounded-full text-sm font-bold shadow-lg">
              {badge}
            </span>
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mb-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center mb-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-blue-600">{price}</span>
            <span className="text-gray-500 ml-2">one-time</span>
          </div>
          <a
            href={link}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Enroll Now <MousePointerClick className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}