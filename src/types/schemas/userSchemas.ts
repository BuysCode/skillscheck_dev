import { z } from "zod";

export const userSignInSchema = z.object({
  email: z.email("O campo de e-mail deve ser preenchido com um e-mail válido"),
  password: z.string("O campo de senha deve ser preenchido")
})

export const userSignUpSchema = z.object({
  name: z.string().min(3, "O seu nome deve conter no mínimo 3 caracteres"),
  email: z.email(),
  password:
    z.string()
      .regex(/[A-Z]/, "A senha deve conter no mínimo uma letra maíúscula")
      .regex(/[a-z]/, "A senha deve conter no mínimo uma letra minúscula")
      .regex(/[0-9]/, "A senha deve conter no mínimo um número"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"]
})