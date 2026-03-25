"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Header () {
  const router = useRouter()

  return (
    <header className="h-20 p-4 flex items-center justify-between border-b border-b-gray-300 top-0 sticky bg-white">
      <a className="hover:scale-105" href='/'>
        <h1 className="font-semibold text-3xl">Skills<span className="inline-block bg-clip-text text-transparent bg-linear-to-br from-cyan-500 to-blue-500">Check</span></h1>
      </a>
      <ul className="flex flex-row gap-4 items-center">
        <li className="text-gray-600 hover:text-gray-700 hover:underline">
          <a href="#sobre">Sobre o Projeto</a>
        </li>
        <li className="text-gray-600 hover:text-gray-700 hover:underline">
          <a href="#recursos">Recursos</a>
        </li>
      </ul>
      <div className="flex flex-row gap-4 items-center">
        <Link className="text-gray-600 hover:text-gray-700 hover:underline" href={'/signin'}>
          Entrar
        </Link>
        <Button className="p-4 font-bold bg-linear-to-br from-cyan-500 to-blue-500 text-white hover:from-cyan-700 hover:to-blue-700 cursor-pointer hover:scale-105" onClick={() => router.push("/signup")}>
          Começar
        </Button>
      </div>
    </header>
  )
}