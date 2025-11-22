import { useEffect, useState, useRef, MutableRefObject } from "react";
import { HeartPulse } from "lucide-react";

interface ImpactCounts {
  shortage: number;
  people: number;
  hospitals: number;
  lives: number;
}

export default function ImpactMetrics() {
  const [counts, setCounts] = useState<ImpactCounts>({
    shortage: 0,
    people: 0,
    hospitals: 0,
    lives: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 3000; // 3s
      const steps = 90;
      const interval = duration / steps;

      let step = 0;
      const timer = window.setInterval(() => {
        step += 1;
        const progress = step / steps;

        setCounts({
          shortage: Math.round(64 * progress),
          people: Math.round(30 * progress),
          hospitals: Math.round(10 * progress),
          lives: Math.round(1000 * progress),
        });

        if (step >= steps) {
          window.clearInterval(timer);
          setCounts({ shortage: 64, people: 30, hospitals: 10, lives: 1000 });
        }
      }, interval);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const RADIUS = 60;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const shortageOffset =
    CIRCUMFERENCE - (CIRCUMFERENCE * counts.shortage) / 64;

  const totalPeopleIcons = 100;
  const highlightedPeopleIcons = 19;

  const growthBars = [
    { label: "Month 1", height: 30, value: 1 },
    { label: "Month 3", height: 55, value: 3 },
    { label: "Month 6", height: 80, value: 5 },
    { label: "Month 12", height: 100, value: 10 },
  ];

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-white via-[#EFF6FF] to-[#DBEAFE] relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-20 -left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#10B981]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 w-80 h-80 rounded-full bg-gradient-to-tr from-[#3B82F6]/10 to-[#10B981]/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#BFDBFE_0,_transparent_55%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4">
            Impact that saves precious minutes
          </h2>
          <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto">
            Every dot, bar and heart below represents real families getting to
            the right bed at the right time.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(15,23,42,0.15)]">
            <p className="text-sm font-semibold tracking-wide text-[#3B82F6] uppercase mb-3">
              64% Bed Shortage
            </p>
            <div className="flex items-center gap-6">
              <div className="relative w-40 h-40">
                <svg
                  viewBox="0 0 180 180"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="90"
                    cy="90"
                    r={RADIUS}
                    stroke="#E5E7EB"
                    strokeWidth={16}
                    fill="none"
                  />
                  <circle
                    cx="90"
                    cy="90"
                    r={RADIUS}
                    stroke="#EF4444"
                    strokeWidth={16}
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={shortageOffset}
                    className="transition-[stroke-dashoffset] duration-700 ease-out"
                    transform="rotate(-90 90 90)"
                  />
                  <text
                    x="90"
                    y="90"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#111827"
                    fontSize="32"
                    fontWeight="700"
                  >
                    {counts.shortage}%
                  </text>
                </svg>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-[#111827]">
                  Shortage in Odisha
                </h3>
                <p className="text-sm text-[#6B7280]">
                  Government data shows that nearly two-thirds of emergency beds
                  are not available when families need them most.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-[#6B7280]">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#FEE2E2] px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-[#EF4444]" />
                    Shortage
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#E5E7EB] px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-[#9CA3AF]" />
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(15,23,42,0.15)]">
            <p className="text-sm font-semibold tracking-wide text-[#10B981] uppercase mb-3">
              30 Million People
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-[#111827]">
                    {counts.people}M+
                  </div>
                  <p className="text-sm text-[#6B7280]">
                    People who can be covered across Odisha&apos;s districts.
                  </p>
                </div>
                <div className="text-right text-xs text-[#6B7280]">
                  <p>1 icon = 300,000 people</p>
                  <p>Green = helped, Gray = still waiting</p>
                </div>
              </div>

              <div className="rounded-xl bg-[#F9FAFB] p-4 border border-dashed border-[#E5E7EB]">
                <div className="grid grid-cols-10 gap-1">
                  {Array.from({ length: totalPeopleIcons }).map((_, index) => {
                    const isHelped = index < highlightedPeopleIcons;
                    return (
                      <div
                        key={index}
                        className={`h-3 w-3 rounded-full ${
                          isHelped ? "bg-[#10B981]" : "bg-[#D1D5DB]"
                        } ${
                          hasAnimated && isHelped ? "animate-pulse" : ""
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(15,23,42,0.15)]">
            <p className="text-sm font-semibold tracking-wide text-[#3B82F6] uppercase mb-3">
              Hospital Network Growth
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-end gap-3 h-40">
                {growthBars.map((bar) => (
                  <div
                    key={bar.label}
                    className="flex flex-1 flex-col items-center"
                  >
                    <div className="flex-1 flex items-end w-full">
                      <div
                        className="w-full rounded-2xl bg-gradient-to-t from-[#10B981] to-[#6EE7B7] shadow-[0_8px_20px_rgba(16,185,129,0.35)] transition-all duration-700 ease-out"
                        style={{
                          height: `${(bar.height * Math.max(counts.hospitals, 1)) / 10}%`,
                        }}
                      />
                    </div>
                    <p className="mt-2 text-xs text-[#6B7280]">{bar.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-[#4B5563]">
                <div>
                  <p className="font-semibold text-[#111827]">
                    {counts.hospitals}+ hospitals on path
                  </p>
                  <p className="text-xs text-[#6B7280]">
                    Starting with 1 pilot hospital and scaling to a statewide
                    network.
                  </p>
                </div>
                <div className="rounded-full bg-[#ECFDF5] px-4 py-2 text-xs font-semibold text-[#047857]">
                  Real-time capacity data
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F9FAFB] via-white to-[#DCFCE7] rounded-2xl p-8 border border-[#BBF7D0] shadow-[0_18px_45px_rgba(22,163,74,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(22,163,74,0.35)]">
            <p className="text-sm font-semibold tracking-wide text-[#EF4444] uppercase mb-3">
              Lives Touched
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-2xl bg-white px-5 py-3 border border-[#FCA5A5] shadow-sm">
                  <HeartPulse className="h-8 w-8 text-[#EF4444] mr-3 animate-pulse" />
                  <div>
                    <div className="text-4xl md:text-5xl font-extrabold text-[#111827] leading-none">
                      {counts.lives}+
                    </div>
                    <p className="text-xs text-[#6B7280] mt-1">
                      critical cases routed faster
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mt-2 h-24">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FEE2E2] via-transparent to-[#DCFCE7]" />
                <div className="relative flex h-full items-center justify-around px-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] border border-[#FCA5A5]"
                    >
                      <span className="text-sm">❤</span>
                      <span className="absolute -top-2 -right-2 h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-[#4B5563]">
                Each heart represents hundreds of families who reach care
                quicker because someone could see live bed availability and act
                in seconds, not minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
