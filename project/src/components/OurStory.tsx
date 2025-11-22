import { ArrowRight, Award } from 'lucide-react';

export default function OurStory() {
  return (
    <section id="about" className="py-24 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#3B82F6] rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-[#E5E7EB]">
              <div className="aspect-video bg-gradient-to-br from-[#3B82F6] to-[#10B981] rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Award size={64} className="mx-auto mb-4" />
                  <p className="text-2xl font-bold">Coolest Projects 2025</p>
                  <p className="text-lg opacity-90 mt-2">Winner</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-[#3B82F6] border-2 border-white flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#10B981] border-2 border-white flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#F59E0B] border-2 border-white flex items-center justify-center text-white font-bold">
                    R
                  </div>
                </div>
                <p className="text-sm text-[#6B7280]">Team JEEVA at work</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
              From Coolest Projects to Saving Lives
            </h2>

            <div className="space-y-6 text-lg text-[#4B5563] leading-relaxed">
              <p>
                We're a team of young innovators who believe emergency healthcare
                should be transparent, accessible, and efficient.
              </p>

              <p>
                Starting as a project at NIT Rourkela, we witnessed firsthand the
                chaos families face during medical emergencies. Hours wasted
                calling hospitals, driving across the city, only to find no beds
                available.
              </p>

              <p>
                JEEVA was born from that frustration. We built a platform that
                gives you what you need most in an emergency: real-time
                information and immediate action.
              </p>

              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 mt-8">
                <p className="text-[#3B82F6] font-bold mb-2">Our Mission</p>
                <p className="text-[#1F2937]">
                  Make emergency healthcare transparent and accessible to every
                  family in Odisha, and eventually, across India.
                </p>
              </div>
            </div>

            <a
              href="#team"
              className="inline-flex items-center gap-2 mt-8 text-[#3B82F6] font-medium text-lg hover:gap-4 transition-all duration-300"
            >
              Meet the Team
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
