"use client";

import { PlayerContextProvider } from ".";

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PlayerContextProvider>
        {children}
    </PlayerContextProvider>
  );
};