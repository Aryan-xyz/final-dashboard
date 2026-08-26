import React from 'react';

export default function EndocrineSvgMap({ selectedGland, onSelectGland }) {
  return (
    <svg viewBox="0 0 320 520" style={{ maxWidth: '260px', margin: '0 auto', display: 'block' }}>
      <ellipse cx="160" cy="55" rx="38" ry="48" fill="#e8f4f8" stroke="#94b8c8" strokeWidth="2" />
      <path d="M120 118 Q160 130 200 118 L195 280 Q160 295 125 280 Z" fill="#e8f4f8" stroke="#94b8c8" strokeWidth="2" />
      <path d="M125 280 L115 420 Q160 440 205 420 L195 280" fill="#e8f4f8" stroke="#94b8c8" strokeWidth="2" />
      <circle
        id="gland-hypothalamus"
        className={gland-dot }
        onClick={() => onSelectGland('hypothalamus')}
        cx="160" cy="42" r="10"
      />
      <circle
        id="gland-pituitary"
        className={gland-dot }
        onClick={() => onSelectGland('pituitary')}
        cx="160" cy="72" r="8"
      />
      <circle
        id="gland-pineal"
        className={gland-dot }
        onClick={() => onSelectGland('pineal')}
        cx="160" cy="28" r="7"
      />
      <circle
        id="gland-thyroid"
        className={gland-dot }
        onClick={() => onSelectGland('thyroid')}
        cx="160" cy="108" r="10"
      />
      <circle
        id="gland-parathyroid"
        className={gland-dot }
        onClick={() => onSelectGland('parathyroid')}
        cx="175" cy="100" r="6"
      />
      <circle
        id="gland-thymus"
        className={gland-dot }
        onClick={() => onSelectGland('thymus')}
        cx="160" cy="145" r="9"
      />
      <circle
        id="gland-pancreas"
        className={gland-dot }
        onClick={() => onSelectGland('pancreas')}
        cx="185" cy="210" r="9"
      />
      <circle
        id="gland-adrenal"
        className={gland-dot }
        onClick={() => onSelectGland('adrenal')}
        cx="130" cy="230" r="8"
      />
      <circle
        id="gland-adrenal2"
        className={gland-dot }
        onClick={() => onSelectGland('adrenal')}
        cx="190" cy="230" r="8"
      />
      <circle
        id="gland-ovary"
        className={gland-dot }
        onClick={() => onSelectGland('ovary')}
        cx="145" cy="270" r="8"
      />
      <circle
        id="gland-testis"
        className={gland-dot }
        onClick={() => onSelectGland('testis')}
        cx="145" cy="380" r="9"
      />
      <circle
        id="gland-testis2"
        className={gland-dot }
        onClick={() => onSelectGland('testis')}
        cx="175" cy="380" r="9"
      />
    </svg>
  );
}