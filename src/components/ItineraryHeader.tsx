
import React from 'react';
import { TripItinerary } from '../models/itinerary';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { generatePDF } from '@/services/pdfService';

interface ItineraryHeaderProps {
  itinerary: TripItinerary;
}

const ItineraryHeader: React.FC<ItineraryHeaderProps> = ({ itinerary }) => {
  const handleDownloadPDF = async () => {
    await generatePDF('itinerary-container', `itinerary-${itinerary.id}.pdf`);
  };

  return (
    <div>
      <div className="aviation-header animate-fade-in">
        <div className="flex items-center gap-2">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 15.1046 13.1046 16 12 16Z" fill="white"/>
            <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2"/>
            <path d="M16.5 7.5L12 14L7.5 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 className="text-xl font-semibold">Aviation ACES</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            onClick={handleDownloadPDF}
            variant="outline" 
            className="no-print bg-white text-aviation-primary hover:bg-gray-100 border-none flex items-center gap-2 animate-slide-up"
          >
            <FileText className="h-4 w-4" />
            <span>Download PDF</span>
          </Button>
        </div>
      </div>
      
      <div className="itinerary-section animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold">Passenger Trip Itinerary</h2>
            <p className="text-sm text-gray-600">{itinerary.confirmationDate} - {itinerary.passengerName} CONFIRMED</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="text-gray-500 mb-1">A/C TAIL#</div>
            <div className="font-medium">{itinerary.aircraft.tail}</div>
          </div>
          <div>
            <div className="text-gray-500 mb-1">A/C Type</div>
            <div className="font-medium">{itinerary.aircraft.type}</div>
          </div>
          <div>
            <div className="text-gray-500 mb-1">Emergency contact while traveling</div>
            <div className="font-medium">{itinerary.emergencyContact.name} {itinerary.emergencyContact.phone}</div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-semibold mb-2">Luggage Guidelines:</h3>
          <p className="text-sm mb-4">1 Suitcase - Max of 26" x 18" x 12" in addition to 1 Carry on briefcase</p>
          
          <div className="font-semibold mb-1">DO NOT PACK in luggage or carry on board:</div>
          <ul className="text-sm list-disc pl-8 space-y-1">
            <li>Fireworks</li>
            <li>Flammable Liquids or Solids - Fuel, paint, solvent, torch lighters, lighter refill</li>
            <li>Household Items - Drain cleaner, insecticide, spray laundry starch</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItineraryHeader;
