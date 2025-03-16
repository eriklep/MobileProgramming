import React, { createContext, useState } from "react";

export const LocationContext = createContext();

export default function LocationProvider({ children }) {
  const [locations, setLocations] = useState([]); 

// Uuden sijainnin lisääminen
  const addLocation = (name, description, rating) => {
    const newLocation = { 
      id: Math.random().toString(),
      name, 
      description, 
      rating 
    };
    setLocations((prevLocations) => [...prevLocations, newLocation]); //Lisätään uusi sijainti listaan
  };

  return (
    <LocationContext.Provider value={{ locations, addLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
