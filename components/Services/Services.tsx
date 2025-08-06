'use client';

import { Briefcase, Award, GraduationCap, ArrowRight, Plane, Users, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Briefcase,
    title: 'Recruitment for Hospitality and Aviation',
    description: 'We handle in-country sourcing, psychometric tests, interviews and onboarding in full compliance with Maltese labour regulations and charge only upon successful hire',
    features: ['Psychometric Testing', 'Interview Coordination', 'Full Compliance', 'Success-Based Pricing'],
    color: 'from-red-600 to-red-700'
  },
  {
    icon: Award,
    title: 'Skills Card for Hospitality',
    description: 'A digital credential that verifies service excellence, guest relations and operations issued in collaboration with leading hotels and training providers and shareable to boost your employability',
    features: ['Digital Certification', 'Industry Recognition', 'Career Enhancement', 'Shareable Credentials'],
    color: 'from-black to-gray-800'
  },
  {
    icon: GraduationCap,
    title: 'Student Placement and Course Liaison',
    description: 'We maintain MOUs with Maltese colleges and universities for on-campus study, handle your application submissions, assist with visa guidance, appointment scheduling and provide ongoing support',
    features: ['University Partnerships', 'Visa Assistance', 'Application Support', 'Ongoing Guidance'],
    color: 'from-red-600 to-red-700'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #CF142B 25%, transparent 25%), 
                           linear-gradient(-45deg, #CF142B 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, #CF142B 75%), 
                           linear-gradient(-45deg, transparent 75%, #CF142B 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            <Briefcase className="h-4 w-4 mr-2" />
            Our Services
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Comprehensive Solutions for
            <span className="text-red-500"> Your Success</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From recruitment to education, we provide end-to-end services to ensure your Malta journey is seamless and successful
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="h-full p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-black/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-800">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action */}
                <Button 
                  variant="outline" 
                  className="w-full border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
}