import { QUIZ_DATA } from './quizData';

export const SKILL_COLORS = ['#2563eb','#10b981','#f59e0b','#0d9488','#7c3aed','#ec4899','#8b5cf6','#14b8a6'];
export const SKILL_ICONS = ['ðŸ›ï¸','ðŸ§¬','ðŸ§ª','ðŸ”¬','ðŸ§«','âš™ï¸','ðŸ§ ','ðŸŒ¿'];

export const PRACTICE_QUESTIONS = QUIZ_DATA.concat([
  { question:'Which gland is attached to the hypothalamus by a stalk?', options:['Thyroid','Pituitary','Pineal','Thymus'], correct:1, explanation:'The pituitary gland is attached to the hypothalamus by a stalk and is functionally regulated by it.' },
  { question:'Which hormone lowers blood calcium level?', options:['PTH','Thyrocalcitonin (TCT)','Glucagon','ADH'], correct:1, explanation:'Thyrocalcitonin (TCT) lowers blood CaÂ²âº levels.' },
  { question:'Which cells of the pancreas secrete insulin?', options:['Alpha cells','Beta cells','Delta cells','Acinar cells'], correct:1, explanation:'Pancreatic Î²-cells secrete insulin, a hypoglycemic hormone.' },
  { question:'Which hormone stimulates erythropoiesis?', options:['Gastrin','Erythropoietin','ANF','Melatonin'], correct:1, explanation:'Kidney JGA cells produce erythropoietin, which stimulates RBC formation.' },
  { question:'Peptide hormones generally act through:', options:['Intracellular receptors only','Second messengers','DNA directly','Ribosomes'], correct:1, explanation:'Water-soluble peptide hormones bind membrane receptors and commonly generate second messengers.' }
]).slice(0,15);