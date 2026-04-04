"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { UserSignInInterface } from "@/types/interfaces/userInterfaces";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'
import { userSignInSchema } from "@/types/schemas/userSchemas";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Spinner } from "./ui/spinner";
import { backendUrl } from "@/lib/consts";


export default function SignInForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const { register, handleSubmit, setError } = useForm<UserSignInInterface>({
    resolver: zodResolver(userSignInSchema)
  })

  const router = useRouter()

  const submitFunc = async (data: UserSignInInterface) => {
    setIsSubmitting(true)
    try {
      const request = await fetch(`${backendUrl}/signin`, {
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
      <Card className="bg-white p-4 rounded-lg space-y-4 border-gray-700 border shadow-lg shadow-gray-800 w-[80%] md:w-96">
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-800 font-bold text-2xl text-center">
            Entre na sua Conta
          </h1>
          <p className="text-gray-600 text-center">
            Realize o login para responder aos testes
          </p>
        </div>
        <Input {...register("email")} className="border border-gray-500 text-gray-800 placeholder:text-gray-500 placeholder:font-medium" type="text" placeholder="E-mail" />
        <Input {...register("password")} className="border border-gray-500 text-gray-800 placeholder:text-gray-500 placeholder:font-medium" type="password" placeholder="Senha" />

        <div className="flex flex-col gap-2">
          <Button onClick={handleSubmit(submitFunc)} className="bg-blue-500 text-xl p-4 text-white font-bold hover:bg-blue-700 cursor-pointer w-full" type="submit">
            {isSubmitting ? <Spinner className="w-6 h-6" /> : "Entrar"}
          </Button>
          <p className="text-gray-700 text-center">Não está cadastrado? <Link className="hover:underline text-gray-600 hover:text-blue-500" href={"/signup"}>Crie uma conta</Link></p>
        </div>
      </Card>
    </div>
  )
}