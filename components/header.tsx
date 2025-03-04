"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CircleDot, Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600">
              <CircleDot className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold">Finance</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-indigo-600">
            Home
          </Link>
          <Link href="#features" className="text-sm font-medium transition-colors hover:text-indigo-600">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-indigo-600">
            About
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-indigo-600">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-indigo-600">
            Blog
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-sm font-medium transition-colors hover:text-indigo-600">
            Login
          </Link>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full" asChild>
            <Link href="#cta">Free 14 days trial</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center rounded-md p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full" asChild>
                <Link href="#cta" onClick={() => setIsMenuOpen(false)}>
                  Free 14 days trial
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

