import Link from 'next/link'
import { SubscribeForm } from '@/components/SubscribeForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Thanksgiving Murders - Episode 6 | Suburban Shadows',
  description: 'Joel Guy Jr. meticulously planned the murder of his parents when they decided to cut off his financial support. His handwritten "book of premeditation" detailed every horrific step of his brutal plan.',
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
          <p className="text-[#c9a227] text-sm uppercase tracking-[0.15em] mb-3">Episode 6</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">The Thanksgiving Murders</h1>
          <p className="text-xl text-gray-400">The Joel Guy Jr. Case</p>
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
                src="/podcast/ep006-the-thanksgiving-murders.mp3"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Duration: 12:53</span>
            <span>Released: February 2026</span>
          </div>
        </div>

        {/* Episode Description */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            West Knox County, Tennessee. A quiet suburban neighborhood where Goldview Lane winds 
            through well-maintained homes and manicured lawns. The kind of place where neighbors 
            wave to each other and the most excitement might be a weekend yard sale.
          </p>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            Joel and Lisa Guy had worked their entire lives to reach this moment. After 31 years 
            of marriage, they were finally ready to retire. Joel Senior, 61, was a pipeline 
            engineering designer. Lisa, 55, worked in human resources. They had sold their home 
            and planned to move to the small Tennessee town where Joel had grown up.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            But there was one complication in their retirement plans: their 28-year-old son, 
            Joel Junior. For nine years, he had been a professional student, ostensibly working 
            toward becoming a plastic surgeon while living entirely off his parents' support. 
            He had never held a job. Never faced real responsibility. Never stood on his own two feet.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            When Joel and Lisa decided it was time for tough love — time to cut off the financial 
            support and force their son to become independent — they had no idea they were signing 
            their own death warrants. Joel Junior's response wasn't to find work or accept 
            responsibility. It was to meticulously plan their murders.
          </p>

          <p className="text-gray-400 leading-relaxed">
            The handwritten notebook found in his backpack would become known as the "book of 
            premeditation" — a step-by-step manual for murder that detailed everything from the 
            weapons to purchase to the chemicals needed to dissolve human remains. This is the 
            story of a family's final Thanksgiving together, and how entitlement and greed 
            transformed a holiday of gratitude into a scene of unimaginable horror.
          </p>
        </div>

        {/* Case Details */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Case Details</h2>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Perpetrator</dt>
              <dd className="text-white">Joel Michael Guy Jr., 28</dd>
            </div>
            <div>
              <dt className="text-gray-500">Victims</dt>
              <dd className="text-white">Joel Guy Sr. (61), Lisa Guy (55)</dd>
            </div>
            <div>
              <dt className="text-gray-500">Location</dt>
              <dd className="text-white">Goldview Lane, West Knox County, TN</dd>
            </div>
            <div>
              <dt className="text-gray-500">Date</dt>
              <dd className="text-white">November 26, 2016</dd>
            </div>
            <div>
              <dt className="text-gray-500">Method</dt>
              <dd className="text-white">Stabbing, dismemberment</dd>
            </div>
            <div>
              <dt className="text-gray-500">Motive</dt>
              <dd className="text-white">$500,000 life insurance policy</dd>
            </div>
            <div>
              <dt className="text-gray-500">Conviction</dt>
              <dd className="text-white">October 2, 2020</dd>
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
              <span className="text-[#c9a227] font-mono">Nov 7, 2016</span>
              <span>Guy Jr. begins purchasing supplies: acid, hydrogen peroxide</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">Nov 18-21</span>
              <span>Continued purchases: bleach sprayer, knife, storage totes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">Nov 24, 2016</span>
              <span>Guy Jr. arrives for Thanksgiving weekend with family</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">Nov 26, 2016</span>
              <span>Joel Sr. murdered while Lisa shops; Lisa killed upon return</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">Nov 28, 2016</span>
              <span>Welfare check discovers dismembered remains</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">Nov 29, 2016</span>
              <span>Guy Jr. arrested in Baton Rouge apartment parking lot</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">Oct 2020</span>
              <span>Trial concludes with guilty verdict on all counts</span>
            </li>
          </ul>
        </div>

        {/* The Warning Signs */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#c9a227]/30 rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">The Book of Premeditation</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            The handwritten notebook found in Guy Jr.'s backpack contained chilling step-by-step 
            murder instructions, including:
          </p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• "Kill him with the knife... clean up mess from him before she get home"</li>
            <li>• "Kill her with a knife... place her in shower and turn on hot water"</li>
            <li>• "Use sodium hydroxide to destroy his soft tissue and soften bones"</li>
            <li>• "Flush chunks down toilet, not garbage disposal"</li>
            <li>• "Douse killing rooms with bleach... turn up heat to 90 degrees"</li>
            <li>• "$500,000 would be all mine. With him missing/dead, I get the whole thing"</li>
          </ul>
        </div>

        {/* Sources */}
        <div className="border-t border-[#1a1a1a] pt-8 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Sources & Further Reading</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• Knox County Sheriff's Office case files</li>
            <li>• Tennessee Bureau of Investigation reports</li>
            <li>• Court TV trial coverage and evidence presentations</li>
            <li>• Knox County court records and trial transcripts</li>
            <li>• Walmart and retail surveillance footage</li>
            <li>• FBI forensic analysis reports</li>
            <li>• Various news media coverage (2016-2020)</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-8 text-center">
          <h3 className="font-serif text-xl font-bold text-white mb-2">Get notified of new episodes</h3>
          <p className="text-gray-400 mb-6 text-sm">Plus case updates and behind-the-scenes research notes.</p>
          <SubscribeForm source="episode-the-thanksgiving-murders" buttonText="Subscribe" darkMode={true} />
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