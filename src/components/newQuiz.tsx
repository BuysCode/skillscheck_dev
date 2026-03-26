"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { PlusCircle } from "lucide-react"

export default function newQuizButton() {
  const router = useRouter()

  return (
    <Button className="p-4 font-bold bg-linear-to-br from-cyan-500 to-blue-500 text-white hover:from-cyan-700 hover:to-blue-700 cursor-pointer hover:scale-105" onClick={() => router.push("/hub/quizzes/quiz")}>
      <PlusCircle className="w-6 h-6" />Novo Quiz
    </Button>
  )
}