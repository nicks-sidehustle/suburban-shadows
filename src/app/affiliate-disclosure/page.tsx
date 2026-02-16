import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure - Suburban Shadows',
  description: 'Our affiliate disclosure and how we make money while keeping content honest.',
};

export default function AffiliateDisclosurePage() {
  const siteName = 'Suburban Shadows';
  const lastUpdated = 'February 2026';

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-2">Affiliate Disclosure</h1>
        <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          
          <p className="text-xl text-muted-foreground">
            Transparency matters. Here&apos;s how {siteName} works and how we keep the lights on.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Make Money</h2>
            <p>
              {siteName} is a participant in the <strong>Amazon Services LLC Associates Program</strong>, 
              an affiliate advertising program designed to provide a means for sites to earn advertising 
              fees by advertising and linking to Amazon.com and affiliated sites.
            </p>
            <p>
              When you click on product links on our site and make a purchase, we may earn a small 
              commission at <strong>no additional cost to you</strong>. This helps us keep the site 
              running, pay for hosting, and continue providing free content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Editorial Independence</h2>
            <p>
              <strong>Our content and recommendations are never influenced by affiliate relationships.</strong>
            </p>
            <p>
              We recommend products and services we genuinely believe provide value. If something 
              isn&apos;t good, we&apos;ll tell you—even if it means we don&apos;t earn a commission.
            </p>
            <p>
              We never accept payment for positive reviews or recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What This Means for You</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You pay the <strong>same price</strong> whether you use our links or not</li>
              <li>Our recommendations are based on <strong>genuine research and evaluation</strong></li>
              <li>Product links that may earn us a commission are clearly labeled</li>
              <li>We <strong>never accept payment</strong> for positive coverage</li>
              <li>Using our links is a free way to support our work</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Affiliate Programs We Participate In</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Amazon Associates</li>
              <li>Other retail affiliate programs as applicable</li>
              <li>Software/service referral programs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">FTC Disclosure</h2>
            <p>
              In accordance with the Federal Trade Commission&apos;s 16 CFR Part 255, &quot;Guides 
              Concerning the Use of Endorsements and Testimonials in Advertising,&quot; we disclose 
              that we may receive compensation for products purchased through links on this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
            <p>
              If you have any questions about our affiliate relationships or how we make money, 
              we&apos;re happy to explain. Transparency builds trust.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
