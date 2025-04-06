"use client";

import { BookOpen, Menu, PanelLeft, Search } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "./sidebar/Sidebar";
import { useSidebar } from "@/app/feature/context/SidebarContext";

export function Header() {
  const { sidebarOpen, setSidebarOpen, mobileMenuOpen, setMobileMenuOpen } =
    useSidebar();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <PanelLeft
                className={`h-5 w-5 transition-transform ${
                  !sidebarOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="text-xl hidden sm:inline-block">YS Coder</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <div className="w-full max-w-[500px] relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="記事を検索..."
                className="w-full pl-8 bg-muted/50 border-none"
              />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Search className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader className="mb-4">
                  <SheetTitle>記事を検索</SheetTitle>
                  <SheetDescription>
                    キーワードやタグで記事を検索できます
                  </SheetDescription>
                </SheetHeader>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="記事を検索..."
                    className="w-full pl-8"
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* モバイルメニュー */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[280px] p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>モバイルメニュー</SheetTitle>
          </SheetHeader>
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="font-semibold">YS Coder</span>
            </div>
            <div className="rounded-sm overflow-hidden">
              <SheetClose className="h-8 w-8 flex items-center justify-center focus:outline-none"></SheetClose>
            </div>
          </div>
          <ScrollArea className="h-[calc(100vh-65px)]">
            <div className="p-4">
              <Sidebar />
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}
