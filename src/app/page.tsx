import Link from 'next/link'
import { SubscribeForm } from '@/components/SubscribeForm'

const episodes = [
  {
    number: 3,
    slug: 'love-slave-killers',
    title: 'The Love Slave Killers',
    subtitle: 'The Gallego Case',
    excerpt: "A violin prodigy and a convicted criminal terrorized Sacramento for two years, luring ten victims from shopping malls. Their final abduction at Arden Fair Mall — witnessed by a fraternity brother who memorized the license plate — brought them down.",
    duration: '15:08',
    date: 'February 2026',
    featured: true
  },
  {
    number: 2,
    slug: 'family-next-door',
    title: 'The Family Next Door',
    subtitle: 'The Chris Watts Case',
    excerpt: "A fitness-obsessed father. A pregnant wife documenting her perfect life on social media. Two little girls with gap-toothed smiles. On August 13, 2018, Chris Watts murdered them all — then went on TV pleading for their safe return.",
    duration: '10:05',
    date: 'February 2026',
    featured: false
  },
  {
    number: 1,
    slug: 'ballroom-bodies',
    title: 'The Ballroom Bodies',
    subtitle: 'The John List Case',
    excerpt: "A Sunday school teacher. A Boy Scout leader. A father who methodically murdered his entire family, then vanished for 18 years. The house sat lit for a month, hymns playing on repeat, while five bodies decomposed in the ballroom.",
    duration: '11:01',
    date: 'August 2025',
    featured: false
  }
]

export default function Home() {
  const latestEpisode = episodes[0]
  
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="group">
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
                Suburban<span className="text-[#c9a227]">Shadows</span>
              </h1>
            </Link>
            <nav className="hidden md:flex gap-8 text-sm">
              <Link href="/episodes" className="text-gray-400 hover:text-white transition">Episodes</Link>
              <Link href="/cases" className="text-gray-400 hover:text-white transition">Case Files</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition">About</Link>
              <Link href="/listen" className="text-[#c9a227] hover:text-[#d4ad2d] transition font-medium">Listen →</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#c9a227] text-sm uppercase tracking-[0.2em] mb-6">A True Crime Podcast</p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Dark mysteries hidden behind manicured lawns
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
            Where we explore the secrets buried in suburban America. The violence next door. The neighbors who weren't what they seemed.
          </p>
          
          {/* Play Button */}
          <Link 
            href="/episodes/ballroom-bodies" 
            className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#c9a227] transition group"
          >
            <span className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:bg-[#0a0a0a]">
              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </span>
            <span>Start Listening</span>
          </Link>
        </div>
      </section>

      {/* Latest Episode */}
      <section className="border-t border-[#1a1a1a] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-[#c9a227] rounded-full animate-pulse" />
            <span className="text-sm text-gray-500 uppercase tracking-wider">Latest Episode</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Episode Card */}
            <div className="md:col-span-2">
              <Link href={`/episodes/${latestEpisode.slug}`} className="group block">
                <div className="relative aspect-video bg-[#111111] rounded-lg overflow-hidden mb-6">
                  {/* Atmospheric gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#111111] to-[#0a0a0a]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-[#c9a227] text-8xl font-serif font-bold opacity-20 group-hover:opacity-30 transition">01</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <span>Episode {latestEpisode.number}</span>
                      <span>•</span>
                      <span>{latestEpisode.duration}</span>
                    </div>
                  </div>
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <div className="w-16 h-16 bg-[#c9a227] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#c9a227] transition">
                  {latestEpisode.title}
                </h3>
                <p className="text-[#c9a227] text-sm uppercase tracking-wider mb-4">{latestEpisode.subtitle}</p>
                <p className="text-gray-400 leading-relaxed">
                  {latestEpisode.excerpt}
                </p>
              </Link>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Listen On */}
              <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6">
                <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Listen On</h4>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                    <span className="w-8 h-8 bg-[#1a1a1a] rounded flex items-center justify-center">🎧</span>
                    <span>Apple Podcasts</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                    <span className="w-8 h-8 bg-[#1a1a1a] rounded flex items-center justify-center">🟢</span>
                    <span>Spotify</span>
                  </a>
                  <a href="/api/podcast/feed" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                    <span className="w-8 h-8 bg-[#1a1a1a] rounded flex items-center justify-center">📡</span>
                    <span>RSS Feed</span>
                  </a>
                </div>
              </div>
              
              {/* Stats */}
              <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6">
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-[#c9a227]">3</div>
                  <div className="text-sm text-gray-500 mt-1">Episodes Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-[#1a1a1a] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-6 text-center">What is Suburban Shadows?</h2>
          <div className="text-gray-400 space-y-4 text-center text-lg leading-relaxed">
            <p>
              Behind every white picket fence, there's a story. Most are ordinary. 
              Some are extraordinary. And a few are <span className="text-white">unspeakable</span>.
            </p>
            <p>
              Suburban Shadows is an investigative true crime podcast that explores the darkness hiding in 
              plain sight — the family annihilators, the cold cases, the neighbors with secrets, 
              and the communities that never saw it coming.
            </p>
            <p className="text-[#c9a227]">
              New episodes released as they're ready. Each case thoroughly researched and fact-checked.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="border-t border-[#1a1a1a] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#c9a227] text-sm uppercase tracking-[0.2em] mb-3">Coming Soon</p>
            <h2 className="font-serif text-3xl font-bold text-white">Stories We're Investigating</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Episode 4 Teaser */}
            <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 relative overflow-hidden group hover:border-[#333] transition">
              <div className="absolute top-4 right-4">
                <span className="bg-[#c9a227] text-black text-xs font-bold px-2 py-1 rounded">NEXT WEEK</span>
              </div>
              <p className="text-[#c9a227] text-sm uppercase tracking-wider mb-2">Episode 4</p>
              <h3 className="font-serif text-xl font-bold text-white mb-3">The Applegate Jane Doe</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                In 1980, an 18-month-old boy was found alone in a Sacramento hotel room. His mother 
                had vanished. Her remains wouldn't be identified for 44 years — until DNA technology 
                finally gave her a name. <span className="text-white">Who was Patricia Rose, and who killed her?</span>
              </p>
              <p className="text-gray-600 text-xs mt-4">📍 Placer County, California • 1980</p>
            </div>

            {/* Future Episode Teaser */}
            <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 relative overflow-hidden group hover:border-[#333] transition">
              <div className="absolute top-4 right-4">
                <span className="bg-[#333] text-gray-400 text-xs font-bold px-2 py-1 rounded">RESEARCHING</span>
              </div>
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Episode 5</p>
              <h3 className="font-serif text-xl font-bold text-white mb-3">The Vampire Killer of Sacramento</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Richard Chase terrorized Sacramento's East Area in 1977-78, earning his nickname 
                from his disturbing rituals. Six victims. One month of horror. 
                <span className="text-white"> The suburbs were never the same.</span>
              </p>
              <p className="text-gray-600 text-xs mt-4">📍 Sacramento, California • 1977-1978</p>
            </div>

            {/* Future Episode Teaser */}
            <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 relative overflow-hidden group hover:border-[#333] transition">
              <div className="absolute top-4 right-4">
                <span className="bg-[#333] text-gray-400 text-xs font-bold px-2 py-1 rounded">RESEARCHING</span>
              </div>
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Episode 6</p>
              <h3 className="font-serif text-xl font-bold text-white mb-3">The Girl in the Box</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Colleen Stan was hitchhiking to a friend's birthday party when Cameron Hooker 
                offered her a ride. She wouldn't escape for seven years. 
                <span className="text-white"> A Red Bluff nightmare.</span>
              </p>
              <p className="text-gray-600 text-xs mt-4">📍 Red Bluff, California • 1977-1984</p>
            </div>

            {/* Subscribe CTA */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#c9a227]/30 rounded-lg p-6 flex flex-col justify-center">
              <h3 className="font-serif text-xl font-bold text-white mb-3">Don't Miss an Episode</h3>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe now and be the first to know when new episodes drop. Get exclusive case 
                previews and behind-the-scenes research notes.
              </p>
              <Link 
                href="#newsletter" 
                className="inline-flex items-center justify-center gap-2 bg-[#c9a227] text-black px-4 py-2 rounded font-medium hover:bg-[#d4ad2d] transition text-sm"
              >
                <span>Subscribe Free</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="border-t border-[#1a1a1a] bg-[#111111]">
        <div className="max-w-xl mx-auto px-4 py-16 text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-3">Get notified when new episodes drop</h2>
          <p className="text-gray-400 mb-8">
            Plus case file updates, bonus content, and behind-the-scenes research notes.
          </p>
          <SubscribeForm source="homepage" buttonText="Subscribe" darkMode={true} />
          <p className="text-xs text-gray-600 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <span className="font-serif text-lg text-white">Suburban<span className="text-[#c9a227]">Shadows</span></span>
              <span className="text-gray-600 text-sm ml-2">A True Crime Podcast</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/about" className="hover:text-white transition">About</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
              <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            </div>
          </div>
          <div className="text-center text-xs text-gray-600 mt-6">
            © 2025-2026 Suburban Shadows • All cases are researched and fact-checked before publication
          </div>
        </div>
      </footer>
    </main>
  )
}
