"use client";
import { Orbitron, Exo } from "next/font/google"
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["600"],
});

const exo = Exo({
    subsets: ["latin"],
    weight: ["400"],
})

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="relative flex items-center justify-between px-6 py-5">

      {/* Logo */}
      <h2 className={`${orbitron.className} text-3xl text-white`}>
        SAPM
      </h2>

      {/* Desktop Menu */}
      <div className={`${exo.className} hidden md:flex gap-8`}>
        <Link href="/" className="hover:text-gray-300 transition">
          Home
        </Link>

        <Link href="/project" className="hover:text-gray-300 transition">
          Project
        </Link>

        <Link href="/certificates" className="hover:text-gray-300 transition">
          Certificates
        </Link>

        <Link href="/about" className="hover:text-gray-300 transition">
          About
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`
          absolute left-0 top-full w-full bg-black
          transition-all duration-300 overflow-hidden
          ${isOpen ? "max-h-80 py-5" : "max-h-0"}
        `}
      >
        <div
          className={`${exo.className} flex flex-col items-center gap-6`}
        >
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link href="/project" onClick={() => setIsOpen(false)}>
            Project
          </Link>

          <Link href="/certificates" onClick={() => setIsOpen(false)}>
            Certificates
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </div>
      </div>
    </nav>
    )
}