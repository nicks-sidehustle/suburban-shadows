import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Suburban Shadows — True Crime Podcast',
  description: 'Dark mysteries hidden behind manicured lawns and white picket fences. A true crime podcast exploring the secrets buried in suburban America.',
  keywords: ['true crime', 'podcast', 'suburban mysteries', 'cold cases', 'murder', 'investigation'],
  openGraph: {
    title: 'Suburban Shadows',
    description: 'Dark mysteries hidden behind manicured lawns.',
    type: 'website',
    url: 'https://suburbanshadows.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suburban Shadows',
    description: 'Dark mysteries hidden behind manicured lawns.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* GA4 will be added after setup */}
      </head>
      <body className="bg-[#0a0a0a] text-[#e5e5e5]">{children}</body>
    </html>
  )
}
