import Link from 'next/link'
import { Header } from '@/components/Header'
import { SubscribeForm } from '@/components/SubscribeForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Listen & Subscribe | Suburban Shadows',
  description: 'Subscribe to Suburban Shadows on your favorite podcast platform.',
}

export default function ListenPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Listen & Subscribe</h1>
          <p className="text-gray-400 text-lg">
            Never miss an episode. Subscribe on your favorite platform.
          </p>
        </div>

        {/* Podcast Platforms */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <a 
            href="#" 
            className="flex items-center gap-4 bg-[#111111] border border-[#1a1a1a] rounded-lg p-4 hover:border-[#333] transition group"
          >
            <span className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
              🎧
            </span>
            <div>
              <div className="text-white font-medium group-hover:text-[#c9a227] transition">Apple Podcasts</div>
              <div className="text-gray-500 text-sm">Coming soon</div>
            </div>
          </a>

          <a 
            href="#" 
            className="flex items-center gap-4 bg-[#111111] border border-[#1a1a1a] rounded-lg p-4 hover:border-[#333] transition group"
          >
            <span className="w-12 h-12 bg-[#1DB954] rounded-xl flex items-center justify-center text-2xl">
              🟢
            </span>
            <div>
              <div className="text-white font-medium group-hover:text-[#c9a227] transition">Spotify</div>
              <div className="text-gray-500 text-sm">Coming soon</div>
            </div>
          </a>

          <a 
            href="#" 
            className="flex items-center gap-4 bg-[#111111] border border-[#1a1a1a] rounded-lg p-4 hover:border-[#333] transition group"
          >
            <span className="w-12 h-12 bg-[#FF0000] rounded-xl flex items-center justify-center text-2xl">
              ▶️
            </span>
            <div>
              <div className="text-white font-medium group-hover:text-[#c9a227] transition">YouTube</div>
              <div className="text-gray-500 text-sm">Coming soon</div>
            </div>
          </a>

          <a 
            href="/api/podcast/feed" 
            target="_blank"
            className="flex items-center gap-4 bg-[#111111] border border-[#1a1a1a] rounded-lg p-4 hover:border-[#333] transition group"
          >
            <span className="w-12 h-12 bg-[#c9a227] rounded-xl flex items-center justify-center text-2xl">
              📡
            </span>
            <div>
              <div className="text-white font-medium group-hover:text-[#c9a227] transition">RSS Feed</div>
              <div className="text-gray-500 text-sm">For podcast apps</div>
            </div>
          </a>
        </div>

        {/* Direct Listen */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 mb-12">
          <h2 className="font-serif text-xl font-bold text-white mb-4">Listen Now</h2>
          <p className="text-gray-400 mb-4">
            Don't have a podcast app? Listen directly on our website:
          </p>
          <Link 
            href="/episodes" 
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black px-6 py-3 rounded-full font-medium hover:bg-[#d4ad2d] transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
            Browse Episodes
          </Link>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#c9a227]/30 rounded-lg p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-3">Get Episode Alerts</h2>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter for new episode notifications, case updates, and behind-the-scenes content.
          </p>
          <SubscribeForm source="listen-page" buttonText="Subscribe" darkMode={true} />
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
