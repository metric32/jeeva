import { FamilyHospitalIcon, HospitalChartIcon, GlobeHeartbeatIcon, HowItWorksTimeline } from './illustrations/FeatureIcons';

export default function Features() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Built for Everyone
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            JEEVA serves patients, hospitals, and society
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-[#EFF6FF] rounded-2xl flex items-center justify-center group hover:bg-[#3B82F6] transition-colors duration-300">
              <div className="w-16 h-16 text-[#3B82F6] group-hover:text-white transition-colors duration-300">
                <FamilyHospitalIcon />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1F2937] mb-4">For Patients & Families</h3>
            <ul className="space-y-3 text-[#6B7280]">
              <li className="flex items-center gap-2">
                <span className="text-[#3B82F6] font-bold">•</span>
                Real-time tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#3B82F6] font-bold">•</span>
                Hospital ratings
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#3B82F6] font-bold">•</span>
                Instant calling
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-[#F0FDF4] rounded-2xl flex items-center justify-center group hover:bg-[#10B981] transition-colors duration-300">
              <div className="w-16 h-16 text-[#10B981] group-hover:text-white transition-colors duration-300">
                <HospitalChartIcon />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1F2937] mb-4">For Hospitals</h3>
            <ul className="space-y-3 text-[#6B7280]">
              <li className="flex items-center gap-2">
                <span className="text-[#10B981] font-bold">•</span>
                Instant updates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981] font-bold">•</span>
                Analytics dashboard
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981] font-bold">•</span>
                Network partnership
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-[#FFF7ED] rounded-2xl flex items-center justify-center group hover:bg-[#F97316] transition-colors duration-300">
              <div className="w-16 h-16 text-[#F97316] group-hover:text-white transition-colors duration-300">
                <GlobeHeartbeatIcon />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1F2937] mb-4">For Society</h3>
            <ul className="space-y-3 text-[#6B7280]">
              <li className="flex items-center gap-2">
                <span className="text-[#F97316] font-bold">•</span>
                Faster response
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F97316] font-bold">•</span>
                Healthcare equity
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F97316] font-bold">•</span>
                Lives saved daily
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#EFF6FF] to-[#F0FDF4] rounded-2xl p-12 border border-[#E5E7EB]">
          <h2 className="text-3xl font-bold text-[#1F2937] text-center mb-12">
            How It Works
          </h2>
          <div className="w-full h-40">
            <HowItWorksTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}
