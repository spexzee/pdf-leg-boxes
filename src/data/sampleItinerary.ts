
import { TripItinerary } from "../models/itinerary";

export const sampleItinerary: TripItinerary = {
  id: "IT12345",
  passengerName: "SHANKS, PATRICK",
  confirmationDate: "05/26/24",
  aircraft: {
    tail: "N986BL",
    type: "LR-45",
  },
  emergencyContact: {
    name: "Walmart Emergency Operations Center (EOC)",
    phone: "1.479.277.1001",
  },
  legs: [
    {
      id: 1,
      legNumber: 1,
      departure: {
        location: {
          airport: {
            code: "ROG",
            name: "Rogers Executive-Carter Field",
            city: "Rogers, AK",
          },
          fbo: "WM Aviation Lobby",
          phone: "479-366-3562",
          address: "#5 HAMMERSCHMIDT, ROGERS",
        },
        date: "Sunday-10/03/2025",
        time: "06:30 AM",
      },
      arrival: {
        location: {
          airport: {
            code: "ODO",
            name: "Odessa-Schlemeyer Field",
            city: "Odessa, TX",
          },
          fbo: "Texas Aero",
          phone: "432-367-5881",
          address: "200 E TERMINAL DR, ODESSA",
        },
        date: "Sunday-10/03/2025",
        time: "08:30 AM",
      },
      duration: "2 Hour",
      passengers: [
        { id: 1, name: "BLUMA, ANGELA" },
        { id: 2, name: "CHAPKO, MATTHEW" },
        { id: 3, name: "OUMA, EVERLINE W" },
        { id: 4, name: "SHANKS, PATRICK" },
        { id: 5, name: "VU, NANCY" },
        { id: 6, name: "Mathew" },
        { id: 7, name: "Arun Nair" },
        { id: 8, name: "Varun Govind" },
        { id: 9, name: "Thankan P" },
        { id: 10, name: "Eeyob Job" },
      ],
    },
    {
      id: 2,
      legNumber: 2,
      departure: {
        location: {
          airport: {
            code: "ROG",
            name: "Rogers Executive-Carter Field",
            city: "Rogers, AK",
          },
          fbo: "WM Aviation Lobby",
          phone: "479-366-3562",
          address: "#5 HAMMERSCHMIDT, ROGERS",
        },
        date: "Sunday-10/03/2025",
        time: "06:30 AM",
      },
      arrival: {
        location: {
          airport: {
            code: "ODO",
            name: "Odessa-Schlemeyer Field",
            city: "Odessa, TX",
          },
          fbo: "Texas Aero",
          phone: "432-367-5881",
          address: "200 E TERMINAL DR, ODESSA",
        },
        date: "Sunday-10/03/2025",
        time: "08:30 AM",
      },
      duration: "2 Hour",
      passengers: [
        { id: 1, name: "BLUMA, ANGELA" },
        { id: 2, name: "CHAPKO, MATTHEW" },
        { id: 3, name: "OUMA, EVERLINE W" },
        { id: 4, name: "SHANKS, PATRICK" },
        { id: 5, name: "VU, NANCY" },
        { id: 6, name: "Mathew" },
        { id: 7, name: "Arun Nair" },
        { id: 8, name: "Varun Govind" },
        { id: 9, name: "Thankan P" },
        { id: 10, name: "Eeyob Job" },
      ],
    },
    {
      id: 3,
      legNumber: 3,
      departure: {
        location: {
          airport: {
            code: "ROG",
            name: "Rogers Executive-Carter Field",
            city: "Rogers, AK",
          },
          fbo: "WM Aviation Lobby",
          phone: "479-366-3562",
          address: "#5 HAMMERSCHMIDT, ROGERS",
        },
        date: "Sunday-10/03/2025",
        time: "06:30 AM",
      },
      arrival: {
        location: {
          airport: {
            code: "ODO",
            name: "Odessa-Schlemeyer Field",
            city: "Odessa, TX",
          },
          fbo: "Texas Aero",
          phone: "432-367-5881",
          address: "200 E TERMINAL DR, ODESSA",
        },
        date: "Sunday-10/03/2025",
        time: "08:30 AM",
      },
      duration: "2 Hour",
      passengers: [
        { id: 1, name: "BLUMA, ANGELA" },
        { id: 2, name: "CHAPKO, MATTHEW" },
        { id: 3, name: "OUMA, EVERLINE W" },
        { id: 4, name: "SHANKS, PATRICK" },
        { id: 5, name: "VU, NANCY" },
        { id: 6, name: "Mathew" },
        { id: 7, name: "Arun Nair" },
        { id: 8, name: "Varun Govind" },
        { id: 9, name: "Thankan P" },
        { id: 10, name: "Eeyob Job" },
      ],
    },
    {
      id: 4,
      legNumber: 4,
      departure: {
        location: {
          airport: {
            code: "ROG",
            name: "Rogers Executive-Carter Field",
            city: "Rogers, AK",
          },
          fbo: "WM Aviation Lobby",
          phone: "479-366-3562",
          address: "#5 HAMMERSCHMIDT, ROGERS",
        },
        date: "Sunday-10/03/2025",
        time: "06:30 AM",
      },
      arrival: {
        location: {
          airport: {
            code: "ODO",
            name: "Odessa-Schlemeyer Field",
            city: "Odessa, TX",
          },
          fbo: "Texas Aero",
          phone: "432-367-5881",
          address: "200 E TERMINAL DR, ODESSA",
        },
        date: "Sunday-10/03/2025",
        time: "08:30 AM",
      },
      duration: "2 Hour",
      passengers: [
        { id: 1, name: "BLUMA, ANGELA" },
        { id: 2, name: "CHAPKO, MATTHEW" },
        { id: 3, name: "OUMA, EVERLINE W" },
        { id: 4, name: "SHANKS, PATRICK" },
        { id: 5, name: "VU, NANCY" },
        { id: 6, name: "Mathew" },
        { id: 7, name: "Arun Nair" },
        { id: 8, name: "Varun Govind" },
        { id: 9, name: "Thankan P" },
        { id: 10, name: "Eeyob Job" },
      ],
    },
    {
      id: 5,
      legNumber: 5,
      departure: {
        location: {
          airport: {
            code: "ROG",
            name: "Rogers Executive-Carter Field",
            city: "Rogers, AK",
          },
          fbo: "WM Aviation Lobby",
          phone: "479-366-3562",
          address: "#5 HAMMERSCHMIDT, ROGERS",
        },
        date: "Sunday-10/03/2025",
        time: "06:30 AM",
      },
      arrival: {
        location: {
          airport: {
            code: "ODO",
            name: "Odessa-Schlemeyer Field",
            city: "Odessa, TX",
          },
          fbo: "Texas Aero",
          phone: "432-367-5881",
          address: "200 E TERMINAL DR, ODESSA",
        },
        date: "Sunday-10/03/2025",
        time: "08:30 AM",
      },
      duration: "2 Hour",
      passengers: [
        { id: 1, name: "BLUMA, ANGELA" },
        { id: 2, name: "CHAPKO, MATTHEW" },
        { id: 3, name: "OUMA, EVERLINE W" },
        { id: 4, name: "SHANKS, PATRICK" },
        { id: 5, name: "VU, NANCY" },
        { id: 6, name: "Mathew" },
        { id: 7, name: "Arun Nair" },
        { id: 8, name: "Varun Govind" },
        { id: 9, name: "Thankan P" },
        { id: 10, name: "Eeyob Job" },
      ],
    },
  ],
};
