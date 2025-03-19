
import React from 'react';
import Itinerary from '@/components/Itinerary';
import { sampleItinerary } from '@/data/sampleItinerary';

const Index = () => {
  return (
    <div className="min-h-screen bg-aviation-gray py-6 px-4 animate-fade-in">
      <Itinerary itinerary={sampleItinerary} />
      
      <div className="max-w-6xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-sm no-print">
        <h2 className="text-xl font-semibold mb-4">PDF Download Instructions</h2>
        <div className="space-y-3 text-gray-700">
          <p>Click the "Download PDF" button in the top right corner to generate a PDF of this itinerary.</p>
          <p><strong>Key Feature:</strong> Each leg box will be kept intact and not split across pages in the PDF.</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>If a page can fit 3 leg boxes, the 4th box will automatically start on a new page</li>
            <li>Leg boxes will never be broken across multiple pages</li>
            <li>The PDF maintains the same layout and design as this web view</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
