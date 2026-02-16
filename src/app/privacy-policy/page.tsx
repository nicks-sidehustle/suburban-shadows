import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Suburban Shadows',
  description: 'Privacy policy and data handling practices for Suburban Shadows.',
};

export default function PrivacyPolicyPage() {
  const siteName = 'Suburban Shadows';
  const siteDomain = 'suburbanshadows.com';
  const contactEmail = 'hello@suburbanshadows.com';
  const lastUpdated = 'February 2026';

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              {siteName} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed 
              to protecting your personal data. This privacy policy explains how we collect, use, and safeguard 
              your information when you visit {siteDomain}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            
            <h3 className="text-lg font-medium mt-4 mb-2">Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email address (when subscribing to our newsletter)</li>
              <li>Any information you voluntarily submit through contact forms</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-2">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Browser type and version</li>
              <li>Device information and screen resolution</li>
              <li>IP address and approximate location</li>
              <li>Pages visited, time spent, and navigation paths</li>
              <li>Referring website or source</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and improve our content and services</li>
              <li>To send newsletters and updates (only with your consent)</li>
              <li>To analyze website usage and optimize user experience</li>
              <li>To detect and prevent fraud or abuse</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies &amp; Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar technologies to enhance your experience and analyze site traffic.
            </p>
            
            <h3 className="text-lg font-medium mt-4 mb-2">Types of Cookies We Use</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Essential:</strong> Required for basic website functionality</li>
              <li><strong>Analytics:</strong> Help us understand how visitors use our site (Google Analytics)</li>
              <li><strong>Marketing:</strong> Support our affiliate partnerships</li>
            </ul>
            
            <p className="mt-4">
              You can manage cookie preferences through your browser settings or our cookie consent banner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="mb-4">We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Google Analytics:</strong> Website analytics and traffic analysis</li>
              <li><strong>Brevo:</strong> Email newsletter delivery</li>
              <li><strong>Amazon Associates:</strong> Affiliate product links</li>
              <li><strong>Vercel:</strong> Website hosting</li>
            </ul>
            <p className="mt-4">
              Each service has its own privacy policy governing the use of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Affiliate Marketing Disclosure</h2>
            <p>
              {siteName} participates in affiliate marketing programs, including the Amazon Services LLC 
              Associates Program. We may earn commissions from qualifying purchases made through our 
              affiliate links at no additional cost to you. Our recommendations are based on genuine 
              research and evaluation—affiliate relationships do not influence our editorial content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
            
            <h3 className="text-lg font-medium mt-4 mb-2">All Users</h3>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-2">California Residents (CCPA/CPRA)</h3>
            <p>If you are a California resident, you have additional rights:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Right to Know:</strong> Request details about personal information collected</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of sale/sharing of personal information</li>
              <li><strong>Right to Non-Discrimination:</strong> Equal service regardless of privacy choices</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-2">European Users (GDPR)</h3>
            <p>If you are in the EU/EEA, you have rights under GDPR including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Right to access, rectification, and erasure</li>
              <li>Right to restrict or object to processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary to fulfill the purposes 
              outlined in this policy, unless a longer retention period is required by law. Newsletter 
              subscriptions are retained until you unsubscribe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13. We do not knowingly collect personal 
              information from children. If you believe we have collected information from a child, 
              please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any material 
              changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, 
              please contact us at:{' '}
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
