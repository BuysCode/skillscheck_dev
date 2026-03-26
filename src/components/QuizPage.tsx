"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import type { Language, Question, Seniority } from "@/types/interfaces/quizInterface"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { questions as allQuestions } from "@/lib/data/static/questions"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useRouter } from "next/navigation"

export function QuizPage() {
  const languages: Language[] = ['TypeScript', 'JavaScript', 'Java', 'Php', 'Python', 'C', 'C++', 'C#', 'Lua', 'HTML', 'CSS']

  const [page, setPage] = useState<number>(0)
  const [rightAnswers, setRightAnswers] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const [questions, setQuestions] = useState<Question[]>([])

  const [language, setLanguage] = useState<Language | null>(null)
  const [seniority, setSeniority] = useState<Seniority | null>(null)

  const router = useRouter()

  const submitAnswer = () => {
    if (page === 0) {
      if (language === null || seniority === null) {
        return alert("Falta selecionar uma linguagem e/ou senioridade para começar!")
      }

      const filtered = allQuestions.filter(q => q.language === language && q.seniority === seniority)
      if (filtered.length === 0) {
        return alert("Não há questões disponíveis para a combinação selecionada.")
      }

      const selectedQuestions = allQuestions.filter(
        (item: Question) => item.language === language && item.seniority === seniority
      )

      setQuestions(selectedQuestions as Question[])
      setRightAnswers(0)
      setSelectedAnswer(null)

      return setPage(1)
    }

    if (page >= 1 && page <= questions.length) {
      if (!selectedAnswer) {
        alert("Selecione uma alternativa antes de continuar.")
        return
      }
      const currentQuestion = questions[page - 1]
      if (currentQuestion && selectedAnswer === currentQuestion.rightAnswer) {
        setRightAnswers(rightAnswers + 1)
      }
      setSelectedAnswer(null)
      setPage(page + 1)
    }

    if (page === questions.length + 1) {
      return router.replace("/hub/quizzes/history")
    }
  }

  const retryQuiz = () => {
    setRightAnswers(0)
    setSelectedAnswer(null)
    setPage(1)
  }

  return (
    <div suppressHydrationWarning>
      <div className="bg-linear-to-br from-cyan-500 to-blue-500 h-screen flex items-center justify-center">
        <Card className="bg-white p-8 rounded-lg">
          <CardContent>
            {
              page === 0 && (
                <div className="text-center flex items-center justify-center flex-col space-y-4">
                  <h1 className="font-semibold text-xl">
                    Escolha sua linguagem de programação
                  </h1>
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    className="w-full max-w-48 sm:max-w-xs md:max-w-sm"
                  >
                    <CarouselContent>
                      {languages.map((lang, index) => (
                        <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <Card aria-disabled={language === lang ? true : false} onClick={() => setLanguage(lang)} className={`rounded-lg border ${language === lang ? 'border-cyan-500 cursor-not-allowed' : 'border-gray-300'} hover:cursor-pointer hover:shadow-[0px_0px_60px_-3px_rgba(6,182,212,1)]`}>
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-lg font-semibold">{lang}</span>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="cursor-pointer" />
                    <CarouselNext className="cursor-pointer" />
                  </Carousel>
                  <h1 className="font-semibold text-xl">
                    Escolha a senioridade das questões
                  </h1>
                  <div className="space-x-4">
                    <Button className={`disabled:cursor-not-allowed p-8 text-lg font-semibold cursor-pointer border border-gray-300 bg-white text-black hover:border-cyan-500 ${seniority === 'junior' ? 'border-cyan-500' : ''}`} disabled={seniority === 'junior' ? true : false} onClick={() => setSeniority('junior')}>
                      Junior
                    </Button>
                    <Button className={`disabled:cursor-not-allowed p-8 text-lg font-semibold cursor-pointer border border-gray-300 bg-white text-black hover:border-cyan-500 ${seniority === 'mid-level' ? 'border-cyan-500' : ''}`} disabled={seniority === 'mid-level' ? true : false} onClick={() => setSeniority("mid-level")}>
                      Pleno
                    </Button>
                    <Button className={`disabled:cursor-not-allowed p-8 text-lg font-semibold cursor-pointer border border-gray-300 bg-white text-black hover:border-cyan-500 ${seniority === 'senior' ? 'border-cyan-500' : ''}`} disabled={seniority === 'senior' ? true : false} onClick={() => setSeniority("senior")}>
                      Sênior
                    </Button>
                  </div>
                </div>
              )
            }

            {
              page >= 1 && page <= questions.length && (
                <>
                  <h1>
                    Questão {page}
                  </h1>
                  <p className="mb-4">{questions[page - 1]?.title ?? "Questão indisponível."}</p>
                  <RadioGroup value={selectedAnswer || ''} onValueChange={setSelectedAnswer}>
                    {questions[page - 1]?.options.map((option) => (
                      <div key={option.letter} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.letter} id={option.letter} />
                        <label htmlFor={option.letter}>{option.text}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </>
              )
            }

            {
              page === questions.length + 1 && (
                <>
                  <h1>
                    Quiz finalizado
                  </h1>

                  <p>
                    <span className="font-semibold">{rightAnswers}/{questions.length}</span> Questões corretas
                  </p>
                </>
              )
            }
          </CardContent>
          <CardFooter className="flex justify-end">
            { page === questions.length + 1 && (
              <div>
                <Button variant={'link'} onClick={() => retryQuiz()}>
                  Refazer
                </Button>
              </div>
            )}
            <Button className="p-8 text-white bg-linear-to-br cursor-pointer from-cyan-500 to-blue-500 font-bold text-xl hover:from-cyan-700 hover:to-blue-700" onClick={submitAnswer}>
              {page === 0 ? "Começar" : page >= 1 && page < questions.length ? "Próxima" : page === questions.length ? "Finalizar" : "OK"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}