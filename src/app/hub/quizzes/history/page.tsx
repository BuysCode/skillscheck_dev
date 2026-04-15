import HubHeader from "@/components/HubHeader";
import { redirect } from 'next/navigation'
import type { QuizzesHistory as QuizzesHistoryI, QuizzesHistory } from "@/types/interfaces/quizInterface";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { quizzesHistory } from "@/lib/data/static/history";
import { getProfileAction } from "@/lib/actions/auth";

export default async function QuizzesHistory() {
  const user = await getProfileAction()

  if (!user) {
    return redirect('/signin')
  }
  return (
    <div>
      <HubHeader user={user} />

      <main className="p-8 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Seu Histórico de Quizzes
          </h1>
          <Card>
            <CardContent>
              <QuizzesHistoryTable quizzes={quizzesHistory as QuizzesHistoryI[]} />
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function QuizzesHistoryTable({ quizzes }: { quizzes: QuizzesHistory[] }) {
  "use client"
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3 font-semibold">Linguagem</TableHead>
          <TableHead className="w-1/3 font-semibold">Senioridade</TableHead>
          <TableHead className="w-1/3 text-right font-semibold">Resultado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {quizzes.map((quiz, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{quiz.language}</TableCell>
            <TableCell className="capitalize">{quiz.seniority === "mid-level" ? "Pleno" : quiz.seniority}</TableCell>
            <TableCell className="text-right">{quiz.result}/5</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}