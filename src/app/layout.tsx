import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import './globals.css'
import { ExitIntentPopup } from '@/components/ExitIntentPopup'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Suburban Shadows — True Crime Podcast',
  description: 'Dark mysteries hidden behind manicured lawns and white picket fences. A true crime podcast exploring the secrets buried in suburban America.',
  keywords: ['true crime', 'podcast', 'suburban mysteries', 'cold cases', 'murder', 'investigation'],
  verification: {
    google: 'ITaKPnsxnWJV5K6a7SC4pdqyJyS6vwzRdFnam0g751U',
  },
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
      <body className="bg-[#0a0a0a] text-[#e5e5e5]">
        <GoogleAnalytics />
        {children}
        <ExitIntentPopup
          siteName="SuburbanShadows"
          headline="🔦 Wait! Get Exclusive Case Files"
          description="New episodes, cold case updates, and behind-the-scenes content delivered weekly."
          buttonText="Subscribe Free"
          accentColor="#991b1b"
        />
      </body>
    </html>
  )
}
