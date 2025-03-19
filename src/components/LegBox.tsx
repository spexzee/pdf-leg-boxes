
import React from 'react';
import { FlightLeg } from '../models/itinerary';
import { Plane } from 'lucide-react';

interface LegBoxProps {
  leg: FlightLeg;
}

const LegBox: React.FC<LegBoxProps> = ({ leg }) => {
  return (
    <div className="leg-box animate-fade-in">
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-aviation-accent text-white p-2 rounded-md">
          <Plane className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">Leg {leg.legNumber}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="min-w-8 mt-1">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-aviation-accent" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.36 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Departure: {leg.departure.date} {leg.departure.time}</p>
              <p className="font-semibold">{leg.departure.location.airport.city} ({leg.departure.location.airport.code})</p>
              <p className="text-sm">{leg.departure.location.airport.name}</p>
              <div className="mt-1 text-sm text-gray-500">
                <p>{leg.departure.location.fbo}</p>
                <p>{leg.departure.location.phone}</p>
                <p>{leg.departure.location.address}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center px-8">
            <div className="w-full flex flex-col items-center">
              <div className="border-l-2 border-dashed border-gray-300 h-10"></div>
              <div className="bg-gray-100 rounded-full px-3 py-1 text-xs font-medium">
                {leg.duration}
              </div>
              <div className="border-l-2 border-dashed border-gray-300 h-10"></div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="min-w-8 mt-1">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-aviation-accent" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Arrival: {leg.arrival.date} {leg.arrival.time}</p>
              <p className="font-semibold">{leg.arrival.location.airport.city} ({leg.arrival.location.airport.code})</p>
              <p className="text-sm">{leg.arrival.location.airport.name}</p>
              <div className="mt-1 text-sm text-gray-500">
                <p>{leg.arrival.location.fbo}</p>
                <p>{leg.arrival.location.phone}</p>
                <p>{leg.arrival.location.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t md:border-t-0 md:border-l border-gray-200 md:pl-6 pt-4 md:pt-0">
          <h4 className="font-medium mb-3">Passengers</h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {leg.passengers.map((passenger, index) => (
              <div key={passenger.id} className="text-sm">
                {index + 1}. {passenger.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegBox;
