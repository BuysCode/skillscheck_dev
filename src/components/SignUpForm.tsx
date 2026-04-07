"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { UserSignUpInterface } from "@/types/interfaces/userInterfaces";
import { useForm } from "react-hook-form";

import { zodResolver } from '@hookform/resolvers/zod'
import { userSignUpSchema } from "@/types/schemas/userSchemas";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "./ui/spinner";
import { backendUrl } from "@/lib/consts";

export default function SignUpForm() {
  const { register, handleSubmit, setError } = useForm<UserSignUpInterface>({
    resolver: zodResolver(userSignUpSchema)
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const router = useRouter()

  const submitFunc = async (data: UserSignUpInterface) => {
    try {
      const request = await fetch(`${backendUrl}/sign_up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })

      if (!request.ok) {
        setError('email', { message: 'Credenciais inválidas' })
        setError('password', { message: 'Credenciais inválidas' })
        setIsSubmitting(false)
        return
      }

      return router.replace('/hub')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex items-center justify-center bg-linear-to-br from-cyan-500 to-blue-500 min-h-screen w-full">
      <Card className="bg-white p-4 rounded-lg space-y-4 border-gray-700 border shadow-lg shadow-gray-800 w-[80%] md:w-95">
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-800 font-bold text-2xl text-center">
            Crie sua Conta
          </h1>
          <p className="text-gray-600 text-center">
            Crie uma conta para responder aos testes
          </p>
        </div>
        <Input {...register("name")} className="border border-gray-500 text-gray-800 placeholder:text-gray-500 placeholder:font-medium" type="text" placeholder="Nome de usuário" />
        <Input {...register("email")} className="border border-gray-500 text-gray-800 placeholder:text-gray-500 placeholder:font-medium" type="text" placeholder="E-mail" />
        <Input {...register("password")} className="border border-gray-500 text-gray-800 placeholder:text-gray-500 placeholder:font-medium" type="password" placeholder="Senha" />
        <Input {...register("confirmPassword")} className="border border-gray-500 text-gray-800 placeholder:text-gray-500 placeholder:font-medium" type="password" placeholder="Confirmar senha" />

        <div className="flex flex-col gap-2">
          <Button onClick={handleSubmit(submitFunc)} className="bg-blue-500 text-xl p-4 text-white font-bold hover:bg-blue-700 cursor-pointer w-full" type="submit">
            {isSubmitting ? <Spinner className="h-6 w-6" /> : "Cadastrar"}
          </Button>
        </div>
      </Card>
    </div>
  )
}