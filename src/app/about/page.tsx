import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Suburban Shadows',
  description: 'Learn about Suburban Shadows, an AI-generated true crime podcast exploring dark mysteries hidden behind manicured lawns.',
}

export default function AboutPage() {
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
              <Link href="/about" className="text-white font-medium">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">About the Show</h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-xl text-gray-300 leading-relaxed">
            <strong className="text-white">Suburban Shadows</strong> is a true crime podcast that explores 
            the darkness hiding in plain sight — the family annihilators, the cold cases, the neighbors 
            with secrets, and the communities that never saw it coming.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Every episode dives deep into cases that shattered the illusion of suburban safety. We're not 
            here for sensationalism — we're here to understand how evil can hide behind freshly painted 
            fences and well-maintained lawns, and what these cases teach us about the people we think we know.
          </p>

          <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">Our Approach</h2>
          
          <p className="text-gray-400 leading-relaxed">
            Every case is thoroughly researched using court documents, contemporary news coverage, 
            investigative reports, and published accounts. We cite our sources and encourage listeners 
            to explore the primary materials themselves.
          </p>

          <p className="text-gray-400 leading-relaxed">
            We treat victims with respect. These aren't just stories — they're real people whose lives 
            were cut short. We focus on understanding what happened and why, not on glorifying violence.
          </p>

          <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">AI Transparency</h2>
          
          <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-[#c9a227]">Full disclosure:</strong> Suburban Shadows is an 
              AI-generated podcast. The host voice is synthesized using ElevenLabs technology. We believe 
              in complete transparency about our production methods.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The cases are real. The research is real. The facts are verified. Only the voice is synthetic. 
              We believe this approach allows us to cover more cases with consistent quality while being 
              upfront with our audience about how the show is made.
            </p>
          </div>

          <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">Your Host</h2>
          
          <p className="text-gray-400 leading-relaxed">
            <strong className="text-white">Marcus Cole</strong> is the AI-generated voice of Suburban 
            Shadows. His persona was designed to deliver these difficult stories with the gravity they 
            deserve — informative without being exploitative, engaging without being sensational.
          </p>

          <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">Content Warnings</h2>
          
          <p className="text-gray-400 leading-relaxed">
            Episodes contain discussions of murder, violence, and related crimes. Some episodes include 
            descriptions of violence against children. Listener discretion is advised. Specific content 
            warnings are provided at the beginning of relevant episodes.
          </p>

          <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">Contact</h2>
          
          <p className="text-gray-400 leading-relaxed">
            Have a case you'd like us to cover? Feedback on an episode? Reach out via our website's 
            contact form or connect with us on social media.
          </p>

          <div className="border-t border-[#1a1a1a] pt-8 mt-12">
            <p className="text-gray-500 text-sm">
              Suburban Shadows is independently produced. All cases are researched and fact-checked 
              before publication. We are not affiliated with any law enforcement agency.
            </p>
          </div>
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
              <Link href="/episodes" className="hover:text-white transition">Episodes</Link>
              <Link href="/about" className="hover:text-white transition">About</Link>
              <Link href="/api/podcast/feed" className="hover:text-white transition">RSS Feed</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
