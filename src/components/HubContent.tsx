"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "./ui/card"
import NewQuizButton from './newQuiz'
import type { Language } from "@/types/interfaces/quizInterface"
import { quizzesHistory } from "@/lib/data/static/history";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HubContent () {
  const languages: Language[] = ['TypeScript', 'JavaScript', 'Java', 'Php', 'Python', 'C', 'C++', 'C#', 'Lua', 'HTML', 'CSS']

  return (
    <div className='p-8 space-y-8 w-full min-h-screen'>
      <h1 className='text-2xl font-semibold'>Olá! Pronto para aprender?</h1>
      <NewQuizButton />

      <h2 className='text-2xl font-semibold'>Linguagens de programação disponíveis</h2>
      <div className="w-full flex justify-center"> 
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[80%] mx-auto" 
        >
          <CarouselContent>
            {languages.map((lang, index) => (
              <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="rounded-lg border border-gray-400 hover:cursor-pointer hover:shadow-[0px_0px_60px_-3px_rgba(6,182,212,1)] w-40 mx-auto">
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
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          Últimos quizzes respondidos
        </h2>
        <Link className="flex items-center text-sm text-muted-foreground hover:underline" href='/hub/quizzes/history'>
          Ver histórico completo
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Linguagem</TableHead>
                <TableHead className="font-semibold">Senioridade</TableHead>
                <TableHead className="text-right font-semibold">Resultado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quizzesHistory.slice(0, 3).map((quiz, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{quiz.language}</TableCell>
                  <TableCell className="capitalize">
                    {quiz.seniority === "mid-level" ? "Pleno" : quiz.seniority}
                  </TableCell>
                  <TableCell className="text-right">{quiz.result}/5</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}