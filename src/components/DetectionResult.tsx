import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { MODEL_CLASSES } from '../utils/modelConfig';

interface DetectionResultProps {
  predictions: number[] | null;
  error: string | null;
}

export default function DetectionResult({ predictions, error }: DetectionResultProps) {
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
        <div className="flex items-center space-x-2 text-red-700">
          <AlertCircle className="h-5 w-5" />
          <p className="font-medium">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!predictions) return null;

  const maxProbIndex = predictions.indexOf(Math.max(...predictions));
  const disease = MODEL_CLASSES[maxProbIndex];
  const confidence = (predictions[maxProbIndex] * 100).toFixed(1);

  return (
    <div className="bg-white border rounded-lg shadow-lg p-6 mt-6">
      <div className="flex items-center space-x-2 mb-4">
        <CheckCircle2 className="h-6 w-6 text-green-500" />
        <h3 className="text-xl font-semibold">Detection Results</h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-lg font-medium">Detected Disease:</p>
          <p className="text-2xl font-bold text-blue-600">{disease}</p>
        </div>

        <div>
          <p className="text-lg font-medium">Confidence:</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 rounded-full h-4"
              style={{ width: `${confidence}%` }}
            />
          </div>
          <p className="mt-1 text-sm text-gray-600">{confidence}% confident</p>
        </div>

        <div className="mt-6">
          <h4 className="font-medium mb-2">Other Possibilities:</h4>
          <div className="space-y-2">
            {predictions.map((prob, index) => {
              if (index === maxProbIndex) return null;
              return (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-700">{MODEL_CLASSES[index]}</span>
                  <span className="text-gray-500">
                    {(prob * 100).toFixed(1)}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}