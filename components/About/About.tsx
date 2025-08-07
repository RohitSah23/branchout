'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #CF142B 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                <Target className="h-4 w-4 mr-2" />
                About Branch Out Consultancy
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Your Trusted Partner for 
                <span className="text-red-600"> Malta Success</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Branch Out Consultancy (BOCL) connects international students and skilled professionals 
                with Malta&apos;s leading educational institutions and companies. With over 25 years of HR 
                and global partnership expertise, we ensure every placement succeeds legally, transparently, 
                and efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors duration-300 group">
                <Users className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold text-black mb-2">Expert Team</h4>
                <p className="text-gray-600">25+ years of combined experience in HR and international partnerships</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors duration-300 group">
                <Globe className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold text-black mb-2">Global Reach</h4>
                <p className="text-gray-600">Connecting talent worldwide with Malta&apos;s premier opportunities</p>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              Read Our Full Story
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image 
                src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg" 
                alt="Malta Architecture" 
                width={900}
                height={600}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Malta Awaits You</h3>
                <p className="text-white/90">Your gateway to European education and career opportunities</p>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-xl shadow-2xl border border-red-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">100%</div>
                <div className="text-sm font-semibold text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
