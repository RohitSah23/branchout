import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top footer links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-red-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-red-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 dark:text-gray-400 hover:text-red-600">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-600 dark:text-gray-400 hover:text-red-600">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-600 dark:text-gray-400 hover:text-red-600">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-red-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-red-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-red-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer info */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center sm:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Branch Out Consultancy Services Limited, incorporated in Malta on 12 August 2025, Registration No. C 112890.
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Branch Out Consultancy Services Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
