import { Linkedin, Github, Mail } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Ayush Kumar',
      role: 'Founder & Lead Developer',
      quote: 'Building JEEVA to save lives, one bed at a time.',
      initial: 'A',
      color: 'bg-[#3B82F6]',
    },
    {
      name: 'Shreya Patel',
      role: 'Co-Founder & Hospital Partnerships',
      quote: 'Connecting hospitals with families in need.',
      initial: 'S',
      color: 'bg-[#10B981]',
    },
    {
      name: 'Rahul Mishra',
      role: 'Backend Engineer',
      quote: 'Making real-time updates seamless and reliable.',
      initial: 'R',
      color: 'bg-[#F59E0B]',
    },
    {
      name: 'Priya Sharma',
      role: 'UI/UX Designer',
      quote: 'Designing interfaces that work under pressure.',
      initial: 'P',
      color: 'bg-[#EF4444]',
    },
    {
      name: 'Karthik Reddy',
      role: 'Data Scientist',
      quote: 'Predicting bed availability with AI.',
      initial: 'K',
      color: 'bg-[#8B5CF6]',
    },
    {
      name: 'Ananya Das',
      role: 'Community Manager',
      quote: 'Building trust, one hospital at a time.',
      initial: 'A',
      color: 'bg-[#EC4899]',
    },
  ];

  return (
    <section id="team" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Meet the Team
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Young innovators on a mission to transform emergency healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div
                className={`w-32 h-32 ${member.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg`}
              >
                {member.initial}
              </div>

              <h3 className="text-2xl font-bold text-[#1F2937] mb-2">
                {member.name}
              </h3>

              <p className="text-[#3B82F6] font-medium mb-4">{member.role}</p>

              <p className="text-[#6B7280] italic leading-relaxed mb-6">
                "{member.quote}"
              </p>

              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#F3F4F6] rounded-full flex items-center justify-center hover:bg-[#3B82F6] hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#F3F4F6] rounded-full flex items-center justify-center hover:bg-[#3B82F6] hover:text-white transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#F3F4F6] rounded-full flex items-center justify-center hover:bg-[#3B82F6] hover:text-white transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
            <p className="text-xl mb-8 opacity-90">
              Want to help us save lives? We're always looking for passionate
              people.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-[#3B82F6] px-8 py-4 rounded-xl font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
