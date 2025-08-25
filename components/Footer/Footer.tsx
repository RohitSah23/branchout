'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '#services' },
  { name: 'Courses', href: '#courses' },
  { name: 'Contact Us', href: '/contact' },
  // { name: 'Privacy Policy', href: '/privacy' }
];
import Logo from '../../app/assets/Logo.png';
import Image from 'next/image';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/branchoutco', icon: Linkedin },
  // { name: 'Twitter', href: '#', icon: Twitter },
  // { name: 'Facebook', href: '#', icon: Facebook }
];

export default function Footer() {
  return (
    <footer className="bg-[#242424] text-white relative overflow-hidden ">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(207, 20, 43, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(207, 20, 43, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
       
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image src={Logo} alt="Branch Out Consultancy" width={50} height={50} />
              <div>
                <span className="font-bold text-xl text-white">Branch Out</span>
                <div className="text-red-400 text-sm font-medium">Consultancy</div>
              </div>
            </Link>

            <p className="text-gray-300 leading-relaxed">
              Your trusted bridge to Maltese education and employment opportunities, 
              ensuring legal, transparent, and efficient placements.
            </p>

        
         <div className="flex items-center space-x-2">
  <div className="w-8 h-6 rounded overflow-hidden shadow-md">
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg"
      alt="Malta Flag"
      width={32}
      height={24}
      className="w-full h-full object-cover"
    />
  </div>
  <span className="text-gray-400 text-sm">Proudly serving Malta</span>
</div>

          </div>

      
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

      
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>47B South Street</div>
                  <div>Valletta VLT 1100</div>
                  <div>Malta</div>
                </div>
              </div>

              {/* <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <Link
                  href="tel:+35679416447"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  +356 7941 6447
                </Link>
              </div> */}

              {/* <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <Link
                  href="mailto:consultancybranchout@gmail.com"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  consultancybranchout@gmail.com
                </Link>
              </div> */}

              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-red-400 flex-shrink-0" />
                <Link
                  href="https://branchoutco.com/"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  https://branchoutco.com/
                </Link>
              </div>
            </div>
          </div>

      
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </Link>
              ))}
            </div>

            <div className="text-gray-400 text-sm">
              <div className="font-semibold mb-2">Office Hours:</div>
              <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
              <div>Saturday: 10:00 AM - 2:00 PM</div>
            </div>
          </div>
        </div>

      
     <div className="border-t border-white/10 rounded-2xl px-6 py-6 text-gray-400 text-sm ">
  {/* Registration Details */}
  <div className="text-center flex flex-col items-center space-y-2">
    Branch Out Consultancy Services Limited, incorporated in Malta on 12 August 2025, Registration No. C 112890.
  </div>

  {/* Space */}
  <div className="my-4 border-t border-white/10"></div>

  {/* Bottom Row */}
  <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
    <div>
      © 2025 Branch Out Consultancy Services Ltd. All rights reserved.
    </div>
    <div className="flex items-center space-x-6">
      <Link href="/privacy" className="hover:text-red-400 transition-colors">
        Privacy Policy
      </Link>
      <Link href="/terms" className="hover:text-red-400 transition-colors">
        Terms of Service
      </Link>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
}
