import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingDataProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState(null);

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};
