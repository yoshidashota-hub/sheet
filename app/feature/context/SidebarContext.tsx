"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface SidebarContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType>({
  sidebarOpen: true,
  setSidebarOpen: () => {},
  mobileMenuOpen: false,
  setMobileMenuOpen: () => {},
});

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={{ sidebarOpen, setSidebarOpen, mobileMenuOpen, setMobileMenuOpen }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
