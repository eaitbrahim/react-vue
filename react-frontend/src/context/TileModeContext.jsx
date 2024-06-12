import React, { createContext, useContext, useState } from 'react';

const TileModeContext = createContext();

export const useTileMode = () => useContext(TileModeContext);

export const TileModeProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleMode = () => {
    setExpanded(!expanded);
  };

  return (
    <TileModeContext.Provider value={{ expanded, toggleMode }}>
      {children}
    </TileModeContext.Provider>
  );
};