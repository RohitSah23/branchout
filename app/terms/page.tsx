'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function TermsConditions() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-8">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Welcome to BranchOut Consultancy Ltd (“BOCL”). These Terms & Conditions govern your use of our website, services, 
            and any applications you submit through us. By accessing our services, you agree to comply with these terms.
          </p>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-400">
                By using our website and services, you acknowledge that you have read, understood, and agreed 
                to these Terms & Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">2. Services Provided</h2>
              <p className="text-gray-400">
                BOCL offers consultancy services related to education, employment, and relocation in Malta. 
                All services are subject to availability and eligibility requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">3. User Responsibilities</h2>
              <p className="text-gray-400">
                You agree to provide accurate and complete information when using our services. 
                Any false, incomplete, or misleading details may result in rejection of your application 
                or termination of services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">4. Payments & Fees</h2>
              <p className="text-gray-400">
                Certain services may require payment of fees. All fees are non-refundable unless otherwise 
                stated in writing by BOCL.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
              <p className="text-gray-400">
                BOCL shall not be held liable for delays, denials, or issues caused by third parties 
                such as government agencies, employers, or educational institutions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">6. Amendments</h2>
              <p className="text-gray-400">
                We reserve the right to modify these Terms & Conditions at any time. 
                Updates will be posted on our website with a revised “Last Updated” date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">7. Contact Us</h2>
              <p className="text-gray-400">
                For any questions regarding these terms, please contact us at{" "}
                <span className="text-red-500">contact page</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
