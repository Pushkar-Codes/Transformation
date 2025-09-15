"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

interface LoadingContextType {
  isLoading: boolean;
}

export const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
});

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
