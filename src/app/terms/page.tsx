import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Suburban Shadows',
  description: 'Terms of service and conditions of use for Suburban Shadows.',
};

export default function TermsPage() {
  const siteName = 'Suburban Shadows';
  const siteDomain = 'suburbanshadows.com';
  const contactEmail = 'hello@suburbanshadows.com';
  const lastUpdated = 'February 2026';
  const includeAIDisclaimer = true;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using {siteName} ({siteDomain}), you agree to be bound by these Terms 
              of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Use of Our Website</h2>
            <p>You agree to use our website only for lawful purposes and in a way that does not:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Infringe the rights of others</li>
              <li>Restrict or inhibit anyone else&apos;s use of the website</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit harmful code, spam, or malicious content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p>
              All content on this website—including text, graphics, logos, images, and software—is 
              the property of {siteName} or its content suppliers and is protected by copyright and 
              other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from our content 
              without explicit written permission.
            </p>
          </section>

          {includeAIDisclaimer && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">AI-Generated Content Disclaimer</h2>
              <p>
                Some content on this website may be created or assisted by artificial intelligence 
                tools. While we strive for accuracy and quality:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>AI-generated content may contain errors or inaccuracies</li>
                <li>Information should be independently verified before making decisions</li>
                <li>We do not guarantee the completeness or reliability of AI-assisted content</li>
                <li>Content is provided for informational purposes only</li>
              </ul>
              <p className="mt-4">
                We clearly label content that is primarily AI-generated where appropriate.
              </p>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-semibold mb-4">Product Recommendations &amp; Affiliate Links</h2>
            <p>
              Our product recommendations are based on research and evaluation, but we make no 
              guarantees about product quality, availability, or pricing. Prices and availability 
              are subject to change.
            </p>
            <p>
              We participate in affiliate programs and may earn commissions from purchases made 
              through our links. See our <a href="/affiliate-disclosure" className="text-primary hover:underline">Affiliate Disclosure</a> for details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
            <p>
              This website is provided &quot;as is&quot; and &quot;as available&quot; without any 
              warranties of any kind, either express or implied, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Implied warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Accuracy, reliability, or completeness of content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {siteName} shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, or any loss of 
              profits or revenues, whether incurred directly or indirectly, or any loss of data, 
              use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your use or inability to use our website</li>
              <li>Any content obtained from our website</li>
              <li>Unauthorized access to or alteration of your transmissions or data</li>
              <li>Any third-party conduct or content on our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not 
              responsible for the content, privacy policies, or practices of any third-party 
              sites. We encourage you to review the terms and privacy policies of any site you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of 
              material changes by updating the &quot;Last updated&quot; date. Continued use of 
              the website after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the 
              State of California, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:{' '}
              <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
                {contactEmail}
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
