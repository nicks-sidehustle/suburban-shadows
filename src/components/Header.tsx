'use client'

import Link from 'next/link'
import { useState } from 'react'

interface HeaderProps {
  currentPage?: 'home' | 'episodes' | 'about' | 'listen'
}

export function Header({ currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/episodes', label: 'Episodes', key: 'episodes' },
    { href: '/about', label: 'About', key: 'about' },
    { href: '/listen', label: 'Subscribe', key: 'listen', highlight: true },
  ]

  return (
    <header className="border-b border-[#1a1a1a] relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="group">
            <img 
              src="/logo.png" 
              alt="Suburban Shadows" 
              className="h-14 sm:h-16 md:h-20 w-auto"
            />
          </Link>
          
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={
                  item.highlight
                    ? 'text-[#c9a227] hover:text-[#d4ad2d] transition font-medium'
                    : currentPage === item.key
                    ? 'text-white font-medium'
                    : 'text-gray-400 hover:text-white transition'
                }
              >
                {item.label}{item.highlight ? ' →' : ''}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-[#1a1a1a] z-50">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={
                  item.highlight
                    ? 'text-[#c9a227] font-medium text-lg'
                    : currentPage === item.key
                    ? 'text-white font-medium text-lg'
                    : 'text-gray-400 hover:text-white transition text-lg'
                }
              >
                {item.label}{item.highlight ? ' →' : ''}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
