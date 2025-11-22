import { CheckCircle, Download, Calendar } from 'lucide-react';

export default function ForHospitals() {
  const benefits = [
    'Update bed status in real-time',
    'Reduce emergency chaos by 40%',
    'Reach families in need, faster',
    'Free integration and support',
    'Simple dashboard interface',
    'Secure and HIPAA compliant',
  ];

  return (
    <section id="hospitals" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Partner with JEEVA
          </h2>
          <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed max-w-3xl mx-auto">
            Help families find your available beds.
            <br />
            Simple. Secure. Impactful.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#F0F9FF] to-[#F0FDF4] rounded-3xl p-12 mb-12 border border-[#E5E7EB]">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#10B981] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#1F2937]">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center gap-8 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#3B82F6] mb-2">5+</div>
                  <div className="text-sm text-[#6B7280]">Partner Hospitals</div>
                </div>
                <div className="w-px h-16 bg-[#E5E7EB]"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#10B981] mb-2">700+</div>
                  <div className="text-sm text-[#6B7280]">Beds Tracked</div>
                </div>
                <div className="w-px h-16 bg-[#E5E7EB]"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F59E0B] mb-2">40%</div>
                  <div className="text-sm text-[#6B7280]">Less Chaos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="#contact"
            className="bg-[#10B981] text-white p-8 rounded-2xl hover:bg-[#059669] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Calendar size={32} />
                <h3 className="text-2xl font-bold">Schedule a Demo</h3>
              </div>
              <p className="text-white/90">
                See how JEEVA works for your hospital
              </p>
            </div>
            <div className="text-4xl group-hover:translate-x-2 transition-transform">
              →
            </div>
          </a>

          <a
            href="#contact"
            className="bg-white border-2 border-[#10B981] text-[#10B981] p-8 rounded-2xl hover:bg-[#F0FDF4] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Download size={32} />
                <h3 className="text-2xl font-bold">Download Hospital App</h3>
              </div>
              <p className="text-[#6B7280]">
                Start updating bed status today
              </p>
            </div>
            <div className="text-4xl group-hover:translate-x-2 transition-transform">
              →
            </div>
          </a>
        </div>

        <div className="mt-12 bg-[#F9FAFB] rounded-2xl p-8 border border-[#E5E7EB]">
          <h3 className="text-2xl font-bold text-[#1F2937] mb-6 text-center">
            Current Partner Hospitals
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['CWS Hospital', 'RGH Government Hospital', 'Hi-Tech Medical College'].map(
              (hospital, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center border border-[#E5E7EB] hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#10B981]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle size={32} className="text-[#10B981]" />
                  </div>
                  <p className="font-bold text-[#1F2937]">{hospital}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
