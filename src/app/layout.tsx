import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { TracingBeam } from "@/components/ui/tracing-beam";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Divyansh Sharma",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className=" sm:overflow-x-hidden">
      <div className="relative flex items-center justify-center w-full">
        <Navbar/>
        </div>
        {children}
        </div>
        </body>
        
    </html>
  );
}
