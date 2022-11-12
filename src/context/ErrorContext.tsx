import React, { createContext, useState } from "react";

interface IErrorContext {
  error: string;
  setError: (error: string) => void;
}

export const ErrorContext = createContext<IErrorContext>({
  error: "",
  setError: () => {},
});

export const ErrorState = ({ children }: { children: React.ReactNode }) => {
  const [error, setErrorText] = useState("");

  const setError = (error: string) => setErrorText(error);
  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};
