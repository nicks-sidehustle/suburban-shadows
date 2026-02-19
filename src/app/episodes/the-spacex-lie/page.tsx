import Link from 'next/link'
import { SubscribeForm } from '@/components/SubscribeForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The SpaceX Lie - Episode 7 | Suburban Shadows',
  description: 'When a college dropout spun elaborate lies about his future, his parents had no idea that their questions would lead to their deaths. This episode is currently in production.',
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
          <span className="text-gray-400">Episode 7</span>
        </div>

        {/* Episode Header */}
        <div className="mb-8">
          <p className="text-[#c9a227] text-sm uppercase tracking-[0.15em] mb-3">Episode 7 • Coming Soon</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">The SpaceX Lie</h1>
          <p className="text-xl text-gray-400">The Chandler Halderson Case</p>
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
              <p className="text-gray-400 text-sm">We're meticulously researching this complex case. Get notified the instant it's ready to stream.</p>
            </div>
          </div>
        </div>

        {/* Episode Teaser */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            To his friends, Chandler Halderson seemed to be living the dream. A college student with 
            a bright future, telling everyone about his upcoming job with SpaceX, his internship with 
            an IT company, his promising career ahead.
          </p>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            But behind the confident façade was a web of lies that grew more elaborate by the day. 
            When his parents, Bart and Krista, began asking questions about his college progress 
            and his supposed job opportunities, Chandler realized his perfect fiction was about to collapse.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            What happened next would shock the quiet community of Windsor, Wisconsin. Rather than face 
            the truth about his failures, Chandler chose a path that would destroy multiple families 
            and expose the dangerous psychology of someone who would kill to preserve a lie.
          </p>

          <div className="bg-[#111111] border-l-4 border-[#c9a227] p-6 my-8">
            <p className="text-gray-300 italic">
              "He had created this entire alternate reality where he was successful, where he was 
              somebody. When that reality was threatened, he didn't just lie his way out of it. 
              He killed his way out of it."
            </p>
            <p className="text-gray-500 text-sm mt-3">— Dane County Prosecutor</p>
          </div>

          <p className="text-gray-400 leading-relaxed">
            This is the story of how one young man's refusal to accept responsibility led to the 
            unthinkable, and how investigators pieced together a trail of digital evidence that 
            would expose every lie he'd ever told.
          </p>
        </div>

        {/* Case Preview */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Episode Preview</h2>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Perpetrator</dt>
              <dd className="text-white">Chandler Halderson, 23</dd>
            </div>
            <div>
              <dt className="text-gray-500">Victims</dt>
              <dd className="text-white">Bart Halderson (50), Krista Halderson (53)</dd>
            </div>
            <div>
              <dt className="text-gray-500">Location</dt>
              <dd className="text-white">Windsor, Wisconsin</dd>
            </div>
            <div>
              <dt className="text-gray-500">Date</dt>
              <dd className="text-white">July 1, 2021</dd>
            </div>
            <div>
              <dt className="text-gray-500">Motive</dt>
              <dd className="text-[#c9a227]">Concealing elaborate lies</dd>
            </div>
            <div>
              <dt className="text-gray-500">Status</dt>
              <dd className="text-[#c9a227]">Life sentence without parole</dd>
            </div>
          </dl>
        </div>

        {/* The Psychology */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#c9a227]/30 rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">The Psychology of Deception</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            The Halderson case offers a chilling glimpse into the mind of someone who built their entire 
            identity on fabrications. We'll explore:
          </p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• How pathological lying can escalate to violence</li>
            <li>• The role of social media in maintaining false identities</li>
            <li>• Warning signs that family and friends might have missed</li>
            <li>• The digital footprint that ultimately exposed every lie</li>
            <li>• How investigative techniques are evolving for the social media age</li>
          </ul>
        </div>

        {/* Newsletter Signup - Prominent */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#c9a227]/30 rounded-lg p-8 text-center mb-12">
          <h3 className="font-serif text-2xl font-bold text-white mb-3">Stay in the Loop</h3>
          <p className="text-gray-400 mb-6">Get the inside scoop on new episodes, case updates, and exclusive research insights delivered straight to your inbox.</p>
          <SubscribeForm source="episode-spacex-lie-coming-soon" buttonText="Alert Me When It Drops" darkMode={true} />
          <p className="text-gray-500 text-xs mt-4">Join our community of true crime enthusiasts. Unsubscribe anytime.</p>
        </div>

        {/* Browse Other Episodes */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 text-center">
          <h3 className="font-serif text-xl font-bold text-white mb-2">More Stories Await</h3>
          <p className="text-gray-400 mb-4 text-sm">Explore our archive of meticulously researched true crime cases</p>
          <Link 
            href="/episodes" 
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-medium px-6 py-2 rounded-lg hover:bg-[#d4b332] transition"
          >
            Explore All Episodes
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