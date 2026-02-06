import React from 'react';

interface VeroStockLogoProps {
  className?: string;
}

const VeroStockLogo: React.FC<VeroStockLogoProps> = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <path d="M25 20 H20 V25" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M75 20 H80 V25" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M20 75 V80 H25" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M80 75 V80 H75" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <text x="50" y="62" fontFamily="Montserrat" fontWeight="900" fontSize="34" textAnchor="middle" fill="currentColor">VS</text>
    <line x1="15" y1="50" x2="85" y2="50" stroke="#38b6ff" strokeWidth="3" />
  </svg>
);

export default VeroStockLogo;
