import Image from "next/image";
import { Users, Globe } from "lucide-react";
import CEOImg from "@/app/assets/CEO.png";

const team = [
  {
    name: "Anmol Bajwa",
    role: "Student and Employer Liaison Lead",
    description:
      "Connecting students with opportunities and maintaining employer relationships",
    specialty: "Student Relations",
    icon: Users,
    order: "lg:order-1",
  },
  {
    name: "Dr Anton Callus",
    role: "CEO",
    description:
      "Leading Malta operations with extensive HR expertise and local market knowledge",
    specialty: "HR & Operations",
    image: CEOImg,
    order: "lg:order-2",
  },
  {
    name: "Gulzar Bajwa",
    role: "Global Partnerships and Business Strategy Lead",
    description:
      "Developing strategic partnerships and expanding global business opportunities",
    specialty: "Strategy & Partnerships",
    icon: Globe,
    order: "lg:order-3",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-red-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%), 
                               linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%), 
                               linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%), 
                               linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%)`,
            backgroundSize: "80px 80px",
            backgroundPosition: "0 0, 0 40px, 40px -40px, -40px 0px"
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Our Team
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Meet the Experts Behind
            <span className="text-red-400"> Your Success</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our experienced team combines local Malta expertise with global partnership knowledge
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className={`group relative ${member.order}`}>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 h-full">
                
                {/* Square Photo for CEO, Icons for Others */}
                <div
                  className={`${
                    member.image
                      ? "w-28 h-28 mx-auto"
                      : "w-16 h-16"
                  } bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden`}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <member.icon className="h-8 w-8 text-white" />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4 text-center">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                      {member.name}
                    </h3>
                    <div className="text-red-400 font-semibold text-sm mb-3">
                      {member.role}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{member.description}</p>

                  <div className="inline-flex items-center px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-xs font-semibold">
                    {member.specialty}
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-400">25+</div>
            <div className="text-gray-300 font-medium">Years Combined Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-400">100%</div>
            <div className="text-gray-300 font-medium">Client Success Focus</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-400">Malta</div>
            <div className="text-gray-300 font-medium">Local Expertise</div>
          </div>
        </div>
      </div>
    </section>
  );
}
