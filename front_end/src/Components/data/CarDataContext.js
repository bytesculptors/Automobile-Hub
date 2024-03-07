import React, { createContext, useState } from 'react';

export const CarDataContext = createContext();

export const CarDataProvider = ({ children }) => {
  const [carData, setCarData] = useState(null);

  return (
    <CarDataContext.Provider value={{ carData, setCarData }}>
      {children}
    </CarDataContext.Provider>
  );
};
