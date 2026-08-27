import React, { useState, useEffect, useRef } from 'react';
import { PRACTICE_QUESTIONS } from '../data/practiceQuestionsData';

export default function AssessView({
  selectedSkillIndex,
  navigateTo,
  onOpenAssess
}) {
  const [assessIndex, setAssessIndex] = useState(0);
  const [assessAnswers, setAssessAnswers] = useState({});
  const [assessMarked, setAssessMarked] = useState({});
  const [assessSeconds, setAssessSeconds] = useState(0);
  const [assessSubmitted, setAssessSubmitted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!assessSubmitted) {
      timerRef.current = setInterval(() => {
        setAssessSeconds((prev) => prev + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [assessSubmitted]);

  return (
    <div className="app-view active">
      <div className="cell-page">

        <nav className="cell-nav">
          <button
            type="button"
            className="cell-nav-back"
            onClick={() => navigateTo('skills')}
          >
            ← Back to Skills
          </button>
        </nav>

        <main
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '40px 24px'
          }}
        >
          {!assessSubmitted ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 280px',
                gap: '32px'
              }}
            >

              {/* QUESTION AREA */}
              <div
                style={{
                  background: '#fff',
                  borderRadius: '24px',
                  padding: '36px',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'var(--cell-sh)'
                }}
              >
                {(() => {
                  const q = PRACTICE_QUESTIONS[assessIndex];

                  return (
                    <div>

                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          letterSpacing: '1.5px',
                          textTransform: 'uppercase',
                          color: 'var(--cell-indigo)',
                          marginBottom: '8px'
                        }}
                      >
                        QUESTION {assessIndex + 1}
                      </div>

                      <p
                        style={{
                          fontSize: '20px',
                          fontWeight: 800,
                          color: '#1e1b4b',
                          marginBottom: '24px',
                          lineHeight: 1.5
                        }}
                      >
                        {q.question}
                      </p>

                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                          marginBottom: '24px'
                        }}
                      >
                        {q.options.map((option, i) => (
                          <button
                            type="button"
                            key={i}
                            onClick={() =>
                              setAssessAnswers((prev) => ({
                                ...prev,
                                [assessIndex]: i
                              }))
                            }
                            style={{
                              padding: '14px 20px',
                              borderRadius: '12px',
                              border:
                                assessAnswers[assessIndex] === i
                                  ? '2px solid var(--cell-indigo)'
                                  : '1.5px solid #e2e8f0',
                              background:
                                assessAnswers[assessIndex] === i
                                  ? 'rgba(79,70,229,0.06)'
                                  : '#fff',
                              textAlign: 'left',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            {String.fromCharCode(65 + i)}
                            &nbsp;&nbsp;
                            {option}
                          </button>
                        ))}
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          gap: '12px',
                          justifyContent: 'space-between',
                          marginTop: '32px'
                        }}
                      >

                        <button
                          type="button"
                          onClick={() =>
                            setAssessMarked((prev) => ({
                              ...prev,
                              [assessIndex]: !prev[assessIndex]
                            }))
                          }
                          style={{
                            padding: '10px 18px',
                            borderRadius: '100px',
                            border: '1px solid #e2e8f0',
                            background: '#fff',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          {assessMarked[assessIndex]
                            ? '✓ Marked for Review'
                            : 'Mark for Review'}
                        </button>

                        <div
                          style={{
                            display: 'flex',
                            gap: '12px'
                          }}
                        >

                          {assessIndex > 0 && (
                            <button
                              type="button"
                              onClick={() =>
                                setAssessIndex((prev) => prev - 1)
                              }
                              style={{
                                padding: '10px 18px',
                                borderRadius: '100px',
                                border: '1px solid #e2e8f0',
                                background: '#fff',
                                fontWeight: 700,
                                cursor: 'pointer'
                              }}
                            >
                              ← Previous
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() =>
                              setAssessIndex((prev) =>
                                Math.min(
                                  prev + 1,
                                  PRACTICE_QUESTIONS.length - 1
                                )
                              )
                            }
                            style={{
                              padding: '10px 24px',
                              borderRadius: '100px',
                              border: 'none',
                              background: 'var(--cell-indigo)',
                              color: '#fff',
                              fontWeight: 800,
                              cursor: 'pointer'
                            }}
                          >
                            {assessIndex === PRACTICE_QUESTIONS.length - 1
                              ? 'Finish'
                              : 'Next →'}
                          </button>

                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* SIDEBAR */}
              <div
                style={{
                  background: '#fff',
                  borderRadius: '24px',
                  padding: '24px',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'var(--cell-sh)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >

                {/* TIMER */}
                <div
                  style={{
                    textAlign: 'center',
                    background: '#f8fafc',
                    padding: '16px',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 800,
                      color: '#64748b',
                      textTransform: 'uppercase'
                    }}
                  >
                    TIME ELAPSED
                  </div>

                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 900,
                      fontFamily: "'Outfit', sans-serif",
                      color: 'var(--cell-indigo)'
                    }}
                  >
                    {Math.floor(assessSeconds / 60)}:
                    {String(assessSeconds % 60).padStart(2, '0')}
                  </div>
                </div>

                {/* QUESTION PALETTE */}
                <div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 800,
                      color: '#1e1b4b',
                      marginBottom: '12px'
                    }}
                  >
                    Question Palette
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(5, 1fr)',
                      gap: '8px'
                    }}
                  >
                    {PRACTICE_QUESTIONS.map((_, i) => {
                      const answered =
                        assessAnswers[i] !== undefined;

                      const marked = !!assessMarked[i];

                      let bg = '#f1f5f9';
                      let color = '#475569';

                      if (answered) {
                        bg = '#10b981';
                        color = '#fff';
                      }

                      if (marked) {
                        bg = '#f59e0b';
                        color = '#fff';
                      }

                      if (i === assessIndex) {
                        bg = 'var(--cell-indigo)';
                        color = '#fff';
                      }

                      return (
                        <button
                          type="button"
                          key={i}
                          onClick={() => setAssessIndex(i)}
                          style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '10px',
                            border: 'none',
                            background: bg,
                            color,
                            fontWeight: 800,
                            cursor: 'pointer'
                          }}
                        >
                          {i + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* SUBMIT */}
                <button
                  type="button"
                  onClick={() => setAssessSubmitted(true)}
                  style={{
                    padding: '14px',
                    borderRadius: '100px',
                    border: 'none',
                    background: 'var(--cell-indigo)',
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: '15px',
                    cursor: 'pointer',
                    marginTop: 'auto'
                  }}
                >
                  Submit Assessment
                </button>

              </div>
            </div>
          ) : (

            /* RESULTS */
            <div
              style={{
                background: '#fff',
                borderRadius: '24px',
                padding: '40px',
                border: '1px solid #e2e8f0',
                boxShadow: 'var(--cell-sh)'
              }}
            >

              <div
                style={{
                  textAlign: 'center',
                  marginBottom: '32px'
                }}
              >
                <div
                  style={{
                    fontSize: '64px',
                    marginBottom: '8px'
                  }}
                >
                  🏆
                </div>

                <h2
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '32px',
                    fontWeight: 900,
                    color: '#1e1b4b',
                    margin: 0
                  }}
                >
                  Assessment Results
                </h2>

                {(() => {
                  let score = 0;

                  PRACTICE_QUESTIONS.forEach((q, i) => {
                    if (assessAnswers[i] === q.correct) {
                      score++;
                    }
                  });

                  return (
                    <div>
                      <h3
                        style={{
                          fontSize: '24px',
                          color: 'var(--cell-indigo)',
                          margin: '8px 0 4px',
                          fontWeight: 900
                        }}
                      >
                        Score: {score} / {PRACTICE_QUESTIONS.length}
                      </h3>

                      <p
                        style={{
                          color: '#64748b',
                          margin: 0
                        }}
                      >
                        Time: {Math.floor(assessSeconds / 60)}:
                        {String(assessSeconds % 60).padStart(2, '0')}
                      </p>
                    </div>
                  );
                })()}
              </div>

              {/* ANSWER REVIEW */}
              <div
                style={{
                  display: 'grid',
                  gap: '16px',
                  marginBottom: '32px'
                }}
              >
                {PRACTICE_QUESTIONS.map((q, i) => {
                  const userAnswer = assessAnswers[i];
                  const correct = userAnswer === q.correct;

                  return (
                    <div
                      key={i}
                      style={{
                        padding: '16px 20px',
                        borderRadius: '14px',
                        border: correct
                          ? '1.5px solid #86efac'
                          : '1.5px solid #fca5a5',
                        background: correct
                          ? '#ecfdf5'
                          : '#fef2f2'
                      }}
                    >
                      <b style={{ color: '#1e1b4b' }}>
                        Q{i + 1}.
                      </b>{' '}
                      {q.question}
                      <br />

                      <span style={{ fontSize: '14px' }}>
                        Your Answer:{' '}
                        <strong>
                          {userAnswer == null
                            ? 'Not Answered'
                            : q.options[userAnswer]}
                        </strong>{' '}
                        {correct ? '✓' : '✗'}
                      </span>

                      {!correct && (
                        <div
                          style={{
                            fontSize: '14px',
                            marginTop: '4px',
                            color: '#991b1b'
                          }}
                        >
                          <b>Correct Answer:</b>{' '}
                          {q.options[q.correct]}
                          <br />
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* RESULT BUTTONS */}
              <div style={{ textAlign: 'center' }}>
                <button
                  type="button"
                  onClick={() => onOpenAssess(selectedSkillIndex)}
                  style={{
                    padding: '12px 28px',
                    borderRadius: '100px',
                    border: 'none',
                    background: 'var(--cell-indigo)',
                    color: '#fff',
                    fontWeight: 800,
                    cursor: 'pointer',
                    marginRight: '12px'
                  }}
                >
                  Retake Assessment
                </button>

                <button
                  type="button"
                  onClick={() => navigateTo('skills')}
                  style={{
                    padding: '12px 28px',
                    borderRadius: '100px',
                    border: '1px solid #e2e8f0',
                    background: '#fff',
                    color: '#475569',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  Back to Skills
                </button>
              </div>

            </div>
          )}
        </main>
      </div>
    </div>
  );
}