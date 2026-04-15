"use client"

import { Avatar, AvatarFallback } from "./ui/avatar";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

import NewQuizButton from "./newQuiz";
import { logOutAction } from "@/lib/actions/auth";

interface HubHeaderProps {
  user: {
    name: string;
    email: string;
  }
}

export default function HubHeader({ user }: HubHeaderProps) {
  return (
    <header className="h-20 p-4 flex items-center justify-between border-b border-b-gray-300 top-0 sticky bg-white z-10">
      <Link className="hover:scale-105" href='/hub/'>
        <h1 className="font-semibold text-3xl">Skills<span className="inline-block bg-clip-text text-transparent bg-linear-to-br from-cyan-500 to-blue-500">Check</span></h1>
      </Link>
      <div className="flex flex-row gap-4 items-center">
        <NewQuizButton />
        <Link className="text-gray-600 hover:text-gray-700 hover:underline" href="/hub/quizzes/history">Histórico</Link>
        <HubHeaderAvatar user={user} />
      </div>
    </header>
  )
}

function HubHeaderAvatar({ user }: HubHeaderProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }

  const handleLogout = async () => {
    await logOutAction()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full border-2 border-gray-400 cursor-pointer hover:opacity-80 transition">
          <Avatar>
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem disabled className="text-sm text-black font-medium">
          {user.name}
        </DropdownMenuItem>
        <DropdownMenuItem disabled className="text-xs text-gray-500">
          {user.email}
        </DropdownMenuItem>
        <div className="border-t my-2" />
        <DropdownMenuItem onClick={handleLogout} className="text-red-600 hover:text-red-700 cursor-pointer">
          Sair da conta
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}