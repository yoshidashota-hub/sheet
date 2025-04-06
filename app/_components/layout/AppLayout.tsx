"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useSidebar } from "@/app/feature/context/SidebarContext";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { sidebarOpen } = useSidebar();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {sidebarOpen && (
          <aside className="hidden md:block w-64 border-r bg-background">
            <ScrollArea className="h-[calc(100vh-4rem)]">
              <div className="p-4">
                <Sidebar />
              </div>
            </ScrollArea>
          </aside>
        )}
        <main className="flex-1 overflow-auto">
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <div className="container py-6 px-4 md:px-6">{children}</div>
          </ScrollArea>
        </main>
      </div>
      <Footer />
    </div>
  );
}
