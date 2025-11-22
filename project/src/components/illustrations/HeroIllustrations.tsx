export const EmergencyResponseIllustration = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        @keyframes pulse {
          0%, 100% { r: 20px; opacity: 1; }
          50% { r: 25px; opacity: 0.7; }
        }
        .pulse-node { animation: pulse 2s infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float-icon { animation: float 3s ease-in-out infinite; }
      `}</style>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    <circle cx="200" cy="200" r="180" fill="none" stroke="#F0F9FF" strokeWidth="1" opacity="0.5" />

    <g className="float-icon">
      <rect x="170" y="140" width="60" height="100" fill="none" stroke="#3B82F6" strokeWidth="2.5" rx="4" />
      <rect x="175" y="145" width="50" height="15" fill="none" stroke="#3B82F6" strokeWidth="2" />
      <circle cx="200" cy="170" r="8" fill="#10B981" />
      <circle cx="200" cy="190" r="8" fill="none" stroke="#3B82F6" strokeWidth="2" />
      <circle cx="200" cy="210" r="8" fill="none" stroke="#3B82F6" strokeWidth="2" />
    </g>

    <circle cx="200" cy="200" r="130" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.2" strokeDasharray="5,5" />

    <g>
      <circle cx="200" cy="70" r="20" fill="#3B82F6" className="pulse-node" />
      <g transform="translate(200, 70)" className="float-icon" style={{ animationDelay: '0.1s' }}>
        <path d="M-8,-5 Q-8,-12 0,-12 Q8,-12 8,-5 Q8,0 0,8 Q-8,0 -8,-5" fill="#10B981" />
        <line x1="-8" y1="-5" x2="8" y2="-5" stroke="#fff" strokeWidth="1.5" />
      </g>
    </g>

    <g>
      <circle cx="330" cy="200" r="20" fill="#10B981" className="pulse-node" />
      <g transform="translate(330, 200)" className="float-icon" style={{ animationDelay: '0.2s' }}>
        <polyline points="-6,-4 -2,4 6,-2" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>

    <g>
      <circle cx="200" cy="330" r="20" fill="#3B82F6" className="pulse-node" />
      <g transform="translate(200, 330)" className="float-icon" style={{ animationDelay: '0.3s' }}>
        <circle cx="0" cy="0" r="8" fill="none" stroke="#fff" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="12" fill="none" stroke="#fff" strokeWidth="1" opacity="0.6" />
      </g>
    </g>

    <g>
      <circle cx="70" cy="200" r="20" fill="#3B82F6" className="pulse-node" />
      <g transform="translate(70, 200)" className="float-icon" style={{ animationDelay: '0.4s' }}>
        <circle cx="0" cy="0" r="6" fill="#fff" />
        <line x1="0" y1="-10" x2="0" y2="10" stroke="#fff" strokeWidth="1.5" />
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#fff" strokeWidth="1.5" />
      </g>
    </g>

    <path d="M 200 90 Q 240 140 320 180" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.6" strokeDasharray="4,2" />
    <path d="M 320 220 Q 260 260 200 310" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.6" strokeDasharray="4,2" />
    <path d="M 200 310 Q 140 260 80 220" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.6" strokeDasharray="4,2" />
    <path d="M 80 180 Q 140 140 200 90" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.6" strokeDasharray="4,2" />
  </svg>
);

export const TimeIsLifeIllustration = () => (
  <svg viewBox="0 0 800 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#EF4444', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: '#DC2626', stopOpacity: 0.3 }} />
      </linearGradient>
      <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 0.3 }} />
      </linearGradient>
    </defs>

    <rect x="30" y="30" width="320" height="240" fill="url(#redGrad)" rx="12" stroke="#EF4444" strokeWidth="2" opacity="0.6" />
    <rect x="450" y="30" width="320" height="240" fill="url(#greenGrad)" rx="12" stroke="#10B981" strokeWidth="2" opacity="0.6" />

    <text x="190" y="60" fontSize="20" fontWeight="bold" fill="#EF4444" textAnchor="middle">
      BEFORE JEEVA
    </text>
    <text x="610" y="60" fontSize="20" fontWeight="bold" fill="#10B981" textAnchor="middle">
      WITH JEEVA
    </text>

    <g opacity="0.5">
      <circle cx="90" cy="120" r="20" fill="none" stroke="#EF4444" strokeWidth="2" />
      <circle cx="145" cy="80" r="15" fill="none" stroke="#EF4444" strokeWidth="2" />
      <circle cx="200" cy="120" r="20" fill="none" stroke="#EF4444" strokeWidth="2" />
      <path d="M 110 130 L 125 95 L 180 130" fill="none" stroke="#EF4444" strokeWidth="1.5" opacity="0.5" />
    </g>

    <text x="90" y="175" fontSize="12" fill="#6B7280" textAnchor="middle" fontWeight="500">
      Hospital 1: ✗
    </text>
    <text x="145" y="175" fontSize="12" fill="#6B7280" textAnchor="middle" fontWeight="500">
      Hospital 2: ✗
    </text>
    <text x="200" y="175" fontSize="12" fill="#10B981" textAnchor="middle" fontWeight="500">
      Hospital 3: ✓
    </text>

    <text x="190" y="215" fontSize="24" fontWeight="bold" fill="#EF4444" textAnchor="middle">
      45 MINUTES
    </text>

    <g>
      <rect x="510" y="110" width="40" height="50" fill="none" stroke="#3B82F6" strokeWidth="2" rx="4" />
      <circle cx="530" cy="120" r="5" fill="#3B82F6" />
    </g>

    <circle cx="570" cy="135" r="25" fill="none" stroke="#10B981" strokeWidth="2.5" />
    <path d="M 560 135 L 568 142 L 582 128" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

    <circle cx="620" cy="150" r="22" fill="none" stroke="#10B981" strokeWidth="2" />
    <rect x="605" y="135" width="30" height="30" fill="none" stroke="#10B981" strokeWidth="2" rx="2" />
    <line x1="610" y1="150" x2="625" y2="150" stroke="#10B981" strokeWidth="1.5" />
    <line x1="617" y1="142" x2="617" y2="158" stroke="#10B981" strokeWidth="1.5" />

    <text x="510" y="220" fontSize="12" fill="#6B7280" textAnchor="middle" fontWeight="500">
      1. Open App
    </text>
    <text x="570" y="220" fontSize="12" fill="#6B7280" textAnchor="middle" fontWeight="500">
      2. See Beds
    </text>
    <text x="630" y="220" fontSize="12" fill="#6B7280" textAnchor="middle" fontWeight="500">
      3. Call & Go
    </text>

    <text x="610" y="255" fontSize="24" fontWeight="bold" fill="#10B981" textAnchor="middle">
      5 MINUTES
    </text>

    <g>
      <path d="M 370 150 L 390 150" stroke="#3B82F6" strokeWidth="3" />
      <polygon points="395,150 385,145 385,155" fill="#3B82F6" />
    </g>
  </svg>
);
