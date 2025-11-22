export const FamilyHospitalIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="45" r="8" fill="none" stroke="#3B82F6" strokeWidth="2" />
    <path
      d="M 50 55 L 45 65 M 50 55 L 55 65 M 45 60 L 55 60"
      stroke="#3B82F6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle cx="35" cy="35" r="6" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.7" />
    <circle cx="65" cy="35" r="6" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.7" />

    <rect x="25" y="70" width="50" height="20" fill="none" stroke="#3B82F6" strokeWidth="2" rx="2" />
    <line x1="35" y1="70" x2="35" y2="90" stroke="#3B82F6" strokeWidth="1.5" opacity="0.5" />
    <line x1="50" y1="70" x2="50" y2="90" stroke="#3B82F6" strokeWidth="1.5" opacity="0.5" />
    <line x1="65" y1="70" x2="65" y2="90" stroke="#3B82F6" strokeWidth="1.5" opacity="0.5" />

    <path
      d="M 50 73 L 50 78 M 48 75.5 L 52 75.5"
      stroke="#EF4444"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HospitalChartIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="40" width="60" height="45" fill="none" stroke="#10B981" strokeWidth="2" rx="2" />

    <rect x="25" y="60" width="8" height="25" fill="#10B981" opacity="0.7" />
    <rect x="36" y="50" width="8" height="35" fill="#10B981" />
    <rect x="47" y="40" width="8" height="45" fill="#10B981" />
    <rect x="58" y="50" width="8" height="35" fill="#10B981" opacity="0.7" />

    <line x1="24" y1="37" x2="76" y2="37" stroke="#10B981" strokeWidth="1.5" opacity="0.5" />
    <line x1="20" y1="40" x2="80" y2="40" stroke="#10B981" strokeWidth="1.5" opacity="0.5" />

    <circle cx="50" cy="25" r="12" fill="none" stroke="#10B981" strokeWidth="2" />
    <path d="M 50 20 L 50 30 M 45 25 L 55 25" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const GlobeHeartbeatIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="28" fill="none" stroke="#F97316" strokeWidth="2" />
    <ellipse cx="50" cy="50" rx="18" ry="25" fill="none" stroke="#F97316" strokeWidth="1.5" opacity="0.5" />
    <path
      d="M 30 50 Q 35 40 40 45 Q 45 50 50 48 Q 55 46 60 50 Q 65 54 70 50"
      fill="none"
      stroke="#F97316"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle cx="25" cy="60" r="4" fill="none" stroke="#F97316" strokeWidth="1.5" opacity="0.6" />
    <circle cx="75" cy="35" r="4" fill="none" stroke="#F97316" strokeWidth="1.5" opacity="0.6" />
  </svg>
);

export const HowItWorksTimeline = () => (
  <svg viewBox="0 0 800 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <line x1="40" y1="100" x2="760" y2="100" stroke="#3B82F6" strokeWidth="4" />

    <g>
      <circle cx="60" cy="100" r="18" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
      <text x="60" y="140" fontSize="13" fill="#6B7280" textAnchor="middle" fontWeight="600">
        Emergency
      </text>
      <text x="60" y="160" fontSize="12" fill="#9CA3AF" textAnchor="middle">
        0 sec
      </text>
    </g>

    <g>
      <circle cx="220" cy="100" r="18" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
      <text x="220" y="140" fontSize="13" fill="#6B7280" textAnchor="middle" fontWeight="600">
        Open App
      </text>
      <text x="220" y="160" fontSize="12" fill="#9CA3AF" textAnchor="middle">
        10 sec
      </text>
    </g>

    <g>
      <circle cx="380" cy="100" r="18" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
      <text x="380" y="140" fontSize="13" fill="#6B7280" textAnchor="middle" fontWeight="600">
        See Beds
      </text>
      <text x="380" y="160" fontSize="12" fill="#9CA3AF" textAnchor="middle">
        20 sec
      </text>
    </g>

    <g>
      <circle cx="540" cy="100" r="18" fill="#3B82F6" stroke="#fff" strokeWidth="2" />
      <text x="540" y="140" fontSize="13" fill="#6B7280" textAnchor="middle" fontWeight="600">
        Call Hospital
      </text>
      <text x="540" y="160" fontSize="12" fill="#9CA3AF" textAnchor="middle">
        25 sec
      </text>
    </g>

    <g>
      <circle cx="700" cy="100" r="18" fill="#10B981" stroke="#fff" strokeWidth="2" />
      <polyline points="692,100 698,108 712,92" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="700" y="140" fontSize="13" fill="#6B7280" textAnchor="middle" fontWeight="600">
        On The Way
      </text>
      <text x="700" y="160" fontSize="12" fill="#9CA3AF" textAnchor="middle">
        30 sec
      </text>
    </g>
  </svg>
);
