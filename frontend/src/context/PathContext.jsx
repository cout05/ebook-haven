import React, { createContext, useState } from "react";

export const PathContext = createContext();

export const PathProvider = ({ children }) => {
  const [returnPath, setReturnPath] = useState("");

  const back = (path) => {
    setReturnPath(path);
  };

  // Fix: Provide an object with `returnPath` and `back` as keys
  return (
    <PathContext.Provider value={{ returnPath, back }}>
      {children}
    </PathContext.Provider>
  );
};

export default PathProvider;
