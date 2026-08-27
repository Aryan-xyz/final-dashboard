import React, { useState } from 'react';
import './styles/dashboard.css';

import DashboardView from './views/DashboardView';
import ConnectomicsView from './views/ConnectomicsView';
import IntroView from './views/IntroView';
import TerminologyView from './views/TerminologyView';
import SkillsView from './views/SkillsView';
import LearnView from './views/LearnView';
import PracticeView from './views/PracticeView';
import AssessView from './views/AssessView';
import ExamEdgeView from './views/ExamEdgeView';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedGland, setSelectedGland] = useState('hypothalamus');
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);

  const navigateTo = (viewId) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLearn = (idx) => {
    setSelectedSkillIndex(idx);
    navigateTo('learn');
  };

  const handleOpenPractice = (idx) => {
    setSelectedSkillIndex(idx);
    navigateTo('practice');
  };

  const handleOpenAssess = (idx) => {
    setSelectedSkillIndex(idx);
    navigateTo('assess');
  };

  return (
    <div className="react-app-root">
      {currentView === 'dashboard' && (
        <DashboardView navigateTo={navigateTo} />
      )}

      {currentView === 'connectomics' && (
        <ConnectomicsView
          currentView={currentView}
          navigateTo={navigateTo}
          selectedGland={selectedGland}
          onSelectGland={setSelectedGland}
        />
      )}

      {currentView === 'intro' && (
        <IntroView currentView={currentView} navigateTo={navigateTo} />
      )}

      {currentView === 'terminology' && (
        <TerminologyView currentView={currentView} navigateTo={navigateTo} />
      )}

      {currentView === 'skills' && (
        <SkillsView
          currentView={currentView}
          navigateTo={navigateTo}
          onOpenLearn={handleOpenLearn}
          onOpenPractice={handleOpenPractice}
          onOpenAssess={handleOpenAssess}
        />
      )}

      {currentView === 'learn' && (
        <LearnView
          selectedSkillIndex={selectedSkillIndex}
          navigateTo={navigateTo}
          onOpenLearn={handleOpenLearn}
        />
      )}

      {currentView === 'practice' && (
        <PracticeView navigateTo={navigateTo} />
      )}

      {currentView === 'assess' && (
        <AssessView
          selectedSkillIndex={selectedSkillIndex}
          navigateTo={navigateTo}
          onOpenAssess={handleOpenAssess}
        />
      )}

      {currentView === 'exam-edge' && (
        <ExamEdgeView currentView={currentView} navigateTo={navigateTo} />
      )}
    </div>
  );
}
