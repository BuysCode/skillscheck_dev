import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const rightAnswerEnum = ['a', 'b', 'c', 'd'] as const;
export const programmingLanguageEnum = ['typescript', 'react', 'html', 'css', 'python', 'java', 'php', 'go'] as const;
export const seniorityEnum = ['junior', 'mid-level', 'senior'] as const;

export type RightAnswer = typeof rightAnswerEnum[number];
export type ProgrammingLanguage = typeof programmingLanguageEnum[number];
export type Seniority = typeof seniorityEnum[number];

export const quizQuestions = sqliteTable('quiz_questions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  firstOption: text('first_option').notNull(),
  secondOption: text('second_option').notNull(),
  thirdOption: text('third_option'),
  fourthOption: text('fourth_option'),
  rightAnswer: text('right_answer', { enum: rightAnswerEnum }).notNull(),
  language: text('language', { enum: programmingLanguageEnum }).notNull(),
  seniority: text('seniority', { enum: seniorityEnum }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});