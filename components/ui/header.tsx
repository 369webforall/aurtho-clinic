"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Calendar, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Physicians", href: "/physicians" },
  { name: "Specialties", href: "/specialties" },
  { name: "Patient Resources", href: "/patient-resources" },
  { name: "Locations", href: "/locations" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="container-custom"
        aria-label="Main navigation"
      >
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-healthcare-trust font-bold text-xl sm:text-2xl tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
            aria-label="OrthoPedic Clinic Home"
          >
            <svg
              className="h-8 w-8 sm:h-9 sm:w-9"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 3v8l2 2L12 3ZM12 9v8l4-4-4-4ZM6 9l6-3 3 6-6 3Z" />
            </svg>
            <span>OrthoPedic Clinic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-healthcare-text hover:text-healthcare-trust hover:bg-healthcare-trust-light transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button variant="ghost" size="sm" className="gap-2 px-4 py-2.5">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>(555) 123-4567</span>
            </Button>
            <Button className="gap-2 px-6 py-2.5 animate-pulse-trust" size="sm">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>Book Appointment</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl text-healthcare-text hover:bg-healthcare-trust-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="pt-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-xl text-base font-medium text-healthcare-text hover:text-healthcare-trust hover:bg-healthcare-trust-light transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <Button variant="outline" className="w-full justify-start gap-3 px-4 py-3" size="sm">
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span>Call Us: (555) 123-4567</span>
              </Button>
              <Button className="w-full justify-start gap-3 px-4 py-3 animate-pulse-trust" size="sm">
                <Calendar className="h-5 w-5" aria-hidden="true" />
                <span>Book Appointment</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}