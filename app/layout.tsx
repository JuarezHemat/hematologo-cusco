import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Juárez - Hematólogo",
  description: "Consulta y tratamiento de enfermedades hematológicas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className + " bg-white text-gray-800"}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}