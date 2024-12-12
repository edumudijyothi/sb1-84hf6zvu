import React, { useState } from 'react';
import { Search, AlertCircle, ThermometerSun, Pill } from 'lucide-react';

const commonDiseases = [
  {
    name: 'Ich (White Spot Disease)',
    description: 'A parasitic infection causing white spots on fish. Common in freshwater aquariums.',
    symptoms: ['White spots on body', 'Rubbing against objects', 'Loss of appetite'],
    treatment: 'Increase water temperature and use appropriate medication.',
    prevention: 'Maintain water quality and quarantine new fish.',
    severity: 'High',
    image: 'https://images.unsplash.com/photo-1513039464749-94912b3841ce?auto=format&fit=crop&w=400'
  },
  {
    name: 'Fin Rot',
    description: 'Bacterial infection causing deterioration of fins and tail.',
    symptoms: ['Frayed fins', 'Discolored fin edges', 'Reduced swimming'],
    treatment: 'Antibacterial medication and clean water.',
    prevention: 'Regular water changes and proper filtration.',
    severity: 'Medium',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aa184?auto=format&fit=crop&w=400'
  },
  {
    name: 'Swim Bladder Disease',
    description: 'Affects fish\'s ability to control buoyancy.',
    symptoms: ['Swimming sideways', 'Floating upside down', 'Difficulty maintaining depth'],
    treatment: 'Adjust diet and consider medication.',
    prevention: 'Proper feeding practices and water quality.',
    severity: 'Medium',
    image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=400'
  },
  {
    name: 'Dropsy',
    description: 'Internal bacterial infection causing bloating.',
    symptoms: ['Swollen belly', 'Pinecone-like scales', 'Lethargy'],
    treatment: 'Antibiotics and salt baths.',
    prevention: 'Maintain good water quality and avoid overfeeding.',
    severity: 'High',
    image: 'https://images.unsplash.com/photo-1513039464749-94912b3841ce?auto=format&fit=crop&w=400'
  }
];

export default function DiseaseGuide() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDisease, setSelectedDisease] = useState<number | null>(null);

  const filteredDiseases = commonDiseases.filter(disease =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Common Fish Diseases</h2>
        <div className="mb-8">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search diseases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {filteredDiseases.map((disease, index) => (
            <div key={index} className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={disease.image}
                  alt={disease.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{disease.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    disease.severity === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {disease.severity} Risk
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{disease.description}</p>
                
                {selectedDisease === index ? (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                        Symptoms
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 ml-2">
                        {disease.symptoms.map((symptom, i) => (
                          <li key={i}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold flex items-center gap-2">
                        <Pill className="h-5 w-5 text-green-500" />
                        Treatment
                      </h4>
                      <p className="text-gray-600">{disease.treatment}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold flex items-center gap-2">
                        <ThermometerSun className="h-5 w-5 text-blue-500" />
                        Prevention
                      </h4>
                      <p className="text-gray-600">{disease.prevention}</p>
                    </div>
                    <button
                      onClick={() => setSelectedDisease(null)}
                      className="text-blue-600 font-semibold hover:text-blue-800"
                    >
                      Show Less ↑
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSelectedDisease(index)}
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Learn More ↓
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}