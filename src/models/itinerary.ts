
export interface Passenger {
  id: number;
  name: string;
}

export interface Airport {
  code: string;
  name: string;
  city: string;
}

export interface Location {
  airport: Airport;
  terminal?: string;
  fbo?: string;
  address?: string;
  phone?: string;
}

export interface FlightLeg {
  id: number;
  legNumber: number;
  departure: {
    location: Location;
    date: string;
    time: string;
  };
  arrival: {
    location: Location;
    date: string;
    time: string;
  };
  duration: string;
  passengers: Passenger[];
}

export interface TripItinerary {
  id: string;
  passengerName: string;
  confirmationDate: string;
  aircraft: {
    tail: string;
    type: string;
  };
  emergencyContact: {
    name: string;
    phone: string;
  };
  legs: FlightLeg[];
}
