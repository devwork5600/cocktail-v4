"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "L'Univers", href: "/#universe" },
  { name: "La Carte", href: "/cocktails" },
  { name: "Privatisation", href: "/#privatization" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-surface border-b border-outline-variant/20 px-6 sm:px-10 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex flex-col items-start gap-0">
            <span className="font-serif text-2xl tracking-tight text-primary">
              L&apos;Élixir Doré
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-label-caps text-on-surface-variant underline-effect"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#privatization"
              className="gold-gradient text-on-primary font-sans text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-md hover:brightness-110 transition-all shadow-lg"
            >
              Réserver
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 z-50 focus:outline-none"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="w-6 h-0.5 bg-primary block rounded-full" />
            <span className="w-6 h-0.5 bg-primary block rounded-full" />
            <span className="w-6 h-0.5 bg-primary block rounded-full" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="bg-surface border-b border-outline-variant/20 p-8 lg:hidden flex flex-col gap-8 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-headline-md text-on-surface hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#privatization"
            onClick={() => setIsMenuOpen(false)}
            className="gold-gradient text-on-primary font-sans text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-md shadow-lg w-full text-center block"
          >
            Réserver une table
          </Link>
        </div>
      )}
    </div>
  );
}
