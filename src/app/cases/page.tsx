import Link from 'next/link'
import { Header } from '@/components/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Files | Suburban Shadows',
  description: 'Explore the cases covered on Suburban Shadows - detailed information, timelines, and sources for each investigation.',
}

const cases = [
  {
    episodeNumber: 4,
    slug: 'applegate-jane-doe',
    title: 'The Applegate Jane Doe',
    perpetrator: 'Unknown (Unsolved)',
    victims: 'Patricia Rose (20)',
    location: 'Sacramento / Placer County, California',
    date: '~1980',
    status: 'UNSOLVED',
    statusColor: 'bg-red-900/50 text-red-400',
    summary: 'A young mother vanished, leaving her 18-month-old son alone in a Sacramento hotel room. Her skeletal remains were discovered by hunters in Applegate in 1985 but remained unidentified for 39 years until DNA technology finally gave her a name in 2024.',
    keyFacts: [
      'Victim identified as Patricia Rose via forensic genealogy in February 2024',
      'Rose used multiple aliases: Judkins, Hutchings, Joyce',
      'She was transient, traveling through multiple states before Sacramento',
      'Remains found by hunters in remote Placer County location',
      'Case remains open — Placer County Sheriff seeks information',
    ],
  },
  {
    episodeNumber: 3,
    slug: 'love-slave-killers',
    title: 'The Love Slave Killers',
    perpetrator: 'Gerald & Charlene Gallego',
    victims: '10 victims (1978-1980)',
    location: 'Sacramento, California',
    date: '1978-1980',
    status: 'SOLVED',
    statusColor: 'bg-green-900/50 text-green-400',
    summary: 'A violin prodigy from a respectable family and her convicted criminal husband terrorized Sacramento for two years, luring victims from shopping malls with promises of marijuana or party invitations. Their final abduction at Arden Fair Mall led to their capture.',
    keyFacts: [
      'Charlene Gallego lured victims; Gerald raped and murdered them',
      'Final victims Craig Miller and Mary Beth Sowers were abducted from Arden Fair Mall',
      'A fraternity brother witnessed the abduction and memorized the license plate',
      'Gerald was sentenced to death (died in prison 2002)',
      'Charlene served 16 years, released 1997, lives in Sacramento area',
    ],
  },
  {
    episodeNumber: 2,
    slug: 'family-next-door',
    title: 'The Family Next Door',
    perpetrator: 'Christopher Watts',
    victims: 'Shanann Watts (34), Bella (4), Celeste (3), Nico (unborn)',
    location: 'Frederick, Colorado',
    date: 'August 13, 2018',
    status: 'SOLVED',
    statusColor: 'bg-green-900/50 text-green-400',
    summary: 'A fitness-obsessed father murdered his pregnant wife and two young daughters, then appeared on television pleading for their safe return. His demeanor during interviews raised immediate suspicion.',
    keyFacts: [
      'Watts murdered his family while having an affair with a coworker',
      'He buried Shanann in a shallow grave and disposed of his daughters in oil tanks',
      'Neighbor\'s security camera footage was crucial evidence',
      'Watts confessed after failing a polygraph test',
      'Sentenced to 5 consecutive life terms without parole',
    ],
  },
  {
    episodeNumber: 1,
    slug: 'ballroom-bodies',
    title: 'The Ballroom Bodies',
    perpetrator: 'John Emil List',
    victims: 'Helen List, Alma List, Patricia (16), John Jr. (15), Frederick (13)',
    location: 'Westfield, New Jersey',
    date: 'November 9, 1971',
    status: 'SOLVED',
    statusColor: 'bg-green-900/50 text-green-400',
    summary: 'A Sunday school teacher methodically murdered his entire family, arranged their bodies in the ballroom, set hymns to play on the intercom, and vanished for 18 years. He was finally captured after America\'s Most Wanted aired a forensic sculpture of his aged appearance.',
    keyFacts: [
      'List killed his wife, mother, and three children over the course of one day',
      'He cut his face from every family photo before fleeing',
      'The house sat lit for nearly a month before bodies were discovered',
      'List assumed identity of "Robert Clark" and remarried',
      'Captured in 1989 after 18 years on the run; died in prison 2008',
    ],
  },
]

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header currentPage="cases" />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Case Files</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Detailed breakdowns of every case we've covered. Facts, timelines, and sources — 
            for those who want to dig deeper.
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((caseFile) => (
            <div
              key={caseFile.slug}
              className="bg-[#111111] border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#333] transition"
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#c9a227] text-sm uppercase tracking-wider">
                        Episode {caseFile.episodeNumber}
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${caseFile.statusColor}`}>
                        {caseFile.status}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                      {caseFile.title}
                    </h2>
                  </div>
                  <Link
                    href={`/episodes/${caseFile.slug}`}
                    className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-4 py-2 rounded text-sm hover:bg-[#222] transition"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    Listen
                  </Link>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">Perpetrator:</span>
                      <span className="text-white ml-2">{caseFile.perpetrator}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Victims:</span>
                      <span className="text-white ml-2">{caseFile.victims}</span>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <span className="text-white ml-2">{caseFile.location}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Date:</span>
                      <span className="text-white ml-2">{caseFile.date}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {caseFile.summary}
                </p>

                {/* Key Facts */}
                <div className="border-t border-[#1a1a1a] pt-6">
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Key Facts</h3>
                  <ul className="space-y-2">
                    {caseFile.keyFacts.map((fact, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-[#c9a227] mt-1">•</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">More cases being researched. Subscribe to get notified.</p>
          <Link
            href="/api/podcast/feed"
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black px-6 py-3 rounded-full font-medium hover:bg-[#d4ad2d] transition"
          >
            Subscribe via RSS
          </Link>
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
              <Link href="/episodes" className="hover:text-white transition">Episodes</Link>
              <Link href="/cases" className="hover:text-white transition">Case Files</Link>
              <Link href="/about" className="hover:text-white transition">About</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
