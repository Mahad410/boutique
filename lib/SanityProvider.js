import React from 'react';
import previewClient from "@/lib/client";
import SanityContext from './SanityContext';

const SanityProvider = ({ children }) => {
  return (
    <SanityContext.Provider value={{ previewClient }}>
      {children}
    </SanityContext.Provider>
  );
};

export default SanityProvider;