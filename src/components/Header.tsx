"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/AuthContext";

const AuthButton = () => {
  const { user, logout } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return user ? (
    <Button onClick={logout} className="bg-red-600 hover:bg-red-700">
      Logout
    </Button>
  ) : (
    <Link href="/Login">
      <Button className="bg-blue-600 hover:bg-blue-700">Login</Button>
    </Link>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">
              Star Stitch
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/Portfolio"
              className="text-gray-700 hover:text-blue-600"
            >
              Portfolio
            </Link>
            <Link href="/Service" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/AboutUs" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link href="/Contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </nav>

          {/* Desktop Auth Button */}
          <div className="hidden md:block">
            <AuthButton />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
          <nav className="flex flex-col space-y-4 text-gray-700">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/Portfolio" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </Link>
            <Link href="/Service" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/Contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
          <AuthButton />
        </div>
      )}
    </header>
  );
}
