"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

// Define the shape of the context data
interface LoadingContextType {
  isLoading: boolean;
}

// Create the context with a default value
export const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
});

// Create a Provider component
export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This is the timer that controls the loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Match this duration to your loading screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
