# Chemical Coordination & Integration - React Application

A modular, high-yield educational React dashboard for Grade 11 Biology Chapter 19 — Chemical Coordination & Integration.

## Project Structure

```
chemical-coordination-dashboard/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles/
│   │   └── dashboard.css
│   ├── data/
│   │   ├── termsData.js
│   │   ├── rulesData.js
│   │   ├── quizData.js
│   │   ├── glandData.js
│   │   ├── ncertSkillsData.js
│   │   ├── blanksQuestionsData.js
│   │   ├── matchData.js
│   │   └── practiceQuestionsData.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── EndocrineSvgMap.jsx
│   │   └── GlandInspectorCard.jsx
│   └── views/
│       ├── DashboardView.jsx
│       ├── ConnectomicsView.jsx
│       ├── IntroView.jsx
│       ├── TerminologyView.jsx
│       ├── SkillsView.jsx
│       ├── LearnView.jsx
│       ├── PracticeView.jsx
│       ├── AssessView.jsx
│       └── ExamEdgeView.jsx
```

## Features

- **Dashboard**: High-impact split hero screen with sub-topic stats and path selection.
- **Connectomics**: Interactive SVG body map of human endocrine glands with real-time gland inspector card & physiological pathways.
- **Terminology Lexicon**: 12 Key Terms, 5 Golden Rules, and 10 NEET MCQs quiz module.
- **Skills & Mastery**: NCERT Chapter 19 sub-topics with dedicated Learn, Practice, and Assessment engines.
- **Exam Edge**: Interactive Fill-in-the-Blanks, Match-the-Following, NEET MCQs, and NCERT textbook exercises.

## How to Run

1. Open a terminal inside this project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
