import Image from "next/image";
import { Briefcase, Users, Globe } from "lucide-react";
import CEOImg from "@/app/assets/CEO.png";

const team = [
  {
    name: "Anmol Bajwa",
    role: "Student and Employer Liaison Lead",
    description:
      "Connecting students with opportunities and maintaining employer relationships",
    icon: Users,
    specialty: "Student Relations",
    order: "lg:order-1",
  },
  {
    name: "Dr Anton Callus",
    role: "Malta Operations Lead and HR Specialist",
    description:
      "Leading Malta operations with extensive HR expertise and local market knowledge",
    icon: Briefcase,
    specialty: "HR & Operations",
    image: CEOImg,
    order: "lg:order-2",
  },
  {
    name: "Gulzar Bajwa",
    role: "Global Partnerships and Business Strategy Lead",
    description:
      "Developing strategic partnerships and expanding global business opportunities",
    icon: Globe,
    specialty: "Strategy & Partnerships",
    order: "lg:order-3",
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-20 bg-theme-bg text-theme-text">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-theme-muted max-w-2xl mx-auto">
            Our dedicated leaders work together to drive growth, create
            opportunities, and foster international collaboration.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <div
              key={idx}
              className={`group bg-theme-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${member.order}`}
            >
              {/* Icon or Image */}
              <div
                className={`${
                  member.image ? "w-24 h-24 mx-auto" : "w-16 h-16"
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

              {/* Name & Role */}
              <h3 className="text-xl font-semibold mb-1 text-center">
                {member.name}
              </h3>
              <p className="text-sm text-theme-accent font-medium mb-4 text-center">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-theme-muted text-center leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
