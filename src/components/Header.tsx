import Link from 'next/link'

interface HeaderProps {
  currentPage?: 'home' | 'episodes' | 'cases' | 'about'
}

export function Header({ currentPage }: HeaderProps) {
  const navItems = [
    { href: '/episodes', label: 'Episodes', key: 'episodes' },
    { href: '/cases', label: 'Case Files', key: 'cases' },
    { href: '/about', label: 'About', key: 'about' },
  ]

  return (
    <header className="border-b border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="group">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
              Suburban<span className="text-[#c9a227]">Shadows</span>
            </h1>
          </Link>
          
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={
                  currentPage === item.key
                    ? 'text-white font-medium'
                    : 'text-gray-400 hover:text-white transition'
                }
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/listen"
              className="text-[#c9a227] hover:text-[#d4ad2d] transition font-medium"
            >
              Subscribe →
            </Link>
          </nav>

          {/* Mobile nav */}
          <nav className="flex md:hidden items-center gap-4 text-sm">
            <Link
              href="/episodes"
              className={currentPage === 'episodes' ? 'text-white font-medium' : 'text-gray-400'}
            >
              Episodes
            </Link>
            <Link
              href="/cases"
              className={currentPage === 'cases' ? 'text-white font-medium' : 'text-gray-400'}
            >
              Cases
            </Link>
            <Link
              href="/about"
              className={currentPage === 'about' ? 'text-white font-medium' : 'text-gray-400'}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
