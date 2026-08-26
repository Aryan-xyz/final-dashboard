import React from 'react';
import Navbar from '../components/Navbar';
import { NCERT_SKILLS_SECTIONS } from '../data/ncertSkillsData';

export default function LearnView({ selectedSkillIndex, navigateTo, onOpenLearn }) {
  const sec = NCERT_SKILLS_SECTIONS[selectedSkillIndex] || NCERT_SKILLS_SECTIONS[0];
  const entries = NCERT_SKILLS_SECTIONS.slice(selectedSkillIndex, Math.min(selectedSkillIndex + 3, NCERT_SKILLS_SECTIONS.length));

  return (
    <div className="app-view active">
      <div className="cell-page">
        <nav className="cell-nav">
          <button className="cell-nav-back" onClick={() => navigateTo('skills')}>â† Back to Skills</button>
        </nav>
        <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
          <div className="learning-panel" style={{ background: '#fff', borderRadius: '24px', padding: '40px', border: '1px solid #e2e8f0', boxShadow: 'var(--cell-sh)' }}>
            <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--cell-indigo)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
              TOPIC {selectedSkillIndex + 1}
            </div>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '32px', fontWeight: 900, color: '#1e1b4b', margin: '0 0 32px' }}>
              {sec.title.replace(/^\d+(?:\.\d+)*\s*/, '')}
            </h1>
            {entries.map((item, i) => (
              <section key={i} style={{ marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid #f1f5f9' }}>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: 800, color: '#1e1b4b', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '16px', color: '#334155', lineHeight: 1.7, marginBottom: '16px' }}>{item.content}</p>
                <div style={{ background: 'rgba(79,70,229,0.06)', borderLeft: '4px solid var(--cell-indigo)', padding: '12px 16px', borderRadius: '8px', fontSize: '14px', color: 'var(--cell-indigo)' }}>
                  <strong>Focus:</strong> {item.focus}
                </div>
              </section>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
              <button onClick={() => navigateTo('skills')} style={{ padding: '12px 24px', borderRadius: '100px', border: '1px solid #e2e8f0', background: '#fff', fontWeight: 700, cursor: 'pointer' }}>â† Back to Core Skills</button>
              {selectedSkillIndex < NCERT_SKILLS_SECTIONS.length - 1 && (
                <button onClick={() => onOpenLearn(selectedSkillIndex + 1)} style={{ padding: '12px 24px', borderRadius: '100px', border: 'none', background: 'var(--cell-indigo)', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>Next Topic â†’</button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}