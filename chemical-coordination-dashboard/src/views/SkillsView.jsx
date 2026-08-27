import React from 'react';
import Navbar from '../components/Navbar';
import { NCERT_SKILLS_SECTIONS } from '../data/ncertSkillsData';
import { SKILL_COLORS, SKILL_ICONS } from '../data/practiceQuestionsData';

export default function SkillsView({ currentView, navigateTo, onOpenLearn, onOpenPractice, onOpenAssess }) {
  return (
    <div className="app-view active">
      <div className="cell-page">
        <Navbar currentView={currentView} navigateTo={navigateTo} />

        <div className="cell-hero">
          <h1 className="cell-hero-title">Skills &amp; <span style={{ color: '#7c3aed' }}>Mastery</span></h1>
          <p className="cell-hero-sub">Complete NCERT Chapter 19 sub-topics, interactive lesson modules, and assessment engine.</p>
        </div>

        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
          <div className="core-skills-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {NCERT_SKILLS_SECTIONS.map((sec, idx) => {
              const c = SKILL_COLORS[idx % SKILL_COLORS.length];
              const icon = SKILL_ICONS[idx % SKILL_ICONS.length];
              return (
                <div key={idx} className="core-skill-card" style={{ background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: 'var(--cell-sh)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                    <div className="core-skill-icon" style={{ background: `${c}12`, color: c, width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>{icon}</div>
                    <div className="core-skill-main">
                      <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: 800, color: '#1e1b4b', margin: '0 0 4px' }}>{sec.title}</h3>
                      <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>{sec.subtitle}</p>
                    </div>
                  </div>
                  <div className="core-skill-actions" style={{ display: 'flex', gap: '8px' }}>
                    <button type="button" onClick={() => onOpenLearn(idx)} style={{ flex: 1, padding: '8px 14px', borderRadius: '100px', border: '1px solid #e2e8f0', background: '#fff', fontWeight: 700, fontSize: '13px', cursor: 'pointer' }}>📖 Learn</button>
                    <button type="button" onClick={() => onOpenPractice(idx)} style={{ flex: 1, padding: '8px 14px', borderRadius: '100px', border: '1px solid #e2e8f0', background: '#fff', fontWeight: 700, fontSize: '13px', cursor: 'pointer' }}>✏️ Practice</button>
                    <button type="button" className="assess" onClick={() => onOpenAssess(idx)} style={{ flex: 1, padding: '8px 14px', borderRadius: '100px', border: 'none', background: c, color: '#fff', fontWeight: 700, fontSize: '13px', cursor: 'pointer' }}>🏆 Assess</button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}