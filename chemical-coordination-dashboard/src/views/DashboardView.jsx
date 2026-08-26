import React from 'react';

export default function DashboardView({ navigateTo }) {
  return (
    <div className="app-view active">
      <div className="cell-fullpage">
        <div className="cell-left">
          <div className="cell-deco cell-deco-a"></div>
          <div className="cell-deco cell-deco-b"></div>
          <div className="cell-left-content">
            <h1 className="cell-main-title">
              Chemical Coordination <br />
              <span className="cell-title-accent">&amp; Integration</span>
            </h1>
            <p className="cell-main-sub">
              Master Grade 11 Biology Chapter 19 â€” Endocrine Glands, Hormonal Mechanisms, Feedback Loops, and High-Yield NEET Revision.
            </p>
            <div className="cell-stats-grid">
              <div className="cell-stat">
                <span className="cell-stat-num">17</span>
                <span className="cell-stat-lbl">Sub-Topics</span>
              </div>
              <div className="cell-stat">
                <span className="cell-stat-num">12</span>
                <span className="cell-stat-lbl">Core Terms</span>
              </div>
              <div className="cell-stat">
                <span className="cell-stat-num">6</span>
                <span className="cell-stat-lbl">Connectomics</span>
              </div>
              <div className="cell-stat">
                <span className="cell-stat-num">17</span>
                <span className="cell-stat-lbl">Exam Edge MCQs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cell-right">
          <div className="cell-right-eyebrow">CHOOSE YOUR PATH</div>
          <div className="cell-cards-col">
            <button className="cell-card-btn" onClick={() => navigateTo('connectomics')}>
              <div className="cell-card-strip" style={{ background: '#f59e0b' }}></div>
              <div className="cell-card-icon" style={{ background: 'rgba(245,158,11,0.12)', color: '#f59e0b' }}>ðŸ”—</div>
              <div className="cell-card-text">
                <div className="cell-card-tagline">BIG PICTURE</div>
                <div className="cell-card-label">Connectomics</div>
                <div className="cell-card-desc">Interactive Body Map of endocrine glands &amp; cross-topic physiological pathways.</div>
              </div>
              <div className="cell-card-chevron">â€º</div>
            </button>

            <button className="cell-card-btn" onClick={() => navigateTo('intro')}>
              <div className="cell-card-strip" style={{ background: '#6366f1' }}></div>
              <div className="cell-card-icon" style={{ background: 'rgba(99,102,241,0.12)', color: '#6366f1' }}>ðŸŒŸ</div>
              <div className="cell-card-text">
                <div className="cell-card-tagline">START HERE</div>
                <div className="cell-card-label">Introduction &amp; Essentials</div>
                <div className="cell-card-desc">6 Big Questions (5W1H) &amp; essential prerequisites to build a solid hormonal foundation.</div>
              </div>
              <div className="cell-card-chevron">â€º</div>
            </button>

            <button className="cell-card-btn" onClick={() => navigateTo('terminology')}>
              <div className="cell-card-strip" style={{ background: '#0d9488' }}></div>
              <div className="cell-card-icon" style={{ background: 'rgba(13,148,136,0.12)', color: '#0d9488' }}>ðŸ“–</div>
              <div className="cell-card-text">
                <div className="cell-card-tagline">THE LANGUAGE</div>
                <div className="cell-card-label">Terminology Lexicon</div>
                <div className="cell-card-desc">Key hormone terms, definitions, 5 Golden Rules, pro-memory tips, and flashcards.</div>
              </div>
              <div className="cell-card-chevron">â€º</div>
            </button>

            <button className="cell-card-btn" onClick={() => navigateTo('skills')}>
              <div className="cell-card-strip" style={{ background: '#7c3aed' }}></div>
              <div className="cell-card-icon" style={{ background: 'rgba(124,58,237,0.12)', color: '#7c3aed' }}>ðŸŽ¯</div>
              <div className="cell-card-text">
                <div className="cell-card-tagline">CORE CONTENT</div>
                <div className="cell-card-label">Skills &amp; Mastery</div>
                <div className="cell-card-desc">Section-by-section NCERT textbook content â€” Hypothalamus, Pituitary, Adrenal, Pancreas &amp; Mechanism of Action.</div>
              </div>
              <div className="cell-card-chevron">â€º</div>
            </button>

            <button className="cell-card-btn" onClick={() => navigateTo('exam-edge')}>
              <div className="cell-card-strip" style={{ background: '#ef4444' }}></div>
              <div className="cell-card-icon" style={{ background: 'rgba(239,68,68,0.12)', color: '#ef4444' }}>âš¡</div>
              <div className="cell-card-text">
                <div className="cell-card-tagline">NEET READY</div>
                <div className="cell-card-label">Exam Edge</div>
                <div className="cell-card-desc">NEET MCQs, Fill in the Blanks, Match the Following, Master Comparison tables &amp; Revision notes.</div>
              </div>
              <div className="cell-card-chevron">â€º</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}