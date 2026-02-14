import Link from 'next/link'
import { SubscribeForm } from '@/components/SubscribeForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Applegate Jane Doe - Episode 4 | Suburban Shadows',
  description: 'Patricia Rose vanished in 1980, leaving her 18-month-old son alone in a Sacramento hotel. Her remains were found in 1985 but not identified until 2024. Who killed her?',
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
          <span className="text-gray-400">Episode 4</span>
        </div>

        {/* Episode Header */}
        <div className="mb-8">
          <p className="text-[#c9a227] text-sm uppercase tracking-[0.15em] mb-3">Episode 4</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">The Applegate Jane Doe</h1>
          <p className="text-xl text-gray-400">The Patricia Rose Cold Case</p>
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
                src="/podcast/ep004-applegate-jane-doe.mp3"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Duration: 13:20</span>
            <span>Released: February 2026</span>
          </div>
        </div>

        {/* Episode Description */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Sacramento, California. Sometime in 1980. A cheap hotel room. Inside, an eighteen-month-old 
            boy sits alone. Crying. Hungry. Waiting for a mother who will never return.
          </p>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            Patricia Ann Rose was twenty years old when she vanished. A transient woman who had drifted 
            through Missouri, Oklahoma, Kentucky, Colorado, and Nevada before landing in Sacramento. 
            She went by many names — Torrie, Patti, Bowden, Anderson — and left few traces behind.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            When her remains were found by hunters in Applegate in January 1985, no one knew who she was. 
            For nearly four decades, she was simply the Applegate Jane Doe — case number UP6298 in the 
            national missing persons database. A woman without a name, without a story.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            In February 2024, advanced DNA technology finally gave her back her identity. But the central 
            mystery remains: who killed Patricia Rose? Who dumped her body in those remote Placer County 
            foothills? And why was her eighteen-month-old son left alone in a Sacramento hotel room, 
            waiting for a mother who would never return?
          </p>

          <p className="text-gray-400 leading-relaxed">
            The case remains open. Someone out there knows what happened in 1980.
          </p>
        </div>

        {/* Case Details */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Case Details</h2>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Victim</dt>
              <dd className="text-white">Patricia Ann Rose, 20</dd>
            </div>
            <div>
              <dt className="text-gray-500">Aliases</dt>
              <dd className="text-white">Torrie, Patti, Bowden, Anderson</dd>
            </div>
            <div>
              <dt className="text-gray-500">Last Seen</dt>
              <dd className="text-white">Sacramento, CA (~1980)</dd>
            </div>
            <div>
              <dt className="text-gray-500">Remains Found</dt>
              <dd className="text-white">January 6, 1985</dd>
            </div>
            <div>
              <dt className="text-gray-500">Location Found</dt>
              <dd className="text-white">Applegate, Placer County</dd>
            </div>
            <div>
              <dt className="text-gray-500">Identified</dt>
              <dd className="text-white">February 2024</dd>
            </div>
            <div>
              <dt className="text-gray-500">NamUs Case</dt>
              <dd className="text-white">UP6298</dd>
            </div>
            <div>
              <dt className="text-gray-500">Status</dt>
              <dd className="text-[#c9a227]">UNSOLVED</dd>
            </div>
          </dl>
        </div>

        {/* The Investigation */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">The Investigation Timeline</h2>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">~1980</span>
              <span>Patricia Rose vanishes from Sacramento; son found alone in hotel</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">1985</span>
              <span>Skeletal remains discovered by hunters near Boole Road, Applegate</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">1985</span>
              <span>Chico State creates facial reconstruction; no matches found</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">2005</span>
              <span>DNA sent to CA DOJ Lab in Richmond — no familial matches</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">2022</span>
              <span>Roads to Justice program submits evidence to Othram</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">2024</span>
              <span>DNA match confirms Patricia Rose via sibling in Oregon</span>
            </li>
          </ul>
        </div>

        {/* Can You Help? */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#c9a227]/30 rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Can You Help?</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            The Placer County Sheriff's Office is actively seeking information about Patricia Rose. 
            Did you know her in Sacramento around 1980? Do you remember anything about a young mother 
            staying in a hotel with a baby? Any information could help solve this case.
          </p>
          <p className="text-white text-sm">
            Email: <a href="mailto:PCSOTipLine@placer.ca.gov" className="text-[#c9a227] hover:underline">PCSOTipLine@placer.ca.gov</a>
          </p>
        </div>

        {/* Sources */}
        <div className="border-t border-[#1a1a1a] pt-8 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Sources & Further Reading</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• <a href="https://dnasolves.com/articles/patricia-ann-rose-california/" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">DNA Solves: Applegate Jane Doe Identified</a></li>
            <li>• <a href="https://www.cbsnews.com/sacramento/news/placer-county-cold-case-big-break-dna-tech-id/" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">CBS Sacramento: Placer County Cold Case Gets Big Break</a></li>
            <li>• <a href="https://www.kcra.com/article/placer-county-seeks-publics-help-1980-cold-case/46686418" className="text-[#c9a227] hover:underline" target="_blank" rel="noopener">KCRA: Placer Sheriff Seeks Public's Help</a></li>
            <li>• Placer County Sheriff's Office press release (February 2024)</li>
            <li>• National Missing and Unidentified Persons System (NamUs) — Case UP6298</li>
            <li>• Othram Inc. — Forensic Genetic Genealogy</li>
            <li>• Roads to Justice Program — California DOJ</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-8 text-center">
          <h3 className="font-serif text-xl font-bold text-white mb-2">Get notified of new episodes</h3>
          <p className="text-gray-400 mb-6 text-sm">Plus case updates and behind-the-scenes research notes.</p>
          <SubscribeForm source="episode-applegate-jane-doe" buttonText="Subscribe" darkMode={true} />
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
