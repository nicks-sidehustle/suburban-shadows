import Link from 'next/link'
import { Header } from '@/components/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Episodes | Suburban Shadows',
  description: 'All episodes of Suburban Shadows - a true crime podcast exploring dark mysteries hidden behind manicured lawns.',
}

const episodes = [
  {
    number: 5,
    slug: 'the-security-expert',
    title: 'The Security Expert',
    subtitle: 'The Chris Coleman Case',
    excerpt: "A man who made his living protecting others from danger became the very threat he was paid to eliminate. When anonymous threats began targeting his family, Chris Coleman knew exactly how to investigate them — because he was sending them himself.",
    duration: '18:01',
    date: 'February 2026',
    audioSrc: '/podcast/ep005-the-security-expert.mp3',
  },
  {
    number: 4,
    slug: 'applegate-jane-doe',
    title: 'The Applegate Jane Doe',
    subtitle: 'The Patricia Rose Cold Case',
    excerpt: "In 1980, an 18-month-old boy was found alone in a Sacramento hotel room. His mother had vanished. For 44 years, her remains lay unidentified in a Placer County case file. DNA finally gave her a name — but who killed Patricia Rose?",
    duration: '13:20',
    date: 'February 2026',
    audioSrc: '/podcast/ep004-applegate-jane-doe.mp3',
  },
  {
    number: 3,
    slug: 'love-slave-killers',
    title: 'The Love Slave Killers',
    subtitle: 'The Gallego Case',
    excerpt: "A violin prodigy and a convicted criminal terrorized Sacramento for two years, luring ten victims from shopping malls. Their final abduction at Arden Fair Mall — witnessed by a fraternity brother who memorized the license plate — brought them down.",
    duration: '15:08',
    date: 'February 2026',
    audioSrc: '/podcast/ep003-love-slave-killers.mp3',
  },
  {
    number: 2,
    slug: 'family-next-door',
    title: 'The Family Next Door',
    subtitle: 'The Chris Watts Case',
    excerpt: "A fitness-obsessed father. A pregnant wife documenting her perfect life on social media. Two little girls with gap-toothed smiles. On August 13, 2018, Chris Watts murdered them all — then went on TV pleading for their safe return.",
    duration: '10:05',
    date: 'February 2026',
    audioSrc: '/podcast/ep002-family-next-door.mp3',
  },
  {
    number: 1,
    slug: 'ballroom-bodies',
    title: 'The Ballroom Bodies',
    subtitle: 'The John List Case',
    excerpt: "A Sunday school teacher. A Boy Scout leader. A father who methodically murdered his entire family, then vanished for 18 years. The house sat lit for a month, hymns playing on repeat, while five bodies decomposed in the ballroom.",
    duration: '11:01',
    date: 'August 2025',
    audioSrc: '/podcast/ep001-ballroom-bodies.mp3',
  }
]

export default function Episodes() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header currentPage="episodes" />

      {/* Episodes List */}
      <section className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">All Episodes</h1>
        <p className="text-gray-400 mb-8 md:mb-12">Dark mysteries hidden behind manicured lawns.</p>

        <div className="space-y-6">
          {episodes.map((episode) => (
            <div 
              key={episode.slug}
              className="bg-[#111111] border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#333] transition"
            >
              {/* Main clickable area */}
              <Link 
                href={`/episodes/${episode.slug}`}
                className="block p-4 md:p-6"
              >
                <div className="flex gap-4 md:gap-6">
                  {/* Episode Number - Large visual element */}
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg flex items-center justify-center border border-[#222]">
                    <span className="text-[#c9a227] font-serif text-2xl md:text-3xl font-bold">
                      {String(episode.number).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                      <span className="text-[#c9a227] text-xs md:text-sm uppercase tracking-wider">
                        Episode {episode.number}
                      </span>
                      <span className="text-gray-600 hidden sm:inline">•</span>
                      <span className="text-gray-500 text-xs md:text-sm">{episode.duration}</span>
                      <span className="text-gray-600 hidden sm:inline">•</span>
                      <span className="text-gray-600 text-xs hidden sm:inline">{episode.date}</span>
                    </div>
                    
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#c9a227] transition">
                      {episode.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-2">{episode.subtitle}</p>
                    
                    {/* Description - always visible */}
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 md:line-clamp-2">
                      {episode.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
              
              {/* Inline Audio Player - Mobile Friendly */}
              <div className="px-4 pb-4 md:px-6 md:pb-6 pt-0">
                <div className="flex items-center gap-3 bg-[#0a0a0a] rounded-lg p-3 border border-[#1a1a1a]">
                  {/* Play indicator */}
                  <div className="flex-shrink-0 w-10 h-10 bg-[#c9a227] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  {/* Audio element */}
                  <audio 
                    controls 
                    className="flex-1 h-10"
                    src={episode.audioSrc}
                    preload="none"
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
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

      {/* Sticky Mobile Player - shows when audio is playing */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#111111] border-t border-[#1a1a1a] p-4 md:hidden hidden" id="mobile-player">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">Now Playing</p>
            <p className="text-gray-400 text-xs truncate">Episode Title</p>
          </div>
        </div>
      </div>

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
