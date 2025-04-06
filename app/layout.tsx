import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider } from "./feature/context/SidebarContext";
import { AppLayout } from "./_components/layout/AppLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppLayout>{children}</AppLayout>
        </SidebarProvider>
      </body>
    </html>
  );
}
