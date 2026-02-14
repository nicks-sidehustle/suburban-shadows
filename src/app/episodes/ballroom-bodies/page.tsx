import Link from 'next/link'
import { SubscribeForm } from '@/components/SubscribeForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Ballroom Bodies - Episode 1 | Suburban Shadows',
  description: 'The John List Case: A Sunday school teacher who methodically murdered his entire family, then vanished for 18 years.',
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
          <span className="text-gray-400">Episode 1</span>
        </div>

        {/* Episode Header */}
        <div className="mb-8">
          <p className="text-[#c9a227] text-sm uppercase tracking-[0.15em] mb-3">Episode 1</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">The Ballroom Bodies</h1>
          <p className="text-xl text-gray-400">The John List Case</p>
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
                src="/podcast/ep001-ballroom-bodies.mp3"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Duration: 10:53</span>
            <span>Released: August 2025</span>
          </div>
        </div>

        {/* Episode Description */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Picture this: A grand Victorian mansion, nineteen rooms of elegance perched on the highest hill 
            in Westfield, New Jersey. White exterior, dark green shutters, a magnificent ballroom with 
            a stained glass skylight that bathes everything in ethereal green light.
          </p>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            This is Breeze Knoll. A symbol of success. A fortress of faith. A tomb for five.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            On November 9, 1971, John List — Sunday school teacher, Boy Scout leader, pillar of the 
            community — methodically murdered his wife, his mother, and his three children. Then he 
            arranged their bodies in the ballroom, cut his face from every family photograph, set 
            religious hymns to play on the intercom, and disappeared.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            The house sat lit for nearly a month. The hymns played on repeat. One by one, the light 
            bulbs burned out. When police finally entered, they found five bodies and a five-page 
            confession — but John List was gone.
          </p>

          <p className="text-gray-400 leading-relaxed">
            He would stay gone for eighteen years. This is the story of how they found him.
          </p>
        </div>

        {/* Case Details */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Case Details</h2>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Location</dt>
              <dd className="text-white">Westfield, New Jersey</dd>
            </div>
            <div>
              <dt className="text-gray-500">Date</dt>
              <dd className="text-white">November 9, 1971</dd>
            </div>
            <div>
              <dt className="text-gray-500">Victims</dt>
              <dd className="text-white">5 (family members)</dd>
            </div>
            <div>
              <dt className="text-gray-500">Perpetrator</dt>
              <dd className="text-white">John Emil List</dd>
            </div>
            <div>
              <dt className="text-gray-500">Capture</dt>
              <dd className="text-white">June 1, 1989</dd>
            </div>
            <div>
              <dt className="text-gray-500">Time at Large</dt>
              <dd className="text-white">17 years, 6 months</dd>
            </div>
          </dl>
        </div>

        {/* Sources */}
        <div className="border-t border-[#1a1a1a] pt-8 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Sources & Further Reading</h2>
          
          <h3 className="text-white font-medium mt-4 mb-3">Court Records</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• <a href="https://law.justia.com/cases/new-jersey/appellate-division-published/1990/270-n-j-super-252-0.html" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">State v. List, 270 N.J. Super. 252 (1990)</a> — NJ Appellate Division</li>
            <li>• Union County Superior Court records — Trial transcripts (1990)</li>
          </ul>
          
          <h3 className="text-white font-medium mt-6 mb-3">Primary Sources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• <a href="https://en.wikipedia.org/wiki/John_List_(murderer)" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">Wikipedia: John List</a> — Comprehensive overview with citations</li>
            <li>• <a href="https://www.history.com/this-day-in-history/november-9/a-sunday-school-teacher-murders-his-family-and-goes-undercover-for-18-years" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">History.com: This Day in History</a></li>
            <li>• America's Most Wanted broadcast — May 21, 1989 (led to capture)</li>
            <li>• FBI case files (FOIA released)</li>
          </ul>
          
          <h3 className="text-white font-medium mt-6 mb-3">Books</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• "Righteous Carnage: The List Murders" by Timothy B. Benford & James P. Johnson (1991)</li>
            <li>• "Death Sentence" by Joe Sharkey (1990)</li>
            <li>• America's Most Wanted broadcast, May 21, 1989</li>
            <li>• FBI case files (FOIA released)</li>
            <li>• Contemporary coverage: The New York Times, Newark Star-Ledger</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-8 text-center">
          <h3 className="font-serif text-xl font-bold text-white mb-2">Get notified of new episodes</h3>
          <p className="text-gray-400 mb-6 text-sm">Plus case updates and behind-the-scenes research notes.</p>
          <SubscribeForm source="episode-ballroom-bodies" buttonText="Subscribe" darkMode={true} />
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
