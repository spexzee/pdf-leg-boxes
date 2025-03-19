
import React from 'react';
import { TripItinerary } from '../models/itinerary';
import LegBox from './LegBox';
import ItineraryHeader from './ItineraryHeader';

interface ItineraryProps {
  itinerary: TripItinerary;
}

const Itinerary: React.FC<ItineraryProps> = ({ itinerary }) => {
  return (
    <div id="itinerary-container" className="max-w-6xl mx-auto bg-white shadow-lg mb-10">
      <ItineraryHeader itinerary={itinerary} />
      
      <div className="p-6">
        {itinerary.legs.map((leg) => (
          <LegBox key={leg.id} leg={leg} />
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
