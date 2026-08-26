import React from 'react';
import Navbar from '../components/Navbar';
import { NCERT_SKILLS_SECTIONS } from '../data/ncertSkillsData';

export default function PracticeView({
  selectedSkillIndex,
  navigateTo,
  onOpenPractice
}) {
  const safeIndex =
    typeof selectedSkillIndex === 'number' &&
    selectedSkillIndex >= 0 &&
    selectedSkillIndex < NCERT_SKILLS_SECTIONS.length
      ? selectedSkillIndex
      : 0;

  const sec = NCERT_SKILLS_SECTIONS[safeIndex];

  const entries = NCERT_SKILLS_SECTIONS.slice(
    safeIndex,
    Math.min(
      safeIndex + 3,
      NCERT_SKILLS_SECTIONS.length
    )
  );

  return (
    <div className="app-view active">
      <div className="cell-page">

        {/* Navigation */}
        <Navbar
          currentView="practice"
          navigateTo={navigateTo}
        />

        <main
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '40px 24px'
          }}
        >
          <div
            className="learning-panel"
            style={{
              background: '#fff',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid #e2e8f0',
              boxShadow: 'var(--cell-sh)'
            }}
          >

            {/* Topic Number */}
            <div
              style={{
                fontSize: '12px',
                fontWeight: 800,
                color: 'var(--cell-indigo)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '8px'
              }}
            >
              PRACTICE TOPIC {safeIndex + 1}
            </div>

            {/* Topic Title */}
            <h1
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '32px',
                fontWeight: 900,
                color: '#1e1b4b',
                margin: '0 0 32px'
              }}
            >
              {sec?.title
                ? sec.title.replace(/^\d+(?:\.\d+)?\s*/, '')
                : 'Practice'}
            </h1>

            {/* Practice Entries */}
            {entries.map((item, i) => (
              <section
                key={i}
                style={{
                  marginBottom: '32px',
                  paddingBottom: '24px',
                  borderBottom: '1px solid #f1f5f9'
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#1e1b4b',
                    marginBottom: '12px'
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '16px',
                    color: '#334155',
                    lineHeight: 1.7,
                    marginBottom: '16px'
                  }}
                >
                  {item.content}
                </p>

                <div
                  style={{
                    background: 'rgba(79,70,229,0.06)',
                    borderLeft:
                      '4px solid var(--cell-indigo)',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: 'var(--cell-indigo)'
                  }}
                >
                  <strong>Focus:</strong> {item.focus}
                </div>
              </section>
            ))}

            {/* Navigation Buttons */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '12px',
                marginTop: '32px'
              }}
            >
              <button
                type="button"
                onClick={() => navigateTo('skills')}
                style={{
                  padding: '12px 24px',
                  borderRadius: '100px',
                  border: '1px solid #e2e8f0',
                  background: '#fff',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                ← Back to Core Skills
              </button>

              {safeIndex <
                NCERT_SKILLS_SECTIONS.length - 1 && (
                <button
                  type="button"
                  onClick={() =>
                    onOpenPractice(safeIndex + 1)
                  }
                  style={{
                    padding: '12px 24px',
                    borderRadius: '100px',
                    border: 'none',
                    background: 'var(--cell-indigo)',
                    color: '#fff',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Next Topic →
                </button>
              )}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}