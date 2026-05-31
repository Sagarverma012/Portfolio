"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-black tracking-wide"
        >
          SAGAR<span className="text-red-500">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 text-sm md:flex">
          <li>
            <a
              href="#origin"
              className="transition hover:text-red-500"
            >
              Origin
            </a>
          </li>

          <li>
            <a
              href="#arsenal"
              className="transition hover:text-red-500"
            >
              Arsenal
            </a>
          </li>

          <li>
            <a
              href="#missions"
              className="transition hover:text-red-500"
            >
              Missions
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition hover:text-red-500"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-zinc-800 bg-black md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            <li>
              <a
                href="#origin"
                onClick={() => setIsOpen(false)}
              >
                Origin
              </a>
            </li>

            <li>
              <a
                href="#arsenal"
                onClick={() => setIsOpen(false)}
              >
                Arsenal
              </a>
            </li>

            <li>
              <a
                href="#missions"
                onClick={() => setIsOpen(false)}
              >
                Missions
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}