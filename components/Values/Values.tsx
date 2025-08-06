'use client';

import { Heart, Users, Scale } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Self Responsibility and Integrity',
    description: 'We uphold the highest standards of personal accountability and ethical conduct in every interaction and decision.'
  },
  {
    icon: Users,
    title: 'Democracy and Equality',
    description: 'We believe in fair treatment and equal opportunities for all, fostering an inclusive environment for success.'
  },
  {
    icon: Scale,
    title: 'Equity and Solidarity',
    description: 'We stand together with our clients, ensuring fair access to opportunities and supporting collective success.'
  }
];

export default function Values() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-red-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            <Heart className="h-4 w-4 mr-2" />
            Our Values
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Principles That Guide
            <span className="text-red-600"> Every Partnership</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These fundamental values guide every placement and partnership we create
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-red-200"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <value.icon className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white">
            <blockquote className="text-xl lg:text-2xl font-medium italic">
              "Our commitment to these values ensures that every student and professional we support 
              receives the highest standard of service and care throughout their Malta journey."
            </blockquote>
            <cite className="block mt-4 text-red-200 font-semibold">Branch Out Consultancy Team</cite>
          </div>
        </div>
      </div>
    </section>
  );
}