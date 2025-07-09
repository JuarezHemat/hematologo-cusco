"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/servicios", label: "Servicios" },
  { href: "/testimonios", label: "Testimonios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b shadow-md py-3 px-6 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="Logo Dr. Juárez" width={40} height={40} className="rounded-full" />
            <span className="font-semibold text-md sm:text-lg text-red-700 hidden sm:inline">Dr. Alex Juárez</span>
          </div>
        </Link>
        <ul className="flex gap-4 sm:gap-6 text-sm sm:text-base text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={clsx("hover:text-blue-600 transition-colors", pathname === link.href && "text-blue-600 font-bold")}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}