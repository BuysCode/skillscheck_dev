"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "./ui/badge"

const faqs = [
  {
    question: "O SkillsCheck Dev é gratuito?",
    answer: "Sim! A plataforma é 100% gratuita. Você pode fazer quantos testes quiser, em qualquer linguagem, sem pagar nada."
  },
  {
    question: "Quantas questões tem cada teste?",
    answer: "Cada teste contém 20 questões selecionadas aleatoriamente do nosso banco de dados. Isso garante que cada teste seja único, mesmo que você repita a mesma linguagem e nível."
  },
  {
    question: "Posso refazer um teste?",
    answer: "Claro! Você pode refazer quantos testes quiser. Como as questões são aleatórias, cada tentativa será diferente. Você também pode revisar as questões corrigidas dos testes anteriores."
  },
  {
    question: "Meus resultados ficam salvos?",
    answer: "Sim, todos os seus resultados são armazenados na sua conta. Você pode acompanhar sua evolução ao longo do tempo e ver o histórico completo de testes."
  },
  {
    question: "Como são classificados os níveis de senioridade?",
    answer: "Temos três níveis: Júnior (questões básicas e fundamentais), Pleno (questões intermediárias com aplicações práticas) e Sênior (questões avançadas sobre arquitetura, performance e boas práticas)."
  },
  {
    question: "Posso sugerir novas questões ou linguagens?",
    answer: "Absolutamente! Adoramos receber contribuições da comunidade. Entre em contato conosco para sugerir novas questões ou solicitar a adição de linguagens que ainda não temos."
  },
  {
    question: "As questões têm explicações?",
    answer: "Sim! Após finalizar o teste, você pode ver a correção de cada questão com a resposta correta e uma explicação detalhada para ajudar no seu aprendizado."
  },
  {
    question: "Preciso criar uma conta para usar?",
    answer: "Você pode fazer testes sem conta, mas para salvar seu histórico e acompanhar sua evolução, recomendamos criar uma conta gratuita."
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-12">
          <Badge className="text-blue-500 p-4 border border-blue-500 bg-cyan-400/30 font-bold">
            Perguntas frequentes
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Perguntas
            <span className="text-transparent bg-clip-text bg-linear-to-br from-cyan-500 to-blue-500"> frequentes</span>
          </h2>
          <p className="text-muted-foreground">
            Tire suas dúvidas sobre a plataforma.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all hover:shadow-[0px_0px_60px_-3px_rgba(6,182,212,1)]"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
