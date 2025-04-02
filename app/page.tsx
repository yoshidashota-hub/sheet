"use client";

import { useState } from "react";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />

      <Footer />
    </div>
  );
}
