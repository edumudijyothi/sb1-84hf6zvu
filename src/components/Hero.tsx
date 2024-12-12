import React from 'react';
import { Upload, AlertCircle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-800 to-blue-600 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            AI-Powered Fish Disease Detection
          </h1>
          <p className="text-xl mb-8">
            Upload a photo of your fish and get instant disease diagnosis powered by advanced AI technology. Early detection saves fish lives.
          </p>
          <div className="space-y-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-50 transition-colors">
              <Upload className="h-5 w-5" />
              <span>Upload Fish Photo</span>
            </button>
            <p className="text-sm flex items-center space-x-2">
              <AlertCircle className="h-4 w-4" />
              <span>Supports JPG, PNG formats up to 10MB</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?auto=format&fit=crop&w=800"
          alt="Healthy tropical fish"
          className="object-cover h-full w-full rounded-l-3xl opacity-80"
        />
      </div>
    </div>
  );
}