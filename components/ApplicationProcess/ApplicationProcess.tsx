'use client';

import { FileText, CheckCircle, Plane, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Apply Online',
    description: 'Register, upload your transcripts, CV, passport copy and proof of English proficiency',
    details: ['Complete online application', 'Upload required documents', 'Submit academic records', 'Provide English proficiency proof']
  },
  {
    icon: CheckCircle,
    step: '02',
    title: 'Receive Conditional Offer',
    description: 'Partner institution reviews your application, issues a conditional acceptance letter and you pay the 150 euro application fee',
    details: ['Application review process', 'Conditional acceptance letter', '€150 application fee', 'Institution confirmation']
  },
  {
    icon: Plane,
    step: '03',
    title: 'Confirm and Visa',
    description: 'After fee payment you receive your final acceptance letter, book your embassy or VFS appointment and arrange health insurance and accommodation',
    details: ['Final acceptance letter', 'Embassy appointment booking', 'Health insurance arrangement', 'Accommodation planning']
  }
];

export default function ApplicationProcess() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            <FileText className="h-4 w-4 mr-2" />
            Application Process
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Simple Steps to
            <span className="text-red-500"> Your Malta Journey</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process makes it easy to apply and secure your place in Malta&apos;s top institutions
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
  

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-black/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-red-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-red-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-800">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

 
              </div>
            ))}
          </div>
        </div>

        {/* CTA
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            Begin Your Application
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}