'use client'

import Link from 'next/link'

export function Navbar() {
  const links = [
    { label: 'Programs', href: '#programs' },
    { label: 'Kids ABC', href: '#kids' },
    { label: 'Nutrition', href: '#nutrition' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="relative px-4 py-2 rounded-full bg-black/30 backdrop-blur-md text-orange-400 font-semibold shadow-md hover:scale-105 transition-all duration-300"
        >
          {link.label}
          {/* small floating glow behind each pill */}
          <span className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-orange-400/20 blur-2xl pointer-events-none"></span>
          <span className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-orange-400/20 blur-2xl pointer-events-none"></span>
        </Link>
      ))}
    </nav>
  )
}
