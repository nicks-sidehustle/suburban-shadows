import Link from 'next/link'
import { SubscribeForm } from '@/components/SubscribeForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Thanksgiving Murders - Episode 6 | Suburban Shadows',
  description: 'When parents asked their adult son to help with finances, they never imagined their generosity would cost them their lives. This episode is currently in production.',
}

export default function Episode() {
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
              <Link href="/episodes" className="text-gray-400 hover:text-white transition">Episodes</Link>
              <Link href="/cases" className="text-gray-400 hover:text-white transition">Case Files</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Episode Content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/episodes" className="hover:text-white transition">Episodes</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Episode 6</span>
        </div>

        {/* Episode Header */}
        <div className="mb-8">
          <p className="text-[#c9a227] text-sm uppercase tracking-[0.15em] mb-3">Episode 6 • Coming Soon</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">The Thanksgiving Murders</h1>
          <p className="text-xl text-gray-400">The Joel Guy Jr. Case</p>
        </div>

        {/* Coming Soon Status */}
        <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 border border-[#c9a227]/30 rounded-lg p-6 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-1">This Episode Is Currently In Production</h3>
              <p className="text-gray-400 text-sm">Our team is carefully researching and crafting this story. Subscribe below to be notified the moment it drops.</p>
            </div>
          </div>
        </div>

        {/* Episode Teaser */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Thanksgiving 2016. A time for family, gratitude, and coming together around the dinner table. 
            For Joel and Lisa Guy, it should have been a celebration with their adult children.
          </p>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            Instead, their generosity toward their troubled son would become the motive for one of the 
            most shocking family murders in Tennessee history. When parents tried to help their 
            28-year-old child get back on his feet, they never imagined their kindness would cost them everything.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            This is the story of Joel Guy Jr., a man whose sense of entitlement and rage would drive 
            him to commit acts so horrific that even seasoned investigators struggled to comprehend them. 
            A case that reveals how financial dependency can become a deadly trap, and how the people 
            closest to us can be the most dangerous of all.
          </p>

          <div className="bg-[#111111] border-l-4 border-[#c9a227] p-6 my-8">
            <p className="text-gray-300 italic">
              "The level of violence in this case was unlike anything we had seen. The planning, 
              the brutality, the complete lack of remorse... it's the kind of case that stays 
              with you forever."
            </p>
            <p className="text-gray-500 text-sm mt-3">— Knox County Detective</p>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Coming soon to Suburban Shadows: The untold details of a Thanksgiving that became a nightmare, 
            and the investigation that revealed just how far a son would go when his parents threatened 
            to cut him off.
          </p>
        </div>

        {/* Case Preview */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Episode Preview</h2>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Perpetrator</dt>
              <dd className="text-white">Joel Guy Jr., 28</dd>
            </div>
            <div>
              <dt className="text-gray-500">Victims</dt>
              <dd className="text-white">Joel Guy Sr. (61), Lisa Guy (55)</dd>
            </div>
            <div>
              <dt className="text-gray-500">Location</dt>
              <dd className="text-white">Knoxville, Tennessee</dd>
            </div>
            <div>
              <dt className="text-gray-500">Date</dt>
              <dd className="text-white">November 26, 2016</dd>
            </div>
            <div>
              <dt className="text-gray-500">Motive</dt>
              <dd className="text-[#c9a227]">Financial dependency, rage</dd>
            </div>
            <div>
              <dt className="text-gray-500">Status</dt>
              <dd className="text-[#c9a227]">Life sentence without parole</dd>
            </div>
          </dl>
        </div>

        {/* Newsletter Signup - Prominent */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#c9a227]/30 rounded-lg p-8 text-center mb-12">
          <h3 className="font-serif text-2xl font-bold text-white mb-3">Be First to Know</h3>
          <p className="text-gray-400 mb-6">Get notified the moment this episode drops, plus exclusive case research and behind-the-scenes insights.</p>
          <SubscribeForm source="episode-thanksgiving-murders-coming-soon" buttonText="Notify Me When It Drops" darkMode={true} />
          <p className="text-gray-500 text-xs mt-4">No spam. Just true crime stories worth your time.</p>
        </div>

        {/* Browse Other Episodes */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 text-center">
          <h3 className="font-serif text-xl font-bold text-white mb-2">While You Wait</h3>
          <p className="text-gray-400 mb-4 text-sm">Catch up on our previous episodes and case investigations</p>
          <Link 
            href="/episodes" 
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-medium px-6 py-2 rounded-lg hover:bg-[#d4b332] transition"
          >
            Browse All Episodes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <span className="font-serif text-lg text-white">Suburban<span className="text-[#c9a227]">Shadows</span></span>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/about" className="hover:text-white transition">About</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
              <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}