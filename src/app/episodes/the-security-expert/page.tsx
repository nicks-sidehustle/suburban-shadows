import Link from 'next/link'
import { SubscribeForm } from '@/components/SubscribeForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Security Expert - Episode 5 | Suburban Shadows',
  description: 'Chris Coleman made his living protecting others from danger. But when anonymous threats began targeting his family, he knew exactly how to investigate them — because he was sending them himself.',
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
          <span className="text-gray-400">Episode 5</span>
        </div>

        {/* Episode Header */}
        <div className="mb-8">
          <p className="text-[#c9a227] text-sm uppercase tracking-[0.15em] mb-3">Episode 5</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">The Security Expert</h1>
          <p className="text-xl text-gray-400">The Chris Coleman Case</p>
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
                src="/podcast/ep005-the-security-expert.mp3"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Duration: 2:45</span>
            <span>Released: February 2026</span>
          </div>
        </div>

        {/* Episode Description */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Columbia, Illinois. A pristine suburban community where families trust their neighbors, 
            their community leaders, and the men and women who dedicate their lives to keeping them safe.
          </p>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            Chris Coleman was the kind of man those families trusted with their lives. As head of 
            security for renowned televangelist Joyce Meyer, he traveled the world scanning crowds 
            for threats, coordinating with law enforcement, ensuring the safety of thousands.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            At home on Robert Drive, Coleman was the picture of suburban success. High school 
            sweetheart wife. Two beautiful boys. Little League coach. Church attendee. The kind 
            of neighbor you'd call if trouble came knocking.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            But when anonymous threats began targeting his family in late 2008, Coleman dutifully 
            reported each message to police. He installed cameras, upgraded locks, did everything 
            right. What investigators didn't know was that Chris Coleman was living a double life — 
            and that he was sending the threats to himself.
          </p>

          <p className="text-gray-400 leading-relaxed">
            On May 5, 2009, Coleman's carefully constructed world collapsed when police found his 
            wife Sheri and sons Garett and Gavin murdered in their home. The same calculating mind 
            that had protected celebrities from threats had planned what he thought was the perfect 
            murder. It wasn't.
          </p>
        </div>

        {/* Case Details */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Case Details</h2>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Perpetrator</dt>
              <dd className="text-white">Christopher Coleman, 32</dd>
            </div>
            <div>
              <dt className="text-gray-500">Victims</dt>
              <dd className="text-white">Sheri Coleman (31), Garett (11), Gavin (9)</dd>
            </div>
            <div>
              <dt className="text-gray-500">Location</dt>
              <dd className="text-white">431 Robert Drive, Columbia, IL</dd>
            </div>
            <div>
              <dt className="text-gray-500">Date</dt>
              <dd className="text-white">May 5, 2009</dd>
            </div>
            <div>
              <dt className="text-gray-500">Method</dt>
              <dd className="text-white">Strangulation</dd>
            </div>
            <div>
              <dt className="text-gray-500">Motive</dt>
              <dd className="text-white">Extramarital affair, financial gain</dd>
            </div>
            <div>
              <dt className="text-gray-500">Conviction</dt>
              <dd className="text-white">April 19, 2011</dd>
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
              <span className="text-[#c9a227] font-mono">Late 2008</span>
              <span>Anonymous threats begin targeting the Coleman family</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">May 5, 2009</span>
              <span>Chris Coleman leaves for work at 5:43 AM, calls neighbor at 6:43 AM</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">May 5, 2009</span>
              <span>Police discover bodies of Sheri, Garett, and Gavin Coleman</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">May 2009</span>
              <span>Investigation reveals affair with Tara Lintz in Florida</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">May 2009</span>
              <span>Cell phone records place Coleman near home during murders</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">June 2009</span>
              <span>Forensic analysis traces threatening emails to Coleman</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a227] font-mono">April 2011</span>
              <span>Coleman convicted of triple murder, sentenced to life</span>
            </li>
          </ul>
        </div>

        {/* The Warning Signs */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#c9a227]/30 rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">The Red Flags</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            The Coleman case highlights how predators can hide behind positions of trust and authority. 
            Warning signs included:
          </p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Self-reported "anonymous" threats that couldn't be traced to outside sources</li>
            <li>• Suspicious timing of the murders coinciding with work travel</li>
            <li>• Behavioral inconsistencies during the investigation</li>
            <li>• Hidden extramarital relationships and financial motivations</li>
            <li>• Intimate knowledge of security systems and investigative procedures</li>
          </ul>
        </div>

        {/* Sources */}
        <div className="border-t border-[#1a1a1a] pt-8 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Sources & Further Reading</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• Illinois State Police investigation files</li>
            <li>• Monroe County court records</li>
            <li>• "My Name is Not Angel" by Tara Lintz</li>
            <li>• FBI behavioral analysis reports</li>
            <li>• Columbia Police Department case files</li>
            <li>• Joyce Meyer Ministries employment records</li>
            <li>• Various news media coverage (2009-2011)</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-8 text-center">
          <h3 className="font-serif text-xl font-bold text-white mb-2">Get notified of new episodes</h3>
          <p className="text-gray-400 mb-6 text-sm">Plus case updates and behind-the-scenes research notes.</p>
          <SubscribeForm source="episode-the-security-expert" buttonText="Subscribe" darkMode={true} />
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