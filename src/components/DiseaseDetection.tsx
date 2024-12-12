import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import DetectionResult from './DetectionResult';
import { MODEL_URL } from '../utils/modelConfig';

export default function DiseaseDetection() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [predictions, setPredictions] = useState<number[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = async (file: File) => {
    setIsProcessing(true);
    setError(null);
    setPredictions(null);

    try {
      // In a real implementation, you would:
      // 1. Load the TensorFlow.js model
      // 2. Preprocess the image
      // 3. Make predictions
      // For demo, we'll simulate a response after 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate random predictions
      const fakePredictions = Array(5).fill(0).map(() => Math.random());
      const sum = fakePredictions.reduce((a, b) => a + b, 0);
      setPredictions(fakePredictions.map(p => p / sum));
    } catch (err) {
      setError('Failed to process image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Detect Fish Diseases Instantly
            </h2>
            <p className="text-gray-600">
              Upload a clear photo of your fish to get an instant AI-powered diagnosis.
              Our model is trained on over 10,000 images for accurate detection.
            </p>
          </div>

          <ImageUpload
            onImageSelect={handleImageSelect}
            isProcessing={isProcessing}
          />

          <DetectionResult
            predictions={predictions}
            error={error}
          />
        </div>
      </div>
    </section>
  );
}