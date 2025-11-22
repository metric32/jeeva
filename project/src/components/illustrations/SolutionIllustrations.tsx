export const RealTimeBedIcon = () => (
  <svg viewBox="0 0 300 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        @keyframes radio-wave {
          0% { opacity: 1; r: 40px; }
          100% { opacity: 0; r: 70px; }
        }
        .wave { animation: radio-wave 2s infinite; }
      `}</style>
    </defs>

    <circle cx="150" cy="150" r="130" fill="#F0F9FF" stroke="none" />

    <circle cx="150" cy="150" r="50" fill="none" stroke="#10B981" strokeWidth="2" className="wave" />
    <circle cx="150" cy="150" r="50" fill="none" stroke="#10B981" strokeWidth="2" className="wave" style={{ animationDelay: '0.6s' }} />

    <rect x="90" y="100" width="120" height="80" fill="none" stroke="#10B981" strokeWidth="2.5" rx="4" />
    <ellipse cx="150" cy="165" rx="35" ry="20" fill="#10B981" opacity="0.8" />
    <rect x="105" y="115" width="90" height="20" fill="none" stroke="#10B981" strokeWidth="1.5" />

    <circle cx="180" cy="155" r="4" fill="#10B981" />
    <circle cx="185" cy="150" r="4" fill="#10B981" />
    <circle cx="190" cy="140" r="4" fill="#10B981" />

    <text x="150" y="250" fontSize="14" fill="#6B7280" textAnchor="middle" fontWeight="600">
      Live Update - 50 beds
    </text>
    <text x="150" y="270" fontSize="12" fill="#9CA3AF" textAnchor="middle">
      Updated 2 mins ago
    </text>
  </svg>
);

export const ColorCodedStatusIcons = () => (
  <svg viewBox="0 0 600 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <g>
      <rect x="30" y="40" width="120" height="160" fill="none" stroke="#10B981" strokeWidth="2.5" rx="8" />
      <text x="90" y="65" fontSize="16" fontWeight="bold" fill="#10B981" textAnchor="middle">
        Available
      </text>

      <g transform="translate(40, 80)">
        {[...Array(50)].map((_, i) => {
          const col = i % 10;
          const row = Math.floor(i / 10);
          return (
            <rect
              key={i}
              x={col * 8}
              y={row * 8}
              width="6"
              height="6"
              fill="#10B981"
              opacity="0.8"
            />
          );
        })}
      </g>

      <text x="90" y="220" fontSize="14" fill="#10B981" textAnchor="middle" fontWeight="600">
        50 beds
      </text>
    </g>

    <g>
      <rect x="240" y="40" width="120" height="160" fill="none" stroke="#F59E0B" strokeWidth="2.5" rx="8" />
      <text x="300" y="65" fontSize="16" fontWeight="bold" fill="#F59E0B" textAnchor="middle">
        Limited
      </text>

      <g transform="translate(250, 80)">
        {[...Array(5)].map((_, i) => {
          const col = i % 5;
          const row = Math.floor(i / 5);
          return (
            <rect
              key={i}
              x={col * 8}
              y={row * 8}
              width="6"
              height="6"
              fill="#F59E0B"
              opacity="0.8"
            />
          );
        })}
      </g>

      <text x="300" y="220" fontSize="14" fill="#F59E0B" textAnchor="middle" fontWeight="600">
        5 beds
      </text>
    </g>

    <g>
      <rect x="450" y="40" width="120" height="160" fill="none" stroke="#EF4444" strokeWidth="2.5" rx="8" />
      <text x="510" y="65" fontSize="16" fontWeight="bold" fill="#EF4444" textAnchor="middle">
        Full
      </text>

      <circle cx="510" cy="130" r="30" fill="none" stroke="#EF4444" strokeWidth="2" opacity="0.4" />
      <text x="510" y="140" fontSize="24" fill="#EF4444" textAnchor="middle" fontWeight="bold">
        —
      </text>

      <text x="510" y="220" fontSize="14" fill="#EF4444" textAnchor="middle" fontWeight="600">
        0 beds
      </text>
    </g>
  </svg>
);

export const AIPredicationsChart = () => (
  <svg viewBox="0 0 500 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="predGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 0.4 }} />
        <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 0 }} />
      </linearGradient>
    </defs>

    <line x1="50" y1="30" x2="50" y2="230" stroke="#E5E7EB" strokeWidth="2" />
    <line x1="50" y1="230" x2="480" y2="230" stroke="#E5E7EB" strokeWidth="2" />

    <path
      d="M 80 180 L 150 160 L 220 140 L 290 150 L 360 165 L 430 175"
      fill="url(#predGrad)"
      stroke="#10B981"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle cx="80" cy="180" r="4" fill="#10B981" />
    <circle cx="150" cy="160" r="4" fill="#10B981" />
    <circle cx="220" cy="140" r="4" fill="#10B981" />
    <circle cx="290" cy="150" r="4" fill="#10B981" opacity="0.6" />
    <circle cx="360" cy="165" r="4" fill="#10B981" opacity="0.6" />
    <circle cx="430" cy="175" r="4" fill="#10B981" opacity="0.6" />

    <g opacity="0.7">
      <text x="80" y="260" fontSize="11" fill="#6B7280" textAnchor="middle">
        Now: 10
      </text>
      <text x="150" y="260" fontSize="11" fill="#6B7280" textAnchor="middle">
        +1h: 15
      </text>
      <text x="220" y="260" fontSize="11" fill="#6B7280" textAnchor="middle">
        +2h: 20
      </text>
      <text x="290" y="260" fontSize="11" fill="#6B7280" textAnchor="middle">
        +3h: 18
      </text>
    </g>

    <g>
      <circle cx="80" cy="105" r="8" fill="none" stroke="#10B981" strokeWidth="1.5" />
      <path d="M 76 101 L 80 105 L 84 101" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 76 109 L 80 105 L 84 109" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <text x="470" y="50" fontSize="13" fill="#10B981" fontWeight="600">
      AI Powered
    </text>
    <text x="470" y="68" fontSize="12" fill="#6B7280">
      Predictions
    </text>
  </svg>
);
