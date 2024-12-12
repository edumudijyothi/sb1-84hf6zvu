import React from 'react';
import { MessageSquare, Calendar, Video, Clock } from 'lucide-react';

const experts = [
  {
    name: 'Dr. Sarah Chen',
    specialty: 'Tropical Fish Diseases',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400',
    availability: 'Mon-Fri'
  },
  {
    name: 'Dr. Michael Roberts',
    specialty: 'Aquarium Health',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400',
    availability: 'Tue-Sat'
  }
];

export default function ConsultExpert() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Consult Our Experts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get professional advice from our certified aquatic veterinarians. Schedule a video consultation or chat directly with our experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-48 object-cover"
                    src={expert.image}
                    alt={expert.name}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold">{expert.name}</h3>
                  <p className="text-blue-600 mb-2">{expert.specialty}</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Available {expert.availability}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl">
            <MessageSquare className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Chat Consultation</h3>
            <p className="text-gray-600">Get quick answers through our chat platform</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <Video className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Video Call</h3>
            <p className="text-gray-600">Face-to-face consultation with experts</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <Calendar className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">Book appointments at your convenience</p>
          </div>
        </div>
      </div>
    </section>
  );
}