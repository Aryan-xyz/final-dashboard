import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { TERMS_DATA } from '../data/termsData';
import { RULES_DATA } from '../data/rulesData';
import { QUIZ_DATA } from '../data/quizData';

export default function TerminologyView({ currentView, navigateTo }) {
  const [lexiconTab, setLexiconTab] = useState('terms');
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [currentRuleIndex, setCurrentRuleIndex] = useState(0);

  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState(null);
  const [quizAnswered, setQuizAnswered] = useState(false);

  const handleSelectQuizOption = (index) => {
    if (quizAnswered) return;
    setQuizSelectedOption(index);
    setQuizAnswered(true);
    if (index === QUIZ_DATA[quizIndex].correct) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    setQuizIndex(prev => prev + 1);
    setQuizSelectedOption(null);
    setQuizAnswered(false);
  };

  const handleResetQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setQuizSelectedOption(null);
    setQuizAnswered(false);
  };

  return (
    <div className="app-view active">
      <div className="cell-page">
        <Navbar currentView={currentView} navigateTo={navigateTo} />

        <div className="cell-hero">
          <h1 className="cell-hero-title">Hormone <span style={{ color: '#0d9488' }}>Lexicon</span></h1>
          <p className="cell-hero-sub">
            {lexiconTab === 'terms' ? 'Explore core concepts with 12 key terms.' : lexiconTab === 'rules' ? 'Explore core concepts with 5 golden rules.' : 'Test your hormone vocabulary & NEET rules!'}
          </p>
        </div>

        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', justifyContent: 'center' }}>
            <button className={cell-nav-link } onClick={() => setLexiconTab('terms')}>12 Key Terms</button>
            <button className={cell-nav-link } onClick={() => setLexiconTab('rules')}>5 Golden Rules</button>
            <button className={cell-nav-link } onClick={() => setLexiconTab('quiz')}>NEET Quiz</button>
          </div>

          {lexiconTab !== 'quiz' ? (
            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}>
              <div className="cell-lexicon-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {lexiconTab === 'terms' ? (
                  TERMS_DATA.map((t, i) => {
                    const isActive = currentTermIndex === i;
                    return (
                      <button key={i} className={cell-term-btn-mini } onClick={() => setCurrentTermIndex(i)} style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: isActive ? 'var(--cell-indigo)' : '#fff', color: isActive ? '#fff' : 'inherit', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', textAlign: 'left' }}>
                        <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: isActive ? '#fff' : t.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>{t.icon}</div>
                        <span style={{ fontWeight: 800, fontSize: '15px' }}>{t.name}</span>
                      </button>
                    );
                  })
                ) : (
                  RULES_DATA.map((r, i) => {
                    const isActive = currentRuleIndex === i;
                    return (
                      <button key={i} className={cell-term-btn-mini } onClick={() => setCurrentRuleIndex(i)} style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: isActive ? r.color : '#fff', color: isActive ? '#fff' : 'inherit', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', textAlign: 'left' }}>
                        <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: isActive ? '#fff' : r.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 900, color: isActive ? r.color : 'inherit' }}>{r.num}</div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontWeight: 800, fontSize: '14px' }}>Rule {r.num}</span>
                          <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', opacity: 0.8 }}>{r.title}</span>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              <div style={{ background: '#fff', borderRadius: '24px', padding: '32px', border: '1px solid #e2e8f0', boxShadow: 'var(--cell-sh)' }}>
                {lexiconTab === 'terms' ? (
                  (() => {
                    const item = TERMS_DATA[currentTermIndex];
                    return (
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                          <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: item.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>{item.icon}</div>
                          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '30px', fontWeight: 900, color: item.color, margin: 0 }}>{item.name}</h2>
                        </div>
                        <p style={{ fontSize: '17px', color: 'var(--cell-text)', lineHeight: 1.65, margin: '0 0 24px' }}>{item.def}</p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
                          <div>
                            <h4 style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.5px', color: item.color, marginBottom: '12px', fontWeight: 800 }}>Examples &amp; NCERT Context</h4>
                            <div style={{ background: item.color + '05', padding: '20px', borderRadius: '16px', border: `1px solid ${item.color}15` }}>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {item.examples.map((ex, idx) => (
                                  <div key={idx} style={{ background: '#fff', border: `1px solid ${item.color}20`, padding: '8px 12px', borderRadius: '8px', fontSize: '14px', fontWeight: 600 }}>{ex}</div>
                                ))}
                              </div>
                              <div style={{ marginTop: '14px', fontSize: '13px', color: 'var(--cell-muted)', fontStyle: 'italic', borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>{item.inUse}</div>
                            </div>
                          </div>
                          <div>
                            <h4 style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.5px', color: 'var(--cell-indigo)', marginBottom: '12px', fontWeight: 800 }}>Pro Memory Tip</h4>
                            <div style={{ background: 'rgba(79, 70, 229, 0.05)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(79, 70, 229, 0.1)' }}>
                              <p style={{ margin: 0, fontSize: '15px', color: 'var(--cell-muted)', lineHeight: 1.6 }}>
                                <span style={{ fontWeight: 800, color: 'var(--cell-indigo)' }}>💡 Memory Hook: </span>{item.memory}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  (() => {
                    const item = RULES_DATA[currentRuleIndex];
                    return (
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                          <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: item.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: item.color, fontWeight: 900 }}>{item.emoji}</div>
                          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '26px', fontWeight: 900, color: item.color, margin: 0 }}>Rule {item.num}: {item.title}</h2>
                        </div>
                        <div style={{ background: item.color + '08', padding: '20px 24px', borderRadius: '16px', borderLeft: `6px solid ${item.color}`, marginBottom: '24px' }}>
                          <p style={{ fontSize: '18px', fontWeight: 700, color: item.color, margin: 0 }}>{item.rule}</p>
                        </div>

                        <p style={{ fontSize: '17px', color: 'var(--cell-text)', lineHeight: 1.65, margin: '0 0 24px' }}>{item.detail}</p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
                          <div>
                            <h4 style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.5px', color: item.color, marginBottom: '12px', fontWeight: 800 }}>NCERT Applications</h4>
                            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)' }}>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {item.examples.map((ex, idx) => (
                                  <div key={idx} style={{ background: '#fff', padding: '8px 12px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, border: '1px solid #e2e8f0' }}>{ex}</div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.5px', color: 'var(--cell-teal)', marginBottom: '12px', fontWeight: 800 }}>NEET Question Trap</h4>
                            <div style={{ background: 'rgba(13, 148, 136, 0.05)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(13, 148, 136, 0.1)' }}>
                              <p style={{ margin: 0, fontSize: '15px', color: 'var(--cell-muted)', lineHeight: 1.6 }}>
                                <span style={{ fontWeight: 800, color: 'var(--cell-teal)' }}>⚠️ Warning: </span>{item.tip}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()
                )}
              </div>
            </div>
          ) : (
            <div style={{ background: '#fff', borderRadius: '24px', padding: '32px', border: '1px solid #e2e8f0', boxShadow: 'var(--cell-sh)', maxWidth: '720px', margin: '0 auto' }}>
              {quizIndex >= QUIZ_DATA.length ? (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontSize: '64px', marginBottom: '16px' }}>🏆</div>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '28px', fontWeight: 900, color: '#1e1b4b' }}>Quiz Completed!</h2>
                  <p style={{ fontSize: '18px', color: 'var(--cell-muted)', marginBottom: '24px' }}>Your final score: <strong style={{ color: 'var(--cell-indigo)' }}>{quizScore} / {QUIZ_DATA.length}</strong></p>
                  <button onClick={handleResetQuiz} style={{ padding: '12px 28px', background: 'var(--cell-indigo)', color: '#fff', border: 'none', borderRadius: '100px', fontWeight: 800, cursor: 'pointer' }}>Try Again 🔄</button>
                </div>
              ) : (
                (() => {
                  const q = QUIZ_DATA[quizIndex];
                  return (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--cell-indigo)' }}>QUESTION {quizIndex + 1} OF {QUIZ_DATA.length}</div>
                          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: 900, margin: '4px 0 0', color: '#1e1b4b' }}>NEET Mastery Quiz</h3>
                        </div>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(79,70,229,0.1)', color: 'var(--cell-indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '18px' }}>{quizScore}</div>
                      </div>

                      <p style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '24px', lineHeight: 1.5 }}>{q.question}</p>

                      <div className="cell-quiz-options" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                        {q.options.map((opt, i) => {
                          let styleObj = { padding: '14px 20px', borderRadius: '12px', border: '1.5px solid #e2e8f0', background: '#fff', textAlign: 'left', fontWeight: 600, fontSize: '16px', cursor: 'pointer' };
                          if (quizAnswered) {
                            if (i === q.correct) styleObj = { ...styleObj, background: '#ecfdf5', borderColor: '#10b981', color: '#065f46', fontWeight: 800 };
                            else if (i === quizSelectedOption) styleObj = { ...styleObj, background: '#fef2f2', borderColor: '#ef4444', color: '#991b1b' };
                          }
                          return (
                            <button key={i} style={styleObj} onClick={() => handleSelectQuizOption(i)} disabled={quizAnswered}>{opt}</button>
                          );
                        })}
                      </div>

                      {quizAnswered && (
                        <div>
                          <div style={{ background: 'rgba(79,70,229,0.06)', borderRadius: '14px', padding: '16px 20px', marginBottom: '24px', borderLeft: '4px solid var(--cell-indigo)' }}>
                            <p style={{ margin: 0, fontSize: '14px', color: '#334155', lineHeight: 1.6 }}><strong style={{ color: 'var(--cell-indigo)' }}>Explanation: </strong>{q.explanation}</p>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <button onClick={handleNextQuizQuestion} style={{ padding: '12px 28px', background: 'var(--cell-indigo)', color: '#fff', border: 'none', borderRadius: '100px', fontWeight: 800, cursor: 'pointer' }}>Next Question →</button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}