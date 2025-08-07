'use client';

import { Building, Plane, GraduationCap, Users } from 'lucide-react';

const partners = [
  { name: 'University of Malta', type: 'University', icon: GraduationCap },
  { name: 'Malta College of Arts Science and Technology', type: 'College', icon: Building },
  { name: 'Mediterranean Hospitality Group', type: 'Hospitality', icon: Building },
  { name: 'SkyWings Airlines', type: 'Aviation', icon: Plane },
  { name: 'Blue Harbour Resorts', type: 'Hospitality', icon: Building },
  { name: 'Global Cabin Crew Academy', type: 'Training', icon: Users }
];

export default function Partners() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #CF142B 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4">
            <Building className="h-4 w-4 mr-2" />
            Our Partners
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Collaborating with Malta's
            <span className="text-red-600"> Premier Institutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Working with Malta's leading universities, vocational colleges, hospitality groups, and airlines
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group p-6 bg-gray-50 rounded-xl hover:bg-red-50 transition-all duration-500 hover:-translate-y-1 border border-gray-100 hover:border-red-200"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <partner.icon className="h-7 w-7 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-black group-hover:text-red-600 transition-colors mb-1">
                    {partner.name}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
                    {partner.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-600">6+</div>
            <div className="text-gray-600 font-medium">Key Partners</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-600">100%</div>
            <div className="text-gray-600 font-medium">Accredited</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-600">25+</div>
            <div className="text-gray-600 font-medium">Years Combined Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-600">Malta</div>
            <div className="text-gray-600 font-medium">Based Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}