

export interface QuizzesHistory {
  language: Language;
  seniority: Seniority;
  result: number;
}

export type Language = 'TypeScript' | 'JavaScript' | 'Java' | 'Php' | 'Python' | 'C' | 'C++' | 'C#' | 'Lua' | 'HTML' | 'CSS'
export type Seniority = 'junior' | 'mid-level' | 'senior'

export interface Question {
  id: string;
  language: Language;
  seniority: Seniority;
  title: string;
  options: {
    letter: string;
    text: string;
  }[];
  rightAnswer: string;
}