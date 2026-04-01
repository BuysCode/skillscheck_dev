'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { ChevronRight } from "lucide-react"

export default function Hero () {
  const router = useRouter()
  return (
    <div className="py-16 w-full bg-gray-200 flex flex-col gap-2 md:gap-0 items-center justify-center md:flex-row">
      <div className="w-[80%] md:w-[50%]">
        <div className="flex flex-col md:w-[50%] text-center">
          <h1 className="text-5xl font-bold">
            Teste suas
          </h1>
          <p>
            <span className="text-5xl font-bold inline-block bg-clip-text text-transparent bg-linear-to-br from-cyan-500 to-blue-500">habilidades dev</span>
          </p>
          <p className="text-md md:text-sm text-gray-700">
            Escolha uma linguagem, selecione seu nível e prove seus conhecimentos com quizzes dinâmicos gerados de um banco extenso de questões.
          </p>
          <Button className="mt-2 p-4 font-bold bg-linear-to-br from-cyan-500 to-blue-500 text-white hover:from-cyan-700 hover:to-blue-700 cursor-pointer hover:scale-105" onClick={() => router.push("/signup")}>
            <ChevronRight className="w-6 h-6" /> Começar agora
          </Button>
        </div>
      </div>
      <div>
        <Image
          alt="Código"
          height={300}
          width={300}
          src={'/coding-binary-svgrepo-com.svg'}
        />
      </div>
    </div>
  )
}