import { ArrowDown, Play } from 'lucide-react';
import { EmergencyResponseIllustration } from './illustrations/HeroIllustrations';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#F9FAFB] px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="inline-block mb-8 w-72 h-72 animate-float">
            <EmergencyResponseIllustration />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1F2937] mb-6 leading-tight tracking-tight">
          Find Emergency Hospital Beds
          <br />
          in Real-Time
        </h1>

        <p className="text-xl md:text-2xl text-[#6B7280] mb-12 leading-relaxed max-w-2xl mx-auto">
          Only what you need, when seconds count.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <a
            href="#demo"
            className="bg-[#3B82F6] text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-[#2563EB] transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center"
          >
            Search Hospital Beds Now
          </a>
          <a
            href="#about"
            className="bg-white text-[#3B82F6] border-2 border-[#3B82F6] px-8 py-4 rounded-xl text-lg font-medium hover:bg-[#F0F9FF] transition-all duration-300 inline-flex items-center gap-2"
          >
            <Play size={20} />
            Watch How It Works
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown size={32} className="mx-auto text-[#3B82F6] opacity-50" />
        </div>
      </div>
    </section>
  );
}
