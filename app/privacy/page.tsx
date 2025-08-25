'use client';

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";


export default function PrivacyPolicy() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-8">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            At BranchOut Consultancy Ltd (“BOCL”), we respect and protect your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your personal information.
          </p>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">1. Information We Collect</h2>
              <p className="text-gray-400">
                We may collect personal details such as your name, email, phone number, 
                and documents you provide during application processes for educational or 
                employment services in Malta.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
              <p className="text-gray-400">
                Your information is used to process applications, provide consultancy services, 
                support visa applications, and improve our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">3. Sharing of Information</h2>
              <p className="text-gray-400">
                We do not sell your data. Information may be shared with trusted partners such as 
                educational institutions, employers, and government agencies, strictly for 
                application processing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">4. Data Security</h2>
              <p className="text-gray-400">
                We implement strict measures to protect your personal data against unauthorized 
                access, disclosure, or loss.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">5. Your Rights</h2>
              <p className="text-gray-400">
                You have the right to access, update, or request deletion of your personal data. 
                To exercise these rights, please contact us at <span className="text-red-500">info@branchout.com</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
