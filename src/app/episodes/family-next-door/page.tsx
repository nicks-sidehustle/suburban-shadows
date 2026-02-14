import Link from 'next/link'
import { SubscribeForm } from '@/components/SubscribeForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Family Next Door - Episode 2 | Suburban Shadows',
  description: 'The Chris Watts Case: A fitness-obsessed father who murdered his pregnant wife and two daughters, then went on TV pleading for their return.',
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
          <span className="text-gray-400">Episode 2</span>
        </div>

        {/* Episode Header */}
        <div className="mb-8">
          <p className="text-[#c9a227] text-sm uppercase tracking-[0.15em] mb-3">Episode 2</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">The Family Next Door</h1>
          <p className="text-xl text-gray-400">The Chris Watts Case</p>
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
                src="/podcast/ep002-family-next-door.mp3"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Duration: 10:05</span>
            <span>Released: February 2026</span>
          </div>
        </div>

        {/* Episode Description */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            A five-bedroom home on Saratoga Trail in Frederick, Colorado. A pregnant wife who sold 
            health products on social media. Two little girls — Bella, four, and Celeste, three — 
            with matching blonde hair and gap-toothed smiles.
          </p>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            From the outside, the Watts family looked like the American Dream in high definition. 
            A fitness-obsessed father. A mother documenting her picture-perfect life for thousands 
            of followers. A baby boy on the way.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            On August 13th, 2018, Chris Watts murdered his pregnant wife Shanann and their two 
            daughters. He buried Shanann in a shallow grave and forced his children's bodies into 
            crude oil tanks — through hatches only eight inches wide.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            Then he went on television, pleading for their safe return. "I want everybody to come 
            home," he told reporters, standing on his porch. "Wherever they're at, just come home."
          </p>

          <p className="text-gray-400 leading-relaxed">
            This episode explores how a seemingly devoted family man became a family annihilator — 
            and why this case continues to haunt millions of true crime followers.
          </p>
        </div>

        {/* Case Details */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Case Details</h2>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Location</dt>
              <dd className="text-white">Frederick, Colorado</dd>
            </div>
            <div>
              <dt className="text-gray-500">Date</dt>
              <dd className="text-white">August 13, 2018</dd>
            </div>
            <div>
              <dt className="text-gray-500">Victims</dt>
              <dd className="text-white">4 (wife, 2 daughters, unborn son)</dd>
            </div>
            <div>
              <dt className="text-gray-500">Perpetrator</dt>
              <dd className="text-white">Christopher Lee Watts</dd>
            </div>
            <div>
              <dt className="text-gray-500">Arrest</dt>
              <dd className="text-white">August 15, 2018</dd>
            </div>
            <div>
              <dt className="text-gray-500">Sentence</dt>
              <dd className="text-white">5 life terms + 84 years</dd>
            </div>
          </dl>
        </div>

        {/* Content Warning */}
        <div className="bg-red-900/20 border border-red-900/50 rounded-lg p-6 mb-12">
          <h3 className="font-bold text-red-400 mb-2">Content Warning</h3>
          <p className="text-gray-400 text-sm">
            This episode contains descriptions of familicide, including violence against children. 
            Listener discretion is advised.
          </p>
        </div>

        {/* Sources */}
        <div className="border-t border-[#1a1a1a] pt-8 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Sources & Further Reading</h2>
          
          <h3 className="text-white font-medium mt-4 mb-3">Official Case Documents</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• <a href="https://ewscripps.brightspotcdn.com/50/f6/94eff14d4972ab4e227cce8ea453/watts-interview-02.18.19_Redacted.pdf" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">Colorado Bureau of Investigation Interview (Feb 2019)</a> — PDF</li>
            <li>• <a href="https://www.cbsnews.com/colorado/news/chris-watts-murder-weld-county-frederick/" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">Weld County DA Case Documents (2,000+ pages)</a> — CBS Colorado</li>
            <li>• Weld County District Court — Case 2018CR1620</li>
          </ul>
          
          <h3 className="text-white font-medium mt-6 mb-3">News Coverage</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• <a href="https://www.cbsnews.com/colorado/news/chris-watts-shanann-watts-murder-frederick-greeley-weld-county/" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">CBS Colorado: Watts Prison Interview</a></li>
            <li>• <a href="https://www.mercurynews.com/2018/12/05/chris-watts-interviews-how-suspicion-grew-in-murder-case/" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">Mercury News: How Suspicion Grew</a></li>
            <li>• The Denver Post — Extensive trial and investigation coverage (2018)</li>
          </ul>
          
          <h3 className="text-white font-medium mt-6 mb-3">Documentaries</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• Netflix: "American Murder: The Family Next Door" (2020) — uses actual footage and texts</li>
            <li>• Oxygen: Criminal Confessions S3E1</li>
            <li>• Lifetime: "Chris Watts: Confessions of a Killer" (2020)</li>
          </ul>
        </div>

        {/* More Episodes */}
        <div className="border-t border-[#1a1a1a] pt-8 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">More Episodes</h2>
          <Link href="/episodes/ballroom-bodies" className="group block bg-[#111111] border border-[#1a1a1a] rounded-lg p-4 hover:border-[#333] transition">
            <div className="flex items-center gap-4">
              <span className="text-[#c9a227] font-serif text-2xl font-bold">01</span>
              <div>
                <h3 className="font-bold text-white group-hover:text-[#c9a227] transition">The Ballroom Bodies</h3>
                <p className="text-sm text-gray-500">The John List Case • 11:01</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Newsletter */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-8 text-center">
          <h3 className="font-serif text-xl font-bold text-white mb-2">Get notified of new episodes</h3>
          <p className="text-gray-400 mb-6 text-sm">Plus case updates and behind-the-scenes research notes.</p>
          <SubscribeForm source="episode-family-next-door" buttonText="Subscribe" darkMode={true} />
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
