import React from 'react';

export default function Navbar({ currentView, navigateTo }) {
  return (
    <nav className="cell-nav">
      <button className="cell-nav-back" onClick={() => navigateTo('dashboard')}>
        â† Back to Dashboard
      </button>
      <div className="cell-nav-links">
        <button
          className={cell-nav-link }
          onClick={() => navigateTo('connectomics')}
        >
          ðŸ§  Connectomics
        </button>
        <button
          className={cell-nav-link }
          onClick={() => navigateTo('intro')}
        >
          ðŸŒŸ Intro
        </button>
        <button
          className={cell-nav-link }
          onClick={() => navigateTo('terminology')}
        >
          ðŸ“– Terminology
        </button>
        <button
          className={cell-nav-link }
          onClick={() => navigateTo('skills')}
        >
          ðŸŽ¯ Skills
        </button>
        <button
          className={cell-nav-link }
          onClick={() => navigateTo('exam-edge')}
        >
          âš¡ Exam Edge
        </button>
      </div>
    </nav>
  );
}