import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Episodes | Suburban Shadows',
  description: 'All episodes of Suburban Shadows - a true crime podcast exploring dark mysteries hidden behind manicured lawns.',
}

const episodes = [
  {
    number: 2,
    slug: 'family-next-door',
    title: 'The Family Next Door',
    subtitle: 'The Chris Watts Case',
    excerpt: "A fitness-obsessed father. A pregnant wife documenting her perfect life on social media. Two little girls with gap-toothed smiles. On August 13, 2018, Chris Watts murdered them all — then went on TV pleading for their safe return.",
    duration: '10:05',
    date: 'February 2026',
  },
  {
    number: 1,
    slug: 'ballroom-bodies',
    title: 'The Ballroom Bodies',
    subtitle: 'The John List Case',
    excerpt: "A Sunday school teacher. A Boy Scout leader. A father who methodically murdered his entire family, then vanished for 18 years. The house sat lit for a month, hymns playing on repeat, while five bodies decomposed in the ballroom.",
    duration: '11:01',
    date: 'August 2025',
  }
]

export default function Episodes() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="group">
              <h1 className="font-serif text-2xl font-bold text-white tracking-tight">
                Suburban<span className="text-[#c9a227]">Shadows</span>
              </h1>
            </Link>
            <nav className="hidden md:flex gap-8 text-sm">
              <Link href="/episodes" className="text-white font-medium">Episodes</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Episodes List */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="font-serif text-4xl font-bold text-white mb-2">All Episodes</h1>
        <p className="text-gray-400 mb-12">Dark mysteries hidden behind manicured lawns.</p>

        <div className="space-y-8">
          {episodes.map((episode) => (
            <Link 
              key={episode.slug} 
              href={`/episodes/${episode.slug}`}
              className="group block bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 hover:border-[#333] transition"
            >
              <div className="flex gap-6">
                {/* Episode Number */}
                <div className="hidden md:flex flex-shrink-0 w-20 h-20 bg-[#0a0a0a] rounded-lg items-center justify-center">
                  <span className="text-[#c9a227] font-serif text-3xl font-bold">
                    {String(episode.number).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#c9a227] text-sm uppercase tracking-wider">
                      Episode {episode.number}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-500 text-sm">{episode.duration}</span>
                  </div>
                  
                  <h2 className="font-serif text-2xl font-bold text-white mb-1 group-hover:text-[#c9a227] transition">
                    {episode.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-3">{episode.subtitle}</p>
                  <p className="text-gray-500 leading-relaxed line-clamp-2">
                    {episode.excerpt}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-2 text-[#c9a227] text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    <span>Listen Now</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">More episodes coming soon.</p>
          <p className="text-gray-600 text-sm mt-2">
            Subscribe to get notified when new episodes drop.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <span className="font-serif text-lg text-white">Suburban<span className="text-[#c9a227]">Shadows</span></span>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/about" className="hover:text-white transition">About</Link>
              <Link href="/api/podcast/feed" className="hover:text-white transition">RSS Feed</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
