'use client';

import Image from 'next/image';
import {
  Target,
  Users,
  Globe,
  Award,
  Heart,
  Scale,
  CheckCircle
} from 'lucide-react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const values = [
  {
    icon: Heart,
    title: 'Self Responsibility and Integrity',
    description:
      'We uphold the highest standards of personal accountability and ethical conduct in every interaction and decision.'
  },
  {
    icon: Users,
    title: 'Democracy and Equality',
    description:
      'We believe in fair treatment and equal opportunities for all, fostering an inclusive environment for success.'
  },
  {
    icon: Scale,
    title: 'Equity and Solidarity',
    description:
      'We stand together with our clients, ensuring fair access to opportunities and supporting collective success.'
  }
];

const objectives = [
  "Facilitate seamless student placements in Malta’s premier educational institutions",
  'Provide comprehensive recruitment solutions for hospitality and aviation sectors',
  'Ensure 100% legal compliance with Maltese immigration and employment regulations',
  'Deliver end-to-end support from application to successful settlement',
  'Maintain transparent and ethical business practices in all partnerships',
  'Create sustainable pathways for international talent to thrive in Malta'
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-red-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-red-900/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            About <span className="text-red-400">Branch Out</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in Malta’s education and employment landscape, building bridges to success since our inception.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                  <Target className="h-4 w-4 mr-2" />
                  Our Story
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                  Connecting Dreams with
                  <span className="text-red-600"> Maltese Opportunities</span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Branch Out Consultancy (BOCL) was founded with a clear mission: to bridge the gap between international talent and Malta’s thriving educational and employment sectors. With over 25 years of combined HR and global partnership expertise, we have established ourselves as Malta’s premier consultancy for international students and skilled professionals.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <Users className="h-12 w-12 text-red-600 mb-4" />
                  <h4 className="text-lg font-bold text-black mb-2">25+ Years</h4>
                  <p className="text-gray-600">Combined expertise in HR and international partnerships</p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <Globe className="h-12 w-12 text-red-600 mb-4" />
                  <h4 className="text-lg font-bold text-black mb-2">Global Reach</h4>
                  <p className="text-gray-600">Connecting talent worldwide with Malta’s opportunities</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
                alt="Malta Business District"
                width={800}
                height={600}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Malta’s Business Hub</h3>
                <p className="text-white/90">Where European opportunity meets Mediterranean lifestyle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              The Challenge We <span className="text-red-600">Solve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigating Malta’s education and employment landscape can be complex. We simplify the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Complex Regulations',
                desc: 'Malta’s visa and employment regulations can be overwhelming for international applicants.'
              },
              {
                icon: Users,
                title: 'Limited Networks',
                desc: 'International students and professionals often lack local connections and insights.'
              },
              {
                icon: Award,
                title: 'Quality Assurance',
                desc: 'Ensuring placements meet high standards and compliance requirements is crucial.'
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Our <span className="text-red-400">Solution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide a comprehensive, legally compliant pathway to success in Malta’s education and employment sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-400">Vehicle to Success</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Branch Out Consultancy serves as your dedicated vehicle to success in Malta. We combine deep local knowledge with international best practices to ensure every placement is not just successful, but transformative.
              </p>

              <div className="space-y-4">
                {[
                  'End-to-end application support',
                  'Legal compliance guarantee',
                  'Ongoing settlement support',
                  'Premium partner network'
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-400" />
                    <span className="text-gray-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
                alt="Malta Success"
                width={800}
                height={500}
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Values at <span className="text-red-600">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values aren’t just words—they’re the foundation of every interaction and decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Our <span className="text-red-600">Objectives</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear goals that drive our commitment to excellence in every client relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-medium">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Malta <span className="text-red-400">Operations</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Based in Valletta, our Malta operations serve as the central hub for all client services. Our local team provides on-ground support, maintains relationships with partner institutions, and ensures compliance with all Maltese regulations.
              </p>
              <div className="space-y-4">
                {[
                  'Local expertise and market knowledge',
                  'Direct partnerships with institutions',
                  'Regulatory compliance monitoring'
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-400" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8">
                Foreign <span className="text-red-400">Operations</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our international operations extend our reach globally, connecting with students and professionals worldwide. We maintain strategic partnerships and representation in key markets to facilitate seamless application processes.
              </p>
              <div className="space-y-4">
                {[
                  'Global recruitment networks',
                  'International partnerships',
                  'Multi-language support services'
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-400" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
