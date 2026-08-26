import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function IntroView({ currentView, navigateTo }) {
  const [expandedCards, setExpandedCards] = useState({});

  const questions = [
    { q: "WHY do we need chemical coordination alongside neural coordination?", a: "Neural system provides point-to-point rapid coordination via nerve fibers, but nerve fibers do NOT innervate all cells of body and cellular functions require continuous regulation. Hence, special chemical coordination (hormones) is required." },
    { q: "WHAT are hormones under current scientific definition?", a: "Hormones are non-nutrient chemicals which act as intercellular messengers and are produced in trace amounts." },
    { q: "WHERE are endocrine glands located in human body?", a: "Pituitary & Pineal (brain), Thyroid & Parathyroid (neck), Thymus (chest), Adrenal & Pancreas (abdomen), Ovaries & Testes (pelvis/scrotum)." },
    { q: "WHO controls the master endocrine gland?", a: "The Hypothalamus (basal part of diencephalon) regulates pituitary hormone secretion via releasing and inhibiting hormones." },
    { q: "WHEN do emergency catecholamines get released?", a: "Adrenaline and Noradrenaline are secreted by adrenal medulla during acute physical, environmental, or emotional stress (Fight or Flight)." },
    { q: "HOW do peptide vs steroid hormones act on cells?", a: "Peptide hormones bind membrane-bound receptors to generate 2nd messengers (cAMP, IP3). Steroid & Thyroid hormones bind intracellular/nuclear receptors to regulate gene expression directly." }
  ];

  return (
    <div className="app-view active">
      <div className="cell-page">
        <Navbar currentView={currentView} navigateTo={navigateTo} />

        <div className="cell-hero">
          <h1 className="cell-hero-title">Introduction &amp; <span style={{ color: '#6366f1' }}>Essentials</span></h1>
          <p className="cell-hero-sub">6 Big Questions (5W1H) and prerequisites for chemical coordination and integration.</p>
        </div>

        <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
          <div style={{ display: 'grid', gap: '20px' }}>
            {questions.map((item, idx) => {
              const isExpanded = !!expandedCards[idx];
              return (
                <div
                  key={idx}
                  style={{ background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', cursor: 'pointer' }}
                  onClick={() => setExpandedCards(prev => ({ ...prev, [idx]: !prev[idx] }))}
                >
                  <div className="cell-intro-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: 800, color: '#1e1b4b', margin: 0 }}>
                      {idx + 1}. {item.q}
                    </h3>
                    <div style={{ fontSize: '20px', transition: 'transform 0.3s', transform: isExpanded ? 'rotate(180deg)' : 'none' }}>â–¼</div>
                  </div>
                  {isExpanded && (
                    <div className="cell-intro-card-body" style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f1f5f9', fontSize: '15px', color: '#334155', lineHeight: 1.6 }}>
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}