"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUp } from "@/lib/auth-client";
import type { UserSignUpInterface } from "@/types/interfaces/UserInterfaces";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'
import { userSignUpSchema } from "@/types/schemas/userSchemas";

export default function SignUpPage() {
  const {register, handleSubmit} = useForm<UserSignUpInterface>({
    resolver: zodResolver(userSignUpSchema)
  })

  const submitFunc = async (data: UserSignUpInterface) => {
    try {
      await signUp.email({
        email: data.email,
        password: data.password,
        name: data.name
      });

      redirect("/hub");
    } catch (err) {
      console.error("Erro no login:", err);
    }
  };

  return (
    <div className="flex items-center justify-center bg-linear-to-br from-cyan-500 via-blue-500 min-h-screen w-full">
      <div className="bg-white p-4 rounded-lg space-y-4 border-gray-700 border shadow-lg shadow-gray-800 w-[80%] md:w-95">
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
            Cadastrar
          </Button>
        </div>
      </div>
    </div>
  )
}