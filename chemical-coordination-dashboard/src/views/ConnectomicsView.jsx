import React from 'react';
import Navbar from '../components/Navbar';
import EndocrineSvgMap from '../components/EndocrineSvgMap';
import GlandInspectorCard from '../components/GlandInspectorCard';

export default function ConnectomicsView({ currentView, navigateTo, selectedGland, onSelectGland }) {
  return (
    <div className="app-view active">
      <div className="cell-page">
        <Navbar currentView={currentView} navigateTo={navigateTo} />

        <div className="cell-hero">
          <h1 className="cell-hero-title">Endocrine <span style={{ color: '#8bde4f' }}>Connectomics</span></h1>
          <p className="cell-hero-sub">Explore the interconnected human endocrine system through our interactive body map and cross-topic pathways.</p>
        </div>

        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '60px', alignItems: 'start' }}>
            <div style={{ background: '#fff', borderRadius: '24px', padding: '32px', border: '1px solid #e2e8f0', boxShadow: 'var(--cell-sh)', textAlign: 'center' }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: 800, color: '#1e1b4b', marginBottom: '8px' }}>Human Endocrine Anatomy</h3>
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '24px' }}>Click any gland dot to inspect its location, hormones, and physiological roles.</p>
              <EndocrineSvgMap selectedGland={selectedGland} onSelectGland={onSelectGland} />
            </div>

            <GlandInspectorCard selectedGland={selectedGland} navigateTo={navigateTo} />
          </div>

          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '28px', fontWeight: 900, marginBottom: '32px', textAlign: 'center', color: '#1e1b4b' }}>Cross-Topic Physiological Pathways</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '60px' }}>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#6366f1' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ fontSize: '24px' }}>ðŸ§ </div>
                <div style={{ fontSize: '12px', fontWeight: 800, background: '#6366f115', color: '#6366f1', padding: '4px 10px', borderRadius: '100px' }}>Master Axis</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontWeight: 800, color: '#1e1b4b' }}>Hypothalamus</span>
                <span style={{ color: '#94a3b8' }}>â†’</span>
                <span style={{ fontWeight: 800, color: '#6366f1' }}>Pituitary Gland</span>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>GnRH, TRH, CRH, GHRH &amp; Somatostatin reach the anterior pituitary via portal circulatory system, while posterior pituitary is under direct neural control.</p>
            </div>

            <div style={{ background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#0d9488' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ fontSize: '24px' }}>ðŸ©¸</div>
                <div style={{ fontSize: '12px', fontWeight: 800, background: '#0d948815', color: '#0d9488', padding: '4px 10px', borderRadius: '100px' }}>Homeostasis</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontWeight: 800, color: '#1e1b4b' }}>Pancreas Î±-cells (Glucagon)</span>
                <span style={{ color: '#94a3b8' }}>â†”</span>
                <span style={{ fontWeight: 800, color: '#0d9488' }}>Pancreas Î²-cells (Insulin)</span>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>Antagonistic dual regulation: Glucagon induces glycogenolysis/gluconeogenesis (hyperglycemic), while Insulin promotes glucose uptake &amp; glycogenesis (hypoglycemic).</p>
            </div>

            <div style={{ background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#7c3aed' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ fontSize: '24px' }}>ðŸ¦´</div>
                <div style={{ fontSize: '12px', fontWeight: 800, background: '#7c3aed15', color: '#7c3aed', padding: '4px 10px', borderRadius: '100px' }}>Calcium Balance</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontWeight: 800, color: '#1e1b4b' }}>Parathyroid (PTH)</span>
                <span style={{ color: '#94a3b8' }}>â†”</span>
                <span style={{ fontWeight: 800, color: '#7c3aed' }}>Thyroid (TCT)</span>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>PTH increases blood CaÂ²âº levels by bone resorption &amp; renal reabsorption (hypercalcemic), while Thyrocalcitonin (TCT) lowers blood CaÂ²âº levels.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}