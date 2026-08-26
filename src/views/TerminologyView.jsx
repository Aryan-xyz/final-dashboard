import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { TERMS_DATA } from '../data/termsData';
import { RULES_DATA } from '../data/rulesData';
import { QUIZ_DATA } from '../data/quizData';

export default function TerminologyView({
  currentView,
  navigateTo
}) {
  const [lexiconTab, setLexiconTab] = useState('terms');
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [currentRuleIndex, setCurrentRuleIndex] = useState(0);

  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState(null);
  const [quizAnswered, setQuizAnswered] = useState(false);

  /* ---------------- QUIZ FUNCTIONS ---------------- */

  const handleSelectQuizOption = (index) => {
    if (quizAnswered) return;

    const currentQuestion = QUIZ_DATA[quizIndex];

    if (!currentQuestion) return;

    setQuizSelectedOption(index);
    setQuizAnswered(true);

    if (index === currentQuestion.correct) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    setQuizIndex((prev) => prev + 1);
    setQuizSelectedOption(null);
    setQuizAnswered(false);
  };

  const handleResetQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setQuizSelectedOption(null);
    setQuizAnswered(false);
  };

  /* ---------------- CURRENT TERM / RULE ---------------- */

  const currentTerm =
    TERMS_DATA.length > 0
      ? TERMS_DATA[
          Math.min(currentTermIndex, TERMS_DATA.length - 1)
        ]
      : null;

  const currentRule =
    RULES_DATA.length > 0
      ? RULES_DATA[
          Math.min(currentRuleIndex, RULES_DATA.length - 1)
        ]
      : null;

  /* ---------------- RENDER ---------------- */

  return (
    <div className="app-view active">
      <div className="cell-page">

        {/* Navigation */}
        <Navbar
          currentView={currentView}
          navigateTo={navigateTo}
        />

        {/* Hero */}
        <div className="cell-hero">
          <h1 className="cell-hero-title">
            Hormone{' '}
            <span style={{ color: '#0d9488' }}>
              Lexicon
            </span>
          </h1>

          <p className="cell-hero-sub">
            {lexiconTab === 'terms'
              ? 'Explore core concepts with 12 key terms.'
              : lexiconTab === 'rules'
              ? 'Explore core concepts with 5 golden rules.'
              : 'Test your hormone vocabulary & NEET rules!'}
          </p>
        </div>

        <main
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px 24px'
          }}
        >

          {/* Tab Navigation */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginBottom: '32px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <button
              type="button"
              className="cell-nav-link"
              onClick={() => setLexiconTab('terms')}
            >
              12 Key Terms
            </button>

            <button
              type="button"
              className="cell-nav-link"
              onClick={() => setLexiconTab('rules')}
            >
              5 Golden Rules
            </button>

            <button
              type="button"
              className="cell-nav-link"
              onClick={() => setLexiconTab('quiz')}
            >
              NEET Quiz
            </button>
          </div>

          {/* TERMS / RULES */}
          {lexiconTab !== 'quiz' ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  '280px minmax(0, 1fr)',
                gap: '32px'
              }}
            >

              {/* Sidebar */}
              <div
                className="cell-lexicon-sidebar"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >

                {/* Terms List */}
                {lexiconTab === 'terms' ? (
                  TERMS_DATA.map((term, index) => {
                    const isActive =
                      currentTermIndex === index;

                    return (
                      <button
                        type="button"
                        key={index}
                        className="cell-term-btn-mini"
                        onClick={() =>
                          setCurrentTermIndex(index)
                        }
                        style={{
                          padding: '12px 16px',
                          borderRadius: '12px',
                          border:
                            '1px solid #e2e8f0',
                          background: isActive
                            ? 'var(--cell-indigo)'
                            : '#fff',
                          color: isActive
                            ? '#fff'
                            : 'inherit',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <div
                          style={{
                            width: '34px',
                            height: '34px',
                            borderRadius: '10px',
                            background: isActive
                              ? '#fff'
                              : `${term.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent:
                              'center',
                            fontSize: '18px'
                          }}
                        >
                          {term.icon}
                        </div>

                        <span
                          style={{
                            fontWeight: 800,
                            fontSize: '15px'
                          }}
                        >
                          {term.name}
                        </span>
                      </button>
                    );
                  })
                ) : (

                  /* Rules List */
                  RULES_DATA.map((rule, index) => {
                    const isActive =
                      currentRuleIndex === index;

                    return (
                      <button
                        type="button"
                        key={index}
                        className="cell-term-btn-mini"
                        onClick={() =>
                          setCurrentRuleIndex(index)
                        }
                        style={{
                          padding: '12px 16px',
                          borderRadius: '12px',
                          border:
                            '1px solid #e2e8f0',
                          background: isActive
                            ? rule.color
                            : '#fff',
                          color: isActive
                            ? '#fff'
                            : 'inherit',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <div
                          style={{
                            width: '34px',
                            height: '34px',
                            borderRadius: '10px',
                            background: isActive
                              ? '#fff'
                              : `${rule.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent:
                              'center',
                            fontSize: '16px',
                            fontWeight: 900,
                            color: isActive
                              ? rule.color
                              : 'inherit'
                          }}
                        >
                          {rule.num}
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column'
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 800,
                              fontSize: '14px'
                            }}
                          >
                            Rule {rule.num}
                          </span>

                          <span
                            style={{
                              fontSize: '10px',
                              fontWeight: 700,
                              textTransform:
                                'uppercase',
                              opacity: 0.8
                            }}
                          >
                            {rule.title}
                          </span>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Main Content */}
              <div
                style={{
                  background: '#fff',
                  borderRadius: '24px',
                  padding: '32px',
                  border:
                    '1px solid #e2e8f0',
                  boxShadow: 'var(--cell-sh)'
                }}
              >

                {/* TERM CONTENT */}
                {lexiconTab === 'terms' && currentTerm ? (
                  <div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        marginBottom: '20px'
                      }}
                    >
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '16px',
                          background: `${currentTerm.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent:
                            'center',
                          fontSize: '28px'
                        }}
                      >
                        {currentTerm.icon}
                      </div>

                      <h2
                        style={{
                          fontFamily:
                            "'Outfit', sans-serif",
                          fontSize: '30px',
                          fontWeight: 900,
                          color: currentTerm.color,
                          margin: 0
                        }}
                      >
                        {currentTerm.name}
                      </h2>
                    </div>

                    <p
                      style={{
                        fontSize: '17px',
                        color: 'var(--cell-text)',
                        lineHeight: 1.65,
                        margin: '0 0 24px'
                      }}
                    >
                      {currentTerm.def}
                    </p>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns:
                          'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '24px'
                      }}
                    >

                      {/* Examples */}
                      <div>
                        <h4
                          style={{
                            textTransform:
                              'uppercase',
                            fontSize: '11px',
                            letterSpacing:
                              '1.5px',
                            color:
                              currentTerm.color,
                            marginBottom:
                              '12px',
                            fontWeight: 800
                          }}
                        >
                          Examples &amp; NCERT
                          Context
                        </h4>

                        <div
                          style={{
                            background: `${currentTerm.color}05`,
                            padding: '20px',
                            borderRadius: '16px',
                            border:
                              `1px solid ${currentTerm.color}15`
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection:
                                'column',
                              gap: '10px'
                            }}
                          >
                            {currentTerm.examples.map(
                              (example, index) => (
                                <div
                                  key={index}
                                  style={{
                                    background:
                                      '#fff',
                                    border:
                                      '1px solid #e2e8f0',
                                    padding:
                                      '8px 12px',
                                    borderRadius:
                                      '8px',
                                    fontSize:
                                      '14px',
                                    fontWeight:
                                      600
                                  }}
                                >
                                  {example}
                                </div>
                              )
                            )}
                          </div>

                          <div
                            style={{
                              marginTop: '14px',
                              fontSize: '13px',
                              color:
                                'var(--cell-muted)',
                              fontStyle:
                                'italic',
                              borderTop:
                                '1px solid #e2e8f0',
                              paddingTop: '12px'
                            }}
                          >
                            {currentTerm.inUse}
                          </div>
                        </div>
                      </div>

                      {/* Memory Tip */}
                      <div>
                        <h4
                          style={{
                            textTransform:
                              'uppercase',
                            fontSize: '11px',
                            letterSpacing:
                              '1.5px',
                            color:
                              'var(--cell-indigo)',
                            marginBottom:
                              '12px',
                            fontWeight: 800
                          }}
                        >
                          Pro Memory Tip
                        </h4>

                        <div
                          style={{
                            background:
                              'rgba(79, 70, 229, 0.05)',
                            padding: '20px',
                            borderRadius: '16px',
                            border:
                              '1px solid rgba(79, 70, 229, 0.1)'
                          }}
                        >
                          <p
                            style={{
                              margin: 0,
                              fontSize: '15px',
                              color:
                                'var(--cell-muted)',
                              lineHeight: 1.6
                            }}
                          >
                            <span
                              style={{
                                fontWeight: 800,
                                color:
                                  'var(--cell-indigo)'
                              }}
                            >
                              💡 Memory Hook:{' '}
                            </span>

                            {currentTerm.memory}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                ) : (

                  /* RULE CONTENT */
                  currentRule && (
                    <div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          marginBottom: '20px'
                        }}
                      >
                        <div
                          style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '16px',
                            background: `${currentRule.color}15`,
                            display: 'flex',
                            alignItems:
                              'center',
                            justifyContent:
                              'center',
                            fontSize: '24px',
                            color:
                              currentRule.color,
                            fontWeight: 900
                          }}
                        >
                          {currentRule.emoji}
                        </div>

                        <h2
                          style={{
                            fontFamily:
                              "'Outfit', sans-serif",
                            fontSize: '26px',
                            fontWeight: 900,
                            color:
                              currentRule.color,
                            margin: 0
                          }}
                        >
                          Rule {currentRule.num}:{' '}
                          {currentRule.title}
                        </h2>
                      </div>

                      {/* Rule */}
                      <div
                        style={{
                          background: `${currentRule.color}08`,
                          padding: '20px 24px',
                          borderRadius: '16px',
                          borderLeft:
                            `6px solid ${currentRule.color}`,
                          marginBottom: '24px'
                        }}
                      >
                        <p
                          style={{
                            fontSize: '18px',
                            fontWeight: 700,
                            color:
                              currentRule.color,
                            margin: 0
                          }}
                        >
                          {currentRule.rule}
                        </p>
                      </div>

                      <p
                        style={{
                          fontSize: '17px',
                          color:
                            'var(--cell-text)',
                          lineHeight: 1.65,
                          margin: '0 0 24px'
                        }}
                      >
                        {currentRule.detail}
                      </p>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns:
                            'repeat(auto-fit, minmax(220px, 1fr))',
                          gap: '24px'
                        }}
                      >

                        {/* Applications */}
                        <div>
                          <h4
                            style={{
                              textTransform:
                                'uppercase',
                              fontSize: '11px',
                              letterSpacing:
                                '1.5px',
                              color:
                                currentRule.color,
                              marginBottom:
                                '12px',
                              fontWeight: 800
                            }}
                          >
                            NCERT Applications
                          </h4>

                          <div
                            style={{
                              background:
                                '#f8fafc',
                              padding: '20px',
                              borderRadius:
                                '16px',
                              border:
                                '1px solid rgba(0,0,0,0.05)'
                            }}
                          >
                            <div
                              style={{
                                display:
                                  'flex',
                                flexDirection:
                                  'column',
                                gap: '10px'
                              }}
                            >
                              {currentRule.examples.map(
                                (example, index) => (
                                  <div
                                    key={index}
                                    style={{
                                      background:
                                        '#fff',
                                      padding:
                                        '8px 12px',
                                      borderRadius:
                                        '8px',
                                      fontSize:
                                        '14px',
                                      fontWeight:
                                        600,
                                      border:
                                        '1px solid #e2e8f0'
                                    }}
                                  >
                                    {example}
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        {/* NEET Trap */}
                        <div>
                          <h4
                            style={{
                              textTransform:
                                'uppercase',
                              fontSize: '11px',
                              letterSpacing:
                                '1.5px',
                              color:
                                'var(--cell-teal)',
                              marginBottom:
                                '12px',
                              fontWeight: 800
                            }}
                          >
                            NEET Question Trap
                          </h4>

                          <div
                            style={{
                              background:
                                'rgba(13, 148, 136, 0.05)',
                              padding: '20px',
                              borderRadius:
                                '16px',
                              border:
                                '1px solid rgba(13, 148, 136, 0.1)'
                            }}
                          >
                            <p
                              style={{
                                margin: 0,
                                fontSize:
                                  '15px',
                                color:
                                  'var(--cell-muted)',
                                lineHeight: 1.6
                              }}
                            >
                              <span
                                style={{
                                  fontWeight: 800,
                                  color:
                                    'var(--cell-teal)'
                                }}
                              >
                                ⚠️ Warning:{' '}
                              </span>

                              {currentRule.tip}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

          ) : (

            /* ---------------- QUIZ ---------------- */
            <div
              style={{
                background: '#fff',
                borderRadius: '24px',
                padding: '32px',
                border:
                  '1px solid #e2e8f0',
                boxShadow: 'var(--cell-sh)',
                maxWidth: '720px',
                margin: '0 auto'
              }}
            >

              {quizIndex >= QUIZ_DATA.length ? (

                /* Quiz Results */
                <div
                  style={{
                    textAlign: 'center',
                    padding: '20px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '64px',
                      marginBottom: '16px'
                    }}
                  >
                    🏆
                  </div>

                  <h2
                    style={{
                      fontFamily:
                        "'Outfit', sans-serif",
                      fontSize: '28px',
                      fontWeight: 900,
                      color: '#1e1b4b'
                    }}
                  >
                    Quiz Completed!
                  </h2>

                  <p
                    style={{
                      fontSize: '18px',
                      color:
                        'var(--cell-muted)',
                      marginBottom: '24px'
                    }}
                  >
                    Your final score:{' '}
                    <strong
                      style={{
                        color:
                          'var(--cell-indigo)'
                      }}
                    >
                      {quizScore} /{' '}
                      {QUIZ_DATA.length}
                    </strong>
                  </p>

                  <button
                    type="button"
                    onClick={handleResetQuiz}
                    style={{
                      padding: '12px 28px',
                      background:
                        'var(--cell-indigo)',
                      color: '#fff',
                      border: 'none',
                      borderRadius:
                        '100px',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    Try Again 🔄
                  </button>
                </div>

              ) : (

                /* Quiz Question */
                (() => {
                  const question =
                    QUIZ_DATA[quizIndex];

                  if (!question) {
                    return (
                      <div>
                        No quiz questions
                        available.
                      </div>
                    );
                  }

                  return (
                    <div>

                      <div
                        style={{
                          display: 'flex',
                          justifyContent:
                            'space-between',
                          alignItems:
                            'center',
                          marginBottom:
                            '24px'
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize: '11px',
                              fontWeight: 800,
                              letterSpacing:
                                '1.5px',
                              textTransform:
                                'uppercase',
                              color:
                                'var(--cell-indigo)'
                            }}
                          >
                            QUESTION{' '}
                            {quizIndex + 1} OF{' '}
                            {QUIZ_DATA.length}
                          </div>

                          <h3
                            style={{
                              fontFamily:
                                "'Outfit', sans-serif",
                              fontSize: '22px',
                              fontWeight: 900,
                              margin:
                                '4px 0 0',
                              color:
                                '#1e1b4b'
                            }}
                          >
                            NEET Mastery Quiz
                          </h3>
                        </div>

                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius:
                              '50%',
                            background:
                              'rgba(79,70,229,0.1)',
                            color:
                              'var(--cell-indigo)',
                            display: 'flex',
                            alignItems:
                              'center',
                            justifyContent:
                              'center',
                            fontWeight: 900,
                            fontSize: '18px'
                          }}
                        >
                          {quizScore}
                        </div>
                      </div>

                      <p
                        style={{
                          fontSize: '18px',
                          fontWeight: 700,
                          color: '#0f172a',
                          marginBottom:
                            '24px',
                          lineHeight: 1.5
                        }}
                      >
                        {question.question}
                      </p>

                      {/* Options */}
                      <div
                        className="cell-quiz-options"
                        style={{
                          display: 'flex',
                          flexDirection:
                            'column',
                          gap: '12px',
                          marginBottom:
                            '24px'
                        }}
                      >
                        {question.options.map(
                          (option, index) => {
                            let styleObj = {
                              padding:
                                '14px 20px',
                              borderRadius:
                                '12px',
                              border:
                                '1.5px solid #e2e8f0',
                              background:
                                '#fff',
                              textAlign:
                                'left',
                              fontWeight:
                                600,
                              fontSize:
                                '16px',
                              cursor:
                                'pointer'
                            };

                            if (quizAnswered) {
                              if (
                                index ===
                                question.correct
                              ) {
                                styleObj = {
                                  ...styleObj,
                                  background:
                                    '#ecfdf5',
                                  borderColor:
                                    '#10b981',
                                  color:
                                    '#065f46',
                                  fontWeight:
                                    800
                                };
                              } else if (
                                index ===
                                quizSelectedOption
                              ) {
                                styleObj = {
                                  ...styleObj,
                                  background:
                                    '#fef2f2',
                                  borderColor:
                                    '#ef4444',
                                  color:
                                    '#991b1b'
                                };
                              }
                            }

                            return (
                              <button
                                type="button"
                                key={index}
                                style={
                                  styleObj
                                }
                                onClick={() =>
                                  handleSelectQuizOption(
                                    index
                                  )
                                }
                                disabled={
                                  quizAnswered
                                }
                              >
                                {option}
                              </button>
                            );
                          }
                        )}
                      </div>

                      {/* Explanation */}
                      {quizAnswered && (
                        <div>

                          <div
                            style={{
                              background:
                                'rgba(79,70,229,0.06)',
                              borderRadius:
                                '14px',
                              padding:
                                '16px 20px',
                              marginBottom:
                                '24px',
                              borderLeft:
                                '4px solid var(--cell-indigo)'
                            }}
                          >
                            <p
                              style={{
                                margin: 0,
                                fontSize:
                                  '14px',
                                color:
                                  '#334155',
                                lineHeight:
                                  1.6
                              }}
                            >
                              <strong
                                style={{
                                  color:
                                    'var(--cell-indigo)'
                                }}
                              >
                                Explanation:{' '}
                              </strong>

                              {question.explanation}
                            </p>
                          </div>

                          <div
                            style={{
                              textAlign:
                                'right'
                            }}
                          >
                            <button
                              type="button"
                              onClick={
                                handleNextQuizQuestion
                              }
                              style={{
                                padding:
                                  '12px 28px',
                                background:
                                  'var(--cell-indigo)',
                                color:
                                  '#fff',
                                border:
                                  'none',
                                borderRadius:
                                  '100px',
                                fontWeight:
                                  800,
                                cursor:
                                  'pointer'
                              }}
                            >
                              Next Question →
                            </button>
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