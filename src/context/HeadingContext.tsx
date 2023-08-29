// src/MyContext.tsx
import React, { useContext, createContext, ReactNode, useReducer } from "react";

interface HeadingContextType {
  data: string;
  dispatch: any;
}

interface HeadingProviderProps {
  children: ReactNode;
}
const HeadingReducer = (state: any, action: any) => {
  switch (action.type) {
    case "HEADING_1":
      return {
        data: action.payload,
      };
    case "HEADING_2":
      return {
        data: action.payload.toUpperCase(),
      };
    case "HEADING_3":
      return {
        data: action.payload.toLowerCase(),
      };

    default:
      return state;
  }
};
const headingContext = createContext<HeadingContextType | undefined>(undefined);

const HeadingProvider: React.FC<HeadingProviderProps> = ({ children }) => {
  //   const contextValue: HeadingContextType = {
  //   };
  const [state, dispatch] = useReducer(HeadingReducer, {
    data: "Default heading using useContext!",
  });

  return (
    <headingContext.Provider value={{ ...state, dispatch }}>
      {children}
    </headingContext.Provider>
  );
};

const useHeadingContext = () => {
  const context = useContext(headingContext);
  if (!context) {
    throw new Error("useHeadingContext must be used within a MyProvider");
  }
  return context;
};

export { HeadingProvider, useHeadingContext };
