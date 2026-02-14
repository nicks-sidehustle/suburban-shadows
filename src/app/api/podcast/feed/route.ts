// Podcast RSS Feed for Suburban Shadows

const SITE_URL = 'https://suburban-shadows.vercel.app'
const PODCAST_TITLE = 'Suburban Shadows'
const PODCAST_DESCRIPTION = 'Dark mysteries hidden behind manicured lawns and white picket fences. A true crime podcast exploring the secrets buried in suburban America.'
const PODCAST_AUTHOR = 'Suburban Shadows'
const PODCAST_EMAIL = 'podcast@suburbanshadows.com'
const PODCAST_IMAGE = `${SITE_URL}/podcast-cover.png`
const PODCAST_CATEGORY = 'True Crime'
const PODCAST_SUBCATEGORY = ''

const episodes = [
  {
    number: 4,
    title: "The Applegate Jane Doe",
    description: "Patricia Rose: For 28 years she was nameless — 'Applegate Jane Doe,' found in the foothills near Auburn. A young woman murdered, buried in a shallow grave. In 2024, genetic genealogy finally gave her back her name. But her killer? Still out there.",
    duration: "13:20",
    durationSeconds: 800,
    date: "2026-02-14",
    file: "ep004-applegate-jane-doe.mp3",
    fileSize: 11060258,
    slug: "applegate-jane-doe"
  },
  {
    number: 3,
    title: "The Love Slave Killers",
    description: "Gerald and Charlene Gallego: A husband-wife killing team who terrorized Sacramento in the early 1980s. Ten victims. Sex slaves. A killing spree across California and Nevada. And the wife who testified against her husband to save herself.",
    duration: "15:08",
    durationSeconds: 908,
    date: "2026-02-14",
    file: "ep003-love-slave-killers.mp3",
    fileSize: 12897023,
    slug: "love-slave-killers"
  },
  {
    number: 2,
    title: "The Family Next Door",
    description: "The Chris Watts Case: A fitness-obsessed father who murdered his pregnant wife and two daughters in Frederick, Colorado — then went on TV pleading for their safe return. He forced his children's bodies through eight-inch hatches into crude oil tanks.",
    duration: "10:05",
    durationSeconds: 605,
    date: "2026-02-12",
    file: "ep002-family-next-door.mp3",
    fileSize: 8498402,
    slug: "family-next-door"
  },
  {
    number: 1,
    title: "The Ballroom Bodies",
    description: "The John List Case: A Sunday school teacher who methodically murdered his entire family, then vanished for 18 years. The house sat lit for a month, hymns playing on repeat, while five bodies decomposed in the ballroom.",
    duration: "11:01",
    durationSeconds: 661,
    date: "2026-02-12",
    file: "ep001-ballroom-bodies.mp3",
    fileSize: 9407373,
    slug: "ballroom-bodies"
  },
]

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function formatRFC2822(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00Z')
  return date.toUTCString()
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `00:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

export async function GET() {
  const sortedEpisodes = [...episodes].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:podcast="https://podcastindex.org/namespace/1.0">
  <channel>
    <title>${escapeXml(PODCAST_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(PODCAST_DESCRIPTION)}</description>
    <language>en-us</language>
    <copyright>© 2025-2026 Suburban Shadows</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/api/podcast/feed" rel="self" type="application/rss+xml"/>
    
    <itunes:author>${escapeXml(PODCAST_AUTHOR)}</itunes:author>
    <itunes:summary>${escapeXml(PODCAST_DESCRIPTION)}</itunes:summary>
    <itunes:type>episodic</itunes:type>
    <itunes:owner>
      <itunes:name>${escapeXml(PODCAST_AUTHOR)}</itunes:name>
      <itunes:email>${PODCAST_EMAIL}</itunes:email>
    </itunes:owner>
    <itunes:explicit>true</itunes:explicit>
    <itunes:category text="${PODCAST_CATEGORY}"/>
    <itunes:image href="${PODCAST_IMAGE}"/>
    
    <image>
      <url>${PODCAST_IMAGE}</url>
      <title>${escapeXml(PODCAST_TITLE)}</title>
      <link>${SITE_URL}</link>
    </image>

${sortedEpisodes.map(ep => `    <item>
      <title>${escapeXml(ep.title)}</title>
      <description>${escapeXml(ep.description)}</description>
      <link>${SITE_URL}/episodes/${ep.slug}</link>
      <guid isPermaLink="false">suburban-shadows-ep${ep.number}</guid>
      <pubDate>${formatRFC2822(ep.date)}</pubDate>
      <enclosure url="${SITE_URL}/podcast/${ep.file}" length="${ep.fileSize}" type="audio/mpeg"/>
      <itunes:title>${escapeXml(ep.title)}</itunes:title>
      <itunes:summary>${escapeXml(ep.description)}</itunes:summary>
      <itunes:duration>${formatDuration(ep.durationSeconds)}</itunes:duration>
      <itunes:episode>${ep.number}</itunes:episode>
      <itunes:episodeType>full</itunes:episodeType>
      <itunes:explicit>true</itunes:explicit>
    </item>`).join('\n')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
