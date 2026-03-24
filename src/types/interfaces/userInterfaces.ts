import * as z from 'zod'
import { userSignInSchema, userSignUpSchema } from '../schemas/userSchemas'

export type UserSignInInterface = z.infer<typeof userSignInSchema>

export type UserSignUpInterface = z.infer<typeof userSignUpSchema>