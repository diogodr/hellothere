import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [textSearch, setTextSearch] = useState("");

  return (
    <SearchContext.Provider value={[textSearch, setTextSearch]}>
      {children}
    </SearchContext.Provider>
  );
};