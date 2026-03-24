import { user, session, account, verification } from "../../../../auth-schema"
import { quizQuestions } from './quiz/quizDrizzleSchemas'

export const schema = {
  user,
  session,
  account,
  verification,
  quizQuestions
}