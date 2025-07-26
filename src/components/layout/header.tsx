"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#services", label: "Servicios" },
  { href: "/#portfolio", label: "Portafolio" },
  { href: "/#plans", label: "Planes" },
  { href: "/#contact", label: "Contacto" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/#home" className="flex items-center gap-2" onClick={closeMenu}>
          <Rocket className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold">Aftersoft</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-lg font-medium transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
           <ThemeToggle />
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div 
          className="fixed inset-x-0 top-20 z-20 bg-background/95 backdrop-blur-lg md:hidden overflow-x-hidden"
          onClick={closeMenu}
        >
          <nav className="container mx-auto flex flex-col items-center gap-4 px-4 pt-8">
            {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block w-full rounded-md py-3 text-center text-xl font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}