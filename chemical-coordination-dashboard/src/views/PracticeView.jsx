import React, { useState } from 'react';
import { PRACTICE_QUESTIONS } from '../data/practiceQuestionsData';

export default function PracticeView({ navigateTo }) {
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [practiceSelected, setPracticeSelected] = useState(null);

  const q = PRACTICE_QUESTIONS[practiceIndex];
  const answered = practiceSelected !== null;
  const ok = answered && practiceSelected === q.correct;

  return (
    <div className="app-view active">
      <div className="cell-page">
        <nav className="cell-nav">
          <button className="cell-nav-back" onClick={() => navigateTo('skills')}>â† Back to Skills</button>
        </nav>
        <main style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 24px' }}>
          <div style={{ background: '#fff', borderRadius: '24px', padding: '36px', border: '1px solid #e2e8f0', boxShadow: 'var(--cell-sh)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', color: '#64748b', fontSize: '14px', fontWeight: 700 }}>
              <span onClick={() => navigateTo('skills')} style={{ cursor: 'pointer', color: 'var(--cell-indigo)' }}>â† Exit Practice</span>
              <span>Practice {practiceIndex + 1} / 15</span>
            </div>

            <p style={{ fontSize: '20px', fontWeight: 800, color: '#1e1b4b', marginBottom: '24px', lineHeight: 1.5 }}>{q.question}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {q.options.map((opt, i) => {
                let styleObj = { padding: '14px 20px', borderRadius: '12px', border: '1.5px solid #e2e8f0', background: '#fff', textAlign: 'left', fontWeight: 600, fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' };
                if (answered) {
                  if (i === q.correct) styleObj = { ...styleObj, background: '#ecfdf5', borderColor: '#10b981', color: '#065f46', fontWeight: 800 };
                  else if (practiceSelected === i) styleObj = { ...styleObj, background: '#fef2f2', borderColor: '#ef4444', color: '#991b1b' };
                }
                return (
                  <button key={i} style={styleObj} onClick={() => !answered && setPracticeSelected(i)}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px' }}>{String.fromCharCode(65 + i)}</span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div style={{ background: ok ? '#ecfdf5' : '#fef2f2', border: ok ? '1px solid #a7f3d0' : '1px solid #fecaca', borderRadius: '12px', padding: '16px', marginBottom: '24px', color: ok ? '#065f46' : '#991b1b' }}>
                <b>{ok ? '✓ Correct Answer' : '✗ Incorrect'}</b><br />
                Correct Answer: {String.fromCharCode(65 + q.correct)}. {q.options[q.correct]}<br />
                {q.explanation}
              </div>
            )}

            <div style={{ textAlign: 'right' }}>
              <button
                onClick={() => {
                  if (practiceIndex < 14) { setPracticeIndex(prev => prev + 1); setPracticeSelected(null); }
                  else { alert('Practice completed!'); navigateTo('skills'); }
                }}
                disabled={!answered}
                style={{ padding: '12px 28px', borderRadius: '100px', border: 'none', background: answered ? 'var(--cell-indigo)' : '#cbd5e1', color: '#fff', fontWeight: 800, cursor: answered ? 'pointer' : 'not-allowed' }}
              >
                {practiceIndex === 14 ? 'Finish Practice' : 'Next Question →'}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}