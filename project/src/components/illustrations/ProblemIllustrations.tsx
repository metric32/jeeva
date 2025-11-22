export const ShortageProgressRing = () => (
  <svg viewBox="0 0 350 350" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        @keyframes progress-fill {
          from { stroke-dashoffset: 549; }
          to { stroke-dashoffset: 198; }
        }
        .progress-ring { animation: progress-fill 3s ease-out forwards; stroke-dasharray: 549; stroke-dashoffset: 549; }
      `}</style>
    </defs>

    <circle cx="175" cy="175" r="140" fill="none" stroke="#E5E7EB" strokeWidth="12" />
    <circle
      cx="175"
      cy="175"
      r="140"
      fill="none"
      stroke="#EF4444"
      strokeWidth="12"
      strokeLinecap="round"
      className="progress-ring"
      style={{ transformOrigin: '175px 175px', transform: 'rotate(-90deg)' }}
    />

    <text x="175" y="165" fontSize="48" fontWeight="bold" fill="#EF4444" textAnchor="middle">
      64%
    </text>
    <text x="175" y="195" fontSize="18" fill="#6B7280" textAnchor="middle">
      Shortage
    </text>

    <g opacity="0.4">
      {[...Array(30)].map((_, i) => {
        const angle = (i / 30) * Math.PI * 2 - Math.PI / 2;
        const x = 175 + Math.cos(angle) * 120;
        const y = 175 + Math.sin(angle) * 120;
        const isAffected = i < 19;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="6"
            fill={isAffected ? '#EF4444' : '#10B981'}
            opacity={isAffected ? 1 : 0.5}
          />
        );
      })}
    </g>
  </svg>
);

export const HospitalJourneyMap = () => (
  <svg viewBox="0 0 1000 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="journeyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#EF4444', stopOpacity: 0.1 }} />
        <stop offset="50%" style={{ stopColor: '#F97316', stopOpacity: 0.1 }} />
        <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 0.1 }} />
      </linearGradient>
    </defs>

    <rect x="20" y="80" width="960" height="40" fill="url(#journeyGrad)" rx="20" />

    <g>
      <circle cx="50" cy="100" r="22" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
      <path d="M 45 95 L 50 85 M 55 95 L 50 85 M 45 105 L 50 115" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <text x="50" y="150" fontSize="12" fill="#6B7280" textAnchor="middle" fontWeight="600">
        Accident
      </text>
      <text x="50" y="170" fontSize="11" fill="#6B7280" textAnchor="middle">
        0 min
      </text>
    </g>

    <g>
      <circle cx="200" cy="100" r="22" fill="#F97316" stroke="#fff" strokeWidth="2" />
      <circle cx="200" cy="100" r="10" fill="none" stroke="#fff" strokeWidth="1.5" />
      <text x="200" y="150" fontSize="12" fill="#6B7280" textAnchor="middle" fontWeight="600">
        Hospital 1
      </text>
      <text x="200" y="170" fontSize="11" fill="#6B7280" textAnchor="middle">
        15 min
      </text>
      <text x="200" y="190" fontSize="10" fill="#EF4444" textAnchor="middle" fontWeight="600">
        ✗ No beds
      </text>
    </g>

    <g>
      <circle cx="350" cy="100" r="22" fill="#F97316" stroke="#fff" strokeWidth="2" />
      <circle cx="350" cy="100" r="10" fill="none" stroke="#fff" strokeWidth="1.5" />
      <text x="350" y="150" fontSize="12" fill="#6B7280" textAnchor="middle" fontWeight="600">
        Hospital 2
      </text>
      <text x="350" y="170" fontSize="11" fill="#6B7280" textAnchor="middle">
        30 min
      </text>
      <text x="350" y="190" fontSize="10" fill="#EF4444" textAnchor="middle" fontWeight="600">
        ✗ No beds
      </text>
    </g>

    <g>
      <circle cx="500" cy="100" r="22" fill="#10B981" stroke="#fff" strokeWidth="2" />
      <polyline points="492,100 498,108 512,92" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="500" y="150" fontSize="12" fill="#6B7280" textAnchor="middle" fontWeight="600">
        Hospital 3
      </text>
      <text x="500" y="170" fontSize="11" fill="#6B7280" textAnchor="middle">
        45 min
      </text>
      <text x="500" y="190" fontSize="10" fill="#10B981" textAnchor="middle" fontWeight="600">
        ✓ Success
      </text>
    </g>

    <line x1="72" y1="100" x2="178" y2="100" stroke="#F97316" strokeWidth="2" strokeDasharray="4,4" />
    <line x1="222" y1="100" x2="328" y2="100" stroke="#F97316" strokeWidth="2" strokeDasharray="4,4" />
    <line x1="372" y1="100" x2="478" y2="100" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4,4" />
  </svg>
);

export const EmotionalJourneyChart = () => (
  <svg viewBox="0 0 600 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="stressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#EF4444', stopOpacity: 0.6 }} />
        <stop offset="100%" style={{ stopColor: '#EF4444', stopOpacity: 0.1 }} />
      </linearGradient>
      <linearGradient id="reliefGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 0.6 }} />
        <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 0.1 }} />
      </linearGradient>
    </defs>

    <line x1="50" y1="20" x2="50" y2="200" stroke="#E5E7EB" strokeWidth="2" />
    <line x1="50" y1="200" x2="580" y2="200" stroke="#E5E7EB" strokeWidth="2" />

    <text x="30" y="210" fontSize="12" fill="#6B7280">
      0 min
    </text>
    <text x="560" y="210" fontSize="12" fill="#6B7280">
      45 min
    </text>

    <path
      d="M 50 160 L 150 140 L 250 60 L 350 80 L 450 100 L 550 140"
      fill="url(#stressGrad)"
      stroke="#EF4444"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M 50 160 L 150 150 L 250 145 L 350 140 L 450 140 L 550 160"
      fill="url(#reliefGrad)"
      stroke="#10B981"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
      strokeDasharray="5,5"
    />

    <circle cx="250" cy="60" r="5" fill="#EF4444" />
    <text x="250" y="40" fontSize="11" fill="#EF4444" textAnchor="middle" fontWeight="600">
      Peak Panic
    </text>

    <text x="30" y="50" fontSize="11" fill="#6B7280" textAnchor="end">
      Stress Level
    </text>
  </svg>
);
