'use client';

import { MapPin, Sun, Users, Plane, Briefcase, Shield } from 'lucide-react';

const benefits = [
  {
    icon: MapPin,
    title: 'Mediterranean Hub',
    description: 'Picturesque location with rich history, UNESCO sites, and year-round sunshine with vibrant student community'
  },
  {
    icon: Shield,
    title: 'Accredited Education',
    description: 'On-campus education through partner institutions across MQF Levels 1 to 8 with full accreditation'
  },
  {
    icon: Users,
    title: 'English Speaking',
    description: 'English speaking instruction in one of Europe\'s safest countries with welcoming communities'
  },
  {
    icon: Plane,
    title: 'Strategic Location',
    description: 'Central location for easy travel to Europe, North Africa, and the Middle East'
  },
  {
    icon: Briefcase,
    title: 'Work Opportunities',
    description: 'Legal part-time work for students and EU-wide career opportunities after graduation'
  },
  {
    icon: Sun,
    title: 'Quality of Life',
    description: 'Excellent climate, safety, and lifestyle in the heart of the Mediterranean'
  }
];

export default function WhyMalta() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-red-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            <MapPin className="h-4 w-4 mr-2" />
            Why Choose Malta
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Your Gateway to 
            <span className="text-red-600"> European Success</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why Malta is the perfect destination for your educational and career aspirations
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-red-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Malta Flag Element */}
    {/* Malta Flag Element */}
<div className="mt-16 text-center">
  <div className="inline-flex items-center justify-center w-20 h-14 rounded-lg overflow-hidden shadow-lg mx-auto mb-4">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg"
      alt="Malta Flag"
      className="w-full h-full object-cover"
    />
  </div>
  <p className="text-gray-500 text-sm font-medium">
    Proud to serve Malta's international community
  </p>
</div>

      </div>
    </section>
  );
}