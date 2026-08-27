import React from 'react';
import { GLAND_MAP } from '../data/glandData';

export default function GlandInspectorCard({ selectedGland, navigateTo }) {
  const g = GLAND_MAP[selectedGland] || GLAND_MAP.hypothalamus;

  return (
    <div style={{ background: '#fff', borderRadius: '24px', padding: '32px', border: '1px solid #e2e8f0', boxShadow: 'var(--cell-sh)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
        <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(79,70,229,0.1)', color: 'var(--cell-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', fontWeight: 900 }}>
          ðŸ§¬
        </div>
        <div>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '26px', fontWeight: 900, color: 'var(--cell-text)', margin: 0 }}>
            {g.name}
          </h2>
          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--cell-indigo)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {g.location}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '20px', background: '#f8fafc', padding: '18px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
        <h4 style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.5px', color: 'var(--cell-indigo)', marginBottom: '8px', fontWeight: 800 }}>
          Primary Hormones
        </h4>
        <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--cell-text)' }}>
          {g.hormones}
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.5px', color: 'var(--cell-muted)', marginBottom: '8px', fontWeight: 800 }}>
          Physiological Role &amp; Connections
        </h4>
        <p style={{ fontSize: '15px', color: 'var(--cell-muted)', lineHeight: 1.65, margin: 0 }}>
          {g.role}
        </p>
      </div>

      <button
        onClick={() => navigateTo('skills')}
        style={{ padding: '10px 22px', background: 'var(--cell-indigo)', color: '#fff', border: 'none', borderRadius: '100px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}
      >
        Read full section in Skills â†’
      </button>
    </div>
  );
}