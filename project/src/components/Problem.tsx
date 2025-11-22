import { ShortageProgressRing, HospitalJourneyMap, EmotionalJourneyChart } from './illustrations/ProblemIllustrations';

export default function Problem() {
  return (
    <section className="py-24 px-6 bg-[#F3F4F6]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-1 h-16 bg-[#EF4444] mx-auto mb-8"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-12 leading-tight">
            The Reality We're Changing
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm h-80">
              <ShortageProgressRing />
            </div>
          </div>

          <div className="space-y-6 text-lg text-[#4B5563] leading-relaxed flex flex-col justify-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <p className="text-[#1F2937] font-medium">
                In Odisha, 64% of hospital beds are short.
              </p>
            </div>

            <div className="transform hover:scale-105 transition-transform duration-300">
              <p className="text-[#1F2937] font-medium">30 million people affected.</p>
            </div>

            <div className="transform hover:scale-105 transition-transform duration-300">
              <p className="text-[#1F2937] font-medium">
                Families waste 45+ minutes hospital-hopping.
              </p>
            </div>

            <div className="pt-6 border-t-2 border-[#E5E7EB]">
              <p className="text-[#1F2937] font-medium">
                Lives lost to preventable delays.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1F2937] text-center mb-8">Current Hospital Journey</h3>
          <div className="w-full h-32">
            <HospitalJourneyMap />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1F2937] text-center mb-8">Stress vs. Time</h3>
          <div className="w-full h-64 bg-white rounded-2xl p-6">
            <EmotionalJourneyChart />
          </div>
        </div>

        <div className="text-center">
          <p className="text-3xl font-bold text-[#3B82F6]">JEEVA ends this uncertainty.</p>
        </div>

        <div className="w-1 h-16 bg-[#10B981] mx-auto mt-12"></div>
      </div>
    </section>
  );
}
