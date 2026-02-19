import Link from 'next/link'
import { SubscribeForm } from '@/components/SubscribeForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The SpaceX Lie - Episode 7 | Suburban Shadows',
  description: 'Chandler Halderson claimed he was about to work for SpaceX, but when his parents discovered the truth about his lies, he chose murder over embarrassment.',
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
          <p className="text-[#c9a227] text-sm uppercase tracking-[0.15em] mb-3">Episode 7</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">The SpaceX Lie</h1>
          <p className="text-xl text-gray-400">The Chandler Halderson Case</p>
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
                src="/podcast/ep007-the-spacex-lie.mp3"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Duration: 13:24</span>
            <span>Released: February 2026</span>
          </div>
        </div>

        {/* Episode Description */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Windsor, Wisconsin. A growing suburb outside Madison where 94% of families live above 
            the poverty line and parents dream big dreams for their children.
          </p>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            Chandler Halderson seemed to embody those dreams. The 23-year-old told everyone he 
            was attending Madison Area Technical College and had landed the opportunity of a 
            lifetime: a job with SpaceX, Elon Musk's rocket company.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            His parents, Bart and Krista Halderson, were proud and supportive. Bart, an accountant, 
            and Krista, beloved by all who knew her, had built a life centered around their two sons. 
            They supported Chandler financially and emotionally as he pursued what they believed 
            was a bright future.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            But it was all a lie. Chandler had flunked out of college and spent his days playing 
            video games instead of attending classes. The SpaceX job was pure fiction. When Bart 
            made a phone call to the college on July 1st, 2021, Chandler's house of cards came 
            crashing down.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Rather than face the embarrassment of being exposed, Chandler chose violence. The 
            subsequent cover-up — involving the dismemberment and disposal of his parents' bodies 
            across southern Wisconsin — shocked investigators and a community that thought they 
            knew the quiet young man next door.
          </p>
        </div>

        {/* Case Details */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Case Details</h2>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Perpetrator</dt>
              <dd className="text-white">Chandler Michael Halderson, 23</dd>
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
              <dt className="text-gray-500">Method</dt>
              <dd className="text-white">Gunshot, dismemberment</dd>
            </div>
            <div>
              <dt className="text-gray-500">Motive</dt>
              <dd className="text-white">Lies about college and fake SpaceX job exposed</dd>
            </div>
            <div>
              <dt className="text-gray-500">Conviction</dt>
              <dd className="text-white">January 20, 2022</dd>
            </div>
            <div>
              <dt className="text-gray-500">Sentence</dt>
              <dd className="text-[#c9a227]">Life without parole</dd>
            </div>
          </dl>
        </div>

        {/* The Investigation */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">The Investigation Timeline</h2>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">July 1, 2021</span>
              <span>Bart calls college, discovers Chandler's lies; murders occur same day</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">July 1-7, 2021</span>
              <span>Chandler dismembers bodies, disposes remains across Wisconsin</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">July 7, 2021</span>
              <span>Chandler reports parents missing to authorities</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">July 8, 2021</span>
              <span>Human remains discovered at Cottage Grove farm</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">July 2021</span>
              <span>Snapchat location data from girlfriend leads to more remains</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">July 15, 2021</span>
              <span>Chandler formally charged with murder</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">March 17, 2022</span>
              <span>Sentenced to life in prison without possibility of parole</span>
            </li>
          </ul>
        </div>

        {/* The Warning Signs */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#c9a227]/30 rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">The Digital Evidence</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            The Halderson case showcased how digital forensics can crack even carefully planned crimes:
          </p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Snapchat location data from girlfriend's phone led police to remains</li>
            <li>• Cell phone records placed Chandler at disposal sites</li>
            <li>• College records exposed the fundamental lie that triggered murders</li>
            <li>• Digital communication patterns showed systematic deception</li>
            <li>• Social media posts maintained false narrative during cover-up</li>
            <li>• Technology that Chandler thought would hide evidence ultimately exposed him</li>
          </ul>
        </div>

        {/* Key Evidence */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Key Physical Evidence</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• Bone fragments and blood evidence found in family fireplace</li>
            <li>• Dismemberment tools recovered from oil drum at disposal site</li>
            <li>• Body parts scattered across multiple locations in southern Wisconsin</li>
            <li>• High-powered rifle used in initial shooting</li>
            <li>• Forensic evidence linking Chandler to all disposal sites</li>
            <li>• Timeline of events contradicting Chandler's alibi</li>
          </ul>
        </div>

        {/* Sources */}
        <div className="border-t border-[#1a1a1a] pt-8 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Sources & Further Reading</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• Dane County Sheriff's Office investigation files</li>
            <li>• Wisconsin State Crime Lab forensic reports</li>
            <li>• Madison Area Technical College records</li>
            <li>• Court TV trial coverage</li>
            <li>• CBS News "48 Hours" investigation</li>
            <li>• ABC News coverage and interviews</li>
            <li>• Various Wisconsin media outlets (2021-2022)</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-8 text-center">
          <h3 className="font-serif text-xl font-bold text-white mb-2">Get notified of new episodes</h3>
          <p className="text-gray-400 mb-6 text-sm">Plus case updates and behind-the-scenes research notes.</p>
          <SubscribeForm source="episode-the-spacex-lie" buttonText="Subscribe" darkMode={true} />
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