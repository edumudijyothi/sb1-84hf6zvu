import React from 'react';
import { Brain, Clock, Database, Shield } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-blue-500" />,
    title: 'Advanced AI Detection',
    description: 'Utilizes state-of-the-art machine learning models for accurate disease detection'
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-500" />,
    title: 'Instant Results',
    description: 'Get disease diagnosis and treatment recommendations in seconds'
  },
  {
    icon: <Database className="h-8 w-8 text-blue-500" />,
    title: 'Comprehensive Database',
    description: 'Access information about 100+ common fish diseases and treatments'
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: 'Expert Verified',
    description: 'All diagnoses are verified by professional aquatic veterinarians'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose AquaHealth AI?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}