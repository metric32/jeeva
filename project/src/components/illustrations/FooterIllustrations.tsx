export const FooterWaveDivider = () => (
  <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z"
      fill="url(#waveGrad)"
      opacity="0.8"
    />
    <path
      d="M0,60 Q300,20 600,60 T1200,60 L1200,100 L0,100 Z"
      fill="url(#waveGrad)"
      opacity="0.5"
    />
    <path
      d="M0,70 Q300,40 600,70 T1200,70 L1200,100 L0,100 Z"
      fill="url(#waveGrad)"
      opacity="0.25"
    />
  </svg>
);

export const FooterPattern = () => (
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 opacity-5"
  >
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);
