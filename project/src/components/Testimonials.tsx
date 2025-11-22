import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
            Voices from Emergencies
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            JEEVA is already helping families and hospital teams turn panic
            into fast, confident decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <article className="relative bg-white border-2 border-[#10B981] rounded-2xl p-8 shadow-[0_10px_30px_rgba(16,185,129,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,185,129,0.25)]">
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-[#10B981] flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-6 mt-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#10B981] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  RS
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-yellow-500 text-xl" aria-hidden="true">
                    ★★★★★
                  </p>
                  <span className="text-xs font-semibold text-[#10B981] bg-[#ECFDF5] px-3 py-1 rounded-full">
                    Patient Story
                  </span>
                </div>
                <p className="italic text-[#374151] text-base leading-relaxed mb-4">
                  &quot;JEEVA saved my mother&apos;s life. We found a bed in
                  less than 5 minutes instead of calling hospitals for 45
                  minutes.&quot;
                </p>
                <div>
                  <p className="font-semibold text-[#111827]">
                    Rajesh Sharma
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    Patient family, Rourkela
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="relative bg-white border-2 border-[#3B82F6] rounded-2xl p-8 shadow-[0_10px_30px_rgba(37,99,235,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(37,99,235,0.25)]">
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-[#3B82F6] flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-6 mt-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-[#EFF6FF] flex items-center justify-center shadow-inner border border-[#BFDBFE]">
                  <span className="text-sm font-semibold text-[#1D4ED8]">
                    HOSPITAL
                    <br />
                    PARTNER
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-yellow-500 text-xl" aria-hidden="true">
                    ★★★★★
                  </p>
                  <span className="text-xs font-semibold text-[#3B82F6] bg-[#DBEAFE] px-3 py-1 rounded-full">
                    Hospital Partner
                  </span>
                </div>
                <p className="italic text-[#374151] text-base leading-relaxed mb-4">
                  &quot;Before JEEVA, our emergency desk was flooded with calls.
                  Now families arrive knowing we have beds available – it&apos;s
                  calmer, faster, and more humane.&quot;
                </p>
                <div>
                  <p className="font-semibold text-[#111827]">
                    Dr. Ananya Mohanty
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    Medical Superintendent, Partner Hospital
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
