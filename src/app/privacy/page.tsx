import { FC } from "react";

const PrivacyPolicyPage: FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Introduction</h2>
        <p className="text-lg">
          Your privacy is important to us. This privacy policy explains how we
          collect, use, and protect your personal information in accordance with
          the General Data Protection Regulation (GDPR) and applicable USA laws.
          Our service connects customers with service providers, which
          necessitates the collection and exchange of personal data.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          2. Information We Collect
        </h2>
        <p className="mt-4">
          We collect personal data from both customers and service providers,
          including but not limited to:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Name, contact information, and address</li>
          <li>Service preferences and requirements</li>
          <li>
            Professional qualifications and experience (for service providers)
          </li>
          <li>Payment information</li>
          <li>Communication history within our platform</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          3. How We Use Your Information
        </h2>
        <p className="mt-4">
          We use your personal data for the following purposes:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Facilitating connections between customers and service providers
          </li>
          <li>Processing transactions and payments</li>
          <li>Improving our matching algorithms and service quality</li>
          <li>Communicating important service updates</li>
          <li>Resolving disputes and addressing concerns</li>
          <li>Complying with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Data Sharing</h2>
        <p className="mt-4">
          To provide our service, we share relevant personal data between
          customers and service providers. This may include:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Customer details shared with matched service providers</li>
          <li>
            Service provider profiles and credentials shared with potential
            customers
          </li>
          <li>Communication facilitated through our platform</li>
        </ul>
        <p className="mt-4">
          We do not sell your personal data to third parties. Any sharing is
          strictly for the purpose of facilitating our service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          5. Legal Basis for Processing
        </h2>
        <p className="mt-4">
          We process your data based on the following legal grounds:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Performance of a contract when you use our service</li>
          <li>Your consent, which you can withdraw at any time</li>
          <li>
            Our legitimate interests in providing and improving our service
          </li>
          <li>Compliance with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Your Rights</h2>
        <p className="mt-4">
          Under GDPR and applicable laws, you have the right to:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Access your personal data</li>
          <li>Rectify inaccurate personal data</li>
          <li>Erase your personal data (with certain limitations)</li>
          <li>Restrict processing of your personal data</li>
          <li>Data portability</li>
          <li>Object to processing of your personal data</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Data Security</h2>
        <p className="mt-4">
          We implement appropriate technical and organizational measures to
          ensure a level of security appropriate to the risk, including
          encryption, access controls, and regular security assessments.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          8. International Data Transfers
        </h2>
        <p className="mt-4">
          If we transfer your data outside the EU/EEA or USA, we ensure
          appropriate safeguards are in place in compliance with GDPR and
          applicable laws.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          9. Changes to This Policy
        </h2>
        <p className="mt-4">
          We may update this privacy policy from time to time. We will notify
          you of any significant changes by posting the new privacy policy on
          this page and updating the effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">10. Contact Us</h2>
        <p className="mt-4">
          If you have any questions about this privacy policy or wish to
          exercise your rights, please contact us at [Your Contact Information].
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
