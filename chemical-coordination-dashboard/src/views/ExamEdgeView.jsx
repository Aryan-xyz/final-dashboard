import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { BLANKS_QUESTIONS_DATA } from '../data/blanksQuestionsData';
import { MATCH_ITEMS_DATA, MATCH_OPTIONS_LIST } from '../data/matchData';

export default function ExamEdgeView({ currentView, navigateTo }) {
  const [examMode, setExamMode] = useState('mcqs');
  const [blanksState, setBlanksState] = useState({});
  const [matchState, setMatchState] = useState({});

  const handleBlankChange = (id, val) => {
    setBlanksState(prev => ({ ...prev, [id]: { ...prev[id], value: val } }));
  };

  const checkSingleBlank = (id) => {
    const q = BLANKS_QUESTIONS_DATA.find(item => item.id === id);
    if (!q) return;
    const userVal = (blanksState[id]?.value || '').trim().toLowerCase();
    if (!userVal) return;
    const isCorrect = q.answers.some(ans => userVal.includes(ans.toLowerCase()) || ans.toLowerCase().includes(userVal));
    setBlanksState(prev => ({
      ...prev,
      [id]: { ...prev[id], checked: true, isCorrect }
    }));
  };

  const checkAllBlanks = () => {
    BLANKS_QUESTIONS_DATA.forEach(q => checkSingleBlank(q.id));
  };

  const resetAllBlanks = () => {
    setBlanksState({});
  };

  const handleMatchChange = (id, val) => {
    const item = MATCH_ITEMS_DATA.find(m => m.id === id);
    if (!item) return;
    const isCorrect = val === item.correctVal;
    setMatchState(prev => ({
      ...prev,
      [id]: { value: val, checked: !!val, isCorrect }
    }));
  };

  const checkAllMatch = () => {
    MATCH_ITEMS_DATA.forEach(m => {
      const current = matchState[m.id];
      if (current && current.value) {
        setMatchState(prev => ({
          ...prev,
          [m.id]: { ...current, checked: true, isCorrect: current.value === m.correctVal }
        }));
      }
    });
  };

  const resetAllMatch = () => {
    setMatchState({});
  };

  const blanksScore = Object.values(blanksState).filter(s => s?.isCorrect).length;
  const matchScore = Object.values(matchState).filter(s => s?.isCorrect).length;

  return (
    <div className="app-view active">
      <div className="cell-page">
        <Navbar currentView={currentView} navigateTo={navigateTo} />

        <div className="cell-hero">
          <h1 className="cell-hero-title">Exam <span style={{ color: '#ef4444' }}>Edge</span></h1>
          <p className="cell-hero-sub">High-Yield NEET MCQs, Fill in the Blanks, and Match the Following practice modules.</p>
        </div>

        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ padding: '12px 24px', borderRadius: '100px', fontWeight: 800, cursor: 'pointer', border: examMode === 'mcqs' ? '2px solid #ef4444' : '2px solid #e2e8f0', background: examMode === 'mcqs' ? '#ef444415' : '#fff', color: examMode === 'mcqs' ? '#ef4444' : '#64748b' }} onClick={() => setExamMode('mcqs')}>NEET MCQs</button>
            <button style={{ padding: '12px 24px', borderRadius: '100px', fontWeight: 800, cursor: 'pointer', border: examMode === 'blanks' ? '2px solid #ef4444' : '2px solid #e2e8f0', background: examMode === 'blanks' ? '#ef444415' : '#fff', color: examMode === 'blanks' ? '#ef4444' : '#64748b' }} onClick={() => setExamMode('blanks')}>Fill in Blanks</button>
            <button style={{ padding: '12px 24px', borderRadius: '100px', fontWeight: 800, cursor: 'pointer', border: examMode === 'match' ? '2px solid #ef4444' : '2px solid #e2e8f0', background: examMode === 'match' ? '#ef444415' : '#fff', color: examMode === 'match' ? '#ef4444' : '#64748b' }} onClick={() => setExamMode('match')}>Match the Following</button>
            <button style={{ padding: '12px 24px', borderRadius: '100px', fontWeight: 800, cursor: 'pointer', border: examMode === 'exercises' ? '2px solid #ef4444' : '2px solid #e2e8f0', background: examMode === 'exercises' ? '#ef444415' : '#fff', color: examMode === 'exercises' ? '#ef4444' : '#64748b' }} onClick={() => setExamMode('exercises')}>NCERT Exercises</button>
          </div>

          {examMode === 'mcqs' && (
            <div style={{ background: '#fff', borderRadius: '24px', padding: '36px', border: '1px solid #e2e8f0', boxShadow: 'var(--cell-sh)' }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: 900, color: '#1e1b4b', marginBottom: '8px' }}>NEET MCQs Practice</h3>
              <p style={{ color: '#64748b', marginBottom: '24px' }}>Practice high-yield NEET multiple choice questions from Chapter 19.</p>
              <button onClick={() => navigateTo('terminology')} style={{ padding: '14px 28px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '100px', fontWeight: 800, cursor: 'pointer' }}>Launch Interactive Quiz Mode ðŸ§ª</button>
            </div>
          )}

          {examMode === 'blanks' && (
            <div style={{ background: '#fff', borderRadius: '24px', padding: '36px', border: '1px solid #e2e8f0', boxShadow: 'var(--cell-sh)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: 900, color: '#1e1b4b', margin: '0 0 4px' }}>Interactive Fill in the Blanks</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Type your answers in the blank fields below. Instant feedback &amp; correct answers will be revealed upon checking!</p>
                </div>
                <div style={{ background: 'rgba(79,70,229,0.1)', border: '1.5px solid rgba(79,70,229,0.2)', padding: '10px 20px', borderRadius: '100px', fontWeight: 900, color: 'var(--cell-indigo)', fontSize: '16px' }}>
                  Score: {blanksScore} / {BLANKS_QUESTIONS_DATA.length}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
                <button onClick={checkAllBlanks} style={{ padding: '12px 24px', background: 'var(--cell-indigo)', color: '#fff', border: 'none', borderRadius: '100px', fontWeight: 800, cursor: 'pointer' }}>Check All Answers âœ“</button>
                <button onClick={resetAllBlanks} style={{ padding: '12px 24px', background: '#fff', color: '#64748b', border: '1.5px solid #e2e8f0', borderRadius: '100px', fontWeight: 800, cursor: 'pointer' }}>Reset All ðŸ”„</button>
              </div>

              <div style={{ display: 'grid', gap: '20px' }}>
                {BLANKS_QUESTIONS_DATA.map((q, idx) => {
                  const st = blanksState[q.id] || {};
                  return (
                    <div key={q.id} className={interactive-blank-box } style={{ padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', background: st.checked ? (st.isCorrect ? '#ecfdf5' : '#fef2f2') : '#f8fafc' }}>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--cell-indigo)', fontWeight: 900, marginRight: '6px' }}>{idx + 1}.</span> {q.text}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
                        <input type="text" value={st.value || ''} onChange={(e) => handleBlankChange(q.id, e.target.value)} onKeyDown={(e) => e.key === 'Enter' && checkSingleBlank(q.id)} placeholder="Type your answer here..." style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px', width: '260px' }} />
                        <button onClick={() => checkSingleBlank(q.id)} style={{ padding: '10px 18px', background: 'rgba(79,70,229,0.1)', color: 'var(--cell-indigo)', border: '1px solid rgba(79,70,229,0.2)', borderRadius: '10px', fontWeight: 800, cursor: 'pointer', fontSize: '13px' }}>Submit</button>
                        {st.checked && (
                          <span style={{ fontWeight: 800, fontSize: '14px', color: st.isCorrect ? 'var(--cell-success)' : 'var(--cell-wrong)' }}>
                            {st.isCorrect ? 'âœ“ Correct!' : 'âœ— Incorrect'}
                          </span>
                        )}
                      </div>

                      {st.checked && (
                        <div style={{ marginTop: '14px', padding: '12px 16px', borderRadius: '100px', fontSize: '14px', background: st.isCorrect ? '#d1fae5' : '#fee2e2', color: st.isCorrect ? '#065f46' : '#991b1b' }}>
                          <strong>{st.isCorrect ? 'âœ“ Perfect!' : 'âŒ Incorrect.'}</strong> Correct Answer: <strong>{q.displayAnswer}</strong>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {examMode === 'match' && (
            <div style={{ background: '#fff', borderRadius: '24px', padding: '36px', border: '1px solid #e2e8f0', boxShadow: 'var(--cell-sh)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: 900, color: '#1e1b4b', margin: '0 0 4px' }}>Interactive Match the Following</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Select the correct matching gland from Column II for each hormone in Column I.</p>
                </div>
                <div style={{ background: 'rgba(13,148,136,0.1)', border: '1.5px solid rgba(13,148,136,0.2)', padding: '10px 20px', borderRadius: '100px', fontWeight: 900, color: 'var(--cell-teal)', fontSize: '16px' }}>
                  Score: {matchScore} / {MATCH_ITEMS_DATA.length}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
                <button onClick={checkAllMatch} style={{ padding: '12px 24px', background: 'var(--cell-teal)', color: '#fff', border: 'none', borderRadius: '100px', fontWeight: 800, cursor: 'pointer' }}>Verify Matches âœ“</button>
                <button onClick={resetAllMatch} style={{ padding: '12px 24px', background: '#fff', color: '#64748b', border: '1.5px solid #e2e8f0', borderRadius: '100px', fontWeight: 800, cursor: 'pointer' }}>Reset Matches ðŸ”„</button>
              </div>

              <div style={{ display: 'grid', gap: '16px' }}>
                {MATCH_ITEMS_DATA.map((m) => {
                  const st = matchState[m.id] || {};
                  return (
                    <div key={m.id} style={{ padding: '16px 20px', borderRadius: '16px', border: '1px solid #e2e8f0', background: st.checked ? (st.isCorrect ? '#ecfdf5' : '#fef2f2') : '#f8fafc' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#1e1b4b', flex: 1, minWidth: '240px' }}>{m.item}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <select value={st.value || ''} onChange={(e) => handleMatchChange(m.id, e.target.value)} style={{ padding: '10px 16px', borderRadius: '100px', border: '1.5px solid #cbd5e1', fontSize: '14px', fontWeight: 700 }}>
                            <option value="">-- Select Column II Gland --</option>
                            {MATCH_OPTIONS_LIST.map(opt => (
                              <option key={opt.val} value={opt.val}>{opt.text}</option>
                            ))}
                          </select>
                          {st.checked && (
                            <span style={{ fontWeight: 800, fontSize: '14px', color: st.isCorrect ? 'var(--cell-success)' : 'var(--cell-wrong)' }}>
                              {st.isCorrect ? 'âœ“ Correct!' : 'âœ— Incorrect'}
                            </span>
                          )}
                        </div>
                      </div>
                      {st.checked && !st.isCorrect && (
                        <div style={{ marginTop: '12px', padding: '10px 16px', borderRadius: '100px', fontSize: '14px', background: '#fee2e2', color: '#991b1b' }}>
                          âŒ Incorrect Match. Right Answer: <strong>{m.correctText}</strong>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {examMode === 'exercises' && (
            <div style={{ background: '#fff', borderRadius: '24px', padding: '36px', border: '1px solid #e2e8f0', boxShadow: 'var(--cell-sh)' }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: 900, color: '#1e1b4b', marginBottom: '16px' }}>NCERT Chapter 19 Exercises</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6 }}>All textbook exercises are fully resolved in the <strong>Skills &amp; Mastery</strong> section under Section 'Exercises'.</p>
              <button onClick={() => navigateTo('skills')} style={{ marginTop: '16px', padding: '12px 28px', background: 'var(--cell-indigo)', color: '#fff', border: 'none', borderRadius: '100px', fontWeight: 800, cursor: 'pointer' }}>Open NCERT Exercises in Skills â†’</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}