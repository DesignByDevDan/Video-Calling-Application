import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront'; // Material Icon

import "@stream-io/video-react-sdk/dist/css/styles.css";
import 'react-datepicker/dist/react-datepicker.css'

import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexCall",
  description: "Video calling app",
  icons: {
    icon: '/icons/logo.svg'  // Replace with a new icon path or remove if unnecessary
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/icons/logo.svg",  // Ensure this is the new logo if you need one
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1c1f2e",
            colorInputBackground: "#252a41",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          <header className="flex items-center p-4 bg-dark-1">
            {/* Use Material UI Video Camera Icon instead */}
            <VideoCameraFrontIcon style={{ fontSize: 50 }} className="text-blue-500" />
            <span className="ml-2 text-white font-bold">NexCall</span> {/* Update text if needed */}
          </header>

          {children}
          
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
