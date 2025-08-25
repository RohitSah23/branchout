'use client';

import { Briefcase, Award, GraduationCap, ArrowRight, Building2, Laptop } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Recruitment for Hospitality and Aviation',
    description:
      'We handle in-country sourcing, psychometric tests, interviews and onboarding in full compliance with Maltese labour regulations and charge only upon successful hire',
    features: ['Psychometric Testing', 'Interview Coordination', 'Full Compliance', 'Success-Based Pricing'],
    color: 'from-red-600 to-red-700',
  },
  {
    icon: Award,
    title: 'Skills Card for Hospitality',
    description:
      'A digital credential that verifies service excellence, guest relations and operations issued in collaboration with leading hotels and training providers and shareable to boost your employability',
    features: ['Digital Certification', 'Industry Recognition', 'Career Enhancement', 'Shareable Credentials'],
    color: 'from-black to-gray-800',
  },
  {
    icon: GraduationCap,
    title: 'Student Placement and Course Liaison',
    description:
      'We maintain MOUs with Maltese colleges and universities for on-campus study, handle your application submissions, assist with visa guidance, appointment scheduling and provide ongoing support',
    features: ['University Partnerships', 'Visa Assistance', 'Application Support', 'Ongoing Guidance'],
    color: 'from-red-600 to-red-700',
  },
  {
    icon: Building2,
    title: 'Consultancy',
    description:
      'Our expert advisors provide personalized consultancy for career planning, education pathways, and compliance guidance to help you make informed decisions for a successful future in Malta.',
    features: ['Career Guidance', 'Education Pathways', 'Regulatory Compliance', 'Personalized Roadmaps'],
    color: 'from-gray-700 to-gray-900',
  },
  {
    icon: Laptop,
    title: 'Software Services',
    description:
      'We deliver custom software solutions tailored for education, recruitment, and business management. Our services include system integration, automation, and digital transformation.',
    features: ['Custom Software', 'Automation Tools', 'System Integration', 'Digital Transformation'],
    color: 'from-red-500 to-red-700',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            <Briefcase className="h-4 w-4 mr-2" />
            Our Services
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Comprehensive Solutions for <span className="text-red-500">Your Success</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From recruitment to education, we provide end-to-end services to ensure your Malta journey is seamless and successful
          </p>
        </div>

        {/* Desktop (lg) layout */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-16">
          {/* First row (3 cards) */}
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group relative">
                <div className="h-full p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-black/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-800">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

           
                </div>

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            );
          })}

          {/* Second row (2 centered cards) */}
          <div className="col-span-3 flex justify-center gap-8">
            {services.slice(3).map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="w-full max-w-sm group relative">
                  <div className="h-full p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-black/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4 group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-800">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
              
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet (md) layout */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 mb-16">
          {services.slice(0, 4).map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group relative">
                <div className="h-full p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-black/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-800">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                 
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            );
          })}
          {/* Last card centered */}
          <div className="col-span-2 flex justify-center">
            {(() => {
              const service = services[4];
              const Icon = service.icon;
              return (
                <div className="w-full max-w-sm group relative">
                  <div className="h-full p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-black/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4 group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-800">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                   
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Mobile (<md) layout */}
        <div className="grid grid-cols-1 gap-8 mb-16 md:hidden">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group relative">
                <div className="h-full p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-black/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-800">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
           
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
