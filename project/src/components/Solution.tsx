import { RealTimeBedIcon, ColorCodedStatusIcons, AIPredicationsChart } from './illustrations/SolutionIllustrations';

export default function Solution() {
  const features = [
    {
      title: 'Real-Time Bed Status',
      description:
        'Live updates every minute. Color-coded: Green, Yellow, Red for instant decisions.',
      illustration: RealTimeBedIcon,
    },
    {
      title: 'Color-Coded Status',
      description:
        'Instantly see hospital availability at a glance. Available, Limited, or Full.',
      illustration: ColorCodedStatusIcons,
    },
    {
      title: 'AI Predictions',
      description:
        'Smart forecasting of bed availability. Plan ahead with confidence using data-driven insights.',
      illustration: AIPredicationsChart,
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            The Solution
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Simple, powerful tools that save lives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Illustration = feature.illustration;
            return (
              <div
                key={index}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
              >
                <div className="mb-6 h-40 flex items-center justify-center bg-[#F9FAFB] rounded-xl group-hover:bg-gradient-to-br group-hover:from-[#EFF6FF] group-hover:to-[#F0FDF4] transition-colors duration-300">
                  <Illustration />
                </div>

                <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                  {feature.title}
                </h3>

                <p className="text-[#6B7280] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
