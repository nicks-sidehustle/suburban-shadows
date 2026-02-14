import Link from 'next/link'
import { SubscribeForm } from '@/components/SubscribeForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Love Slave Killers - Episode 3 | Suburban Shadows',
  description: 'The Gallego Case: A violin prodigy and convicted criminal terrorized Sacramento for two years, luring victims from shopping malls to their deaths.',
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
          <span className="text-gray-400">Episode 3</span>
        </div>

        {/* Episode Header */}
        <div className="mb-8">
          <p className="text-[#c9a227] text-sm uppercase tracking-[0.15em] mb-3">Episode 3</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">The Love Slave Killers</h1>
          <p className="text-xl text-gray-400">The Gallego Case</p>
        </div>

        {/* Audio Player */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
            <div className="flex-1">
              <audio 
                controls 
                className="w-full"
                src="/podcast/ep003-love-slave-killers.mp3"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Duration: 15:08</span>
            <span>Released: February 2026</span>
          </div>
        </div>

        {/* Episode Description */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Arden Fair Mall. November 2nd, 1980. Just past midnight. Craig Miller and Mary Beth Sowers 
            had just left a fraternity formal. They were college sweethearts with their whole lives 
            ahead of them. They never made it home.
          </p>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            Gerald and Charlene Gallego terrorized Northern California between 1978 and 1980, 
            murdering at least ten people — mostly teenage girls lured from shopping malls 
            with promises of parties and drugs. What made them so effective? Charlene.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            A violin prodigy. A scholarship student. The daughter of a successful businessman. 
            The last person you'd suspect of leading innocent girls to their deaths. But for two 
            years, that's exactly what she did — approaching victims with her friendly smile, 
            luring them to a van where Gerald waited with a gun.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            Their final abduction at Arden Fair Mall was witnessed by a fraternity brother who 
            memorized the license plate. It was the clue that finally brought them down. But 
            the most chilling part of this story? After serving just sixteen years, Charlene 
            Gallego walked free — and moved back to the Sacramento suburbs.
          </p>

          <p className="text-gray-400 leading-relaxed">
            This is the story of how a good girl from a good family chose to become a monster.
          </p>
        </div>

        {/* Case Details */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Case Details</h2>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Location</dt>
              <dd className="text-white">Sacramento, California</dd>
            </div>
            <div>
              <dt className="text-gray-500">Span</dt>
              <dd className="text-white">Sept 1978 – Nov 1980</dd>
            </div>
            <div>
              <dt className="text-gray-500">Victims</dt>
              <dd className="text-white">10 confirmed</dd>
            </div>
            <div>
              <dt className="text-gray-500">Perpetrators</dt>
              <dd className="text-white">Gerald & Charlene Gallego</dd>
            </div>
            <div>
              <dt className="text-gray-500">Gerald's Fate</dt>
              <dd className="text-white">Death row (died 2002)</dd>
            </div>
            <div>
              <dt className="text-gray-500">Charlene's Fate</dt>
              <dd className="text-white">Released 1997</dd>
            </div>
          </dl>
        </div>

        {/* Victims */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">The Victims</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• <span className="text-white">Kippi Vaught, 16</span> & <span className="text-white">Rhonda Scheffler, 17</span> — September 11, 1978</li>
            <li>• <span className="text-white">Brenda Judd, 14</span> & <span className="text-white">Sandra Colley, 13</span> — June 24, 1979</li>
            <li>• <span className="text-white">Stacy Redican, 17</span> & <span className="text-white">Karen Twiggs, 17</span> — April 24, 1980</li>
            <li>• <span className="text-white">Linda Aguilar, 21</span> — June 6, 1980</li>
            <li>• <span className="text-white">Virginia Mochel, 34</span> — July 17, 1980</li>
            <li>• <span className="text-white">Craig Miller, 22</span> & <span className="text-white">Mary Beth Sowers, 21</span> — November 2, 1980</li>
          </ul>
        </div>

        {/* Sources */}
        <div className="border-t border-[#1a1a1a] pt-8 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Sources & Further Reading</h2>
          
          <h3 className="text-white font-medium mt-6 mb-3">Court Records</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• <a href="https://law.justia.com/cases/california/supreme-court/3d/52/115.html" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">People v. Gallego, 52 Cal.3d 115 (1990)</a> — California Supreme Court</li>
            <li>• <a href="https://caselaw.findlaw.com/court/ca-supreme-court/1774312.html" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">People v. Gallego</a> — FindLaw (full opinion)</li>
            <li>• <a href="https://law.justia.com/cases/nevada/supreme-court/1985/15932-1.html" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">Gallego v. State, 101 Nev. 782 (1985)</a> — Nevada Supreme Court</li>
            <li>• <a href="https://scocal.stanford.edu/opinion/people-v-gallego-30933" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">Stanford Law: People v. Gallego</a> — Full case analysis</li>
          </ul>
          
          <h3 className="text-white font-medium mt-6 mb-3">News Coverage</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• <a href="https://www.latimes.com/archives/la-xpm-1985-12-22-me-20241-story.html" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">LA Times: Nevada Upholds Death Sentence (1985)</a></li>
            <li>• <a href="https://en.wikipedia.org/wiki/Gerald_and_Charlene_Gallego" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">Wikipedia: Gerald and Charlene Gallego</a></li>
            <li>• Sacramento Bee archives (1980-1983) — Trial coverage</li>
          </ul>
          
          <h3 className="text-white font-medium mt-6 mb-3">Books</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• "A Perfect Gentleman" by Jaye Slade Fletcher (1993)</li>
            <li>• "All His Father's Sins" by Ray Biondi & Walt Hecox (1988)</li>
            <li>• Contemporary coverage: Sacramento Bee, San Francisco Examiner</li>
            <li>• CBS Sacramento investigation (2013)</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-8 text-center">
          <h3 className="font-serif text-xl font-bold text-white mb-2">Get notified of new episodes</h3>
          <p className="text-gray-400 mb-6 text-sm">Plus case updates and behind-the-scenes research notes.</p>
          <SubscribeForm source="episode-love-slave-killers" buttonText="Subscribe" darkMode={true} />
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
