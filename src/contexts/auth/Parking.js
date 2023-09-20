import { createContext, useContext, useState } from "react";

export const parkingContext = createContext();

export const useParking = () => {
  return useContext(parkingContext);
};

export const ParkingContext = ({ children }) => {
  const [coordinates, setCoordinates] = useState({});
  const [location, setLocation] = useState({});
  return (
    <parkingContext.Provider
      value={{coordinates, location, setCoordinates, setLocation}}
    >
      {children}
    </parkingContext.Provider>
  );
};
