import HubHeader from "@/components/HubHeader";
import { redirect } from 'next/navigation'
import { cookies } from "next/headers";

export default async function QuizzesHistory() {
  const cookiesList = await cookies()
    
  const requestUser = await fetch('http://localhost:9000/profile', {
    headers: {
      cookie: cookiesList.toString(),
    },
    cache: 'no-store',
    credentials: 'include',
  })
  
  if (!requestUser.ok) {
    return redirect('/signin')
  }
  return (
    <div>
      <HubHeader />
    </div>
  )
}

function QuizzesHistoryTable({ quizzes }: { quizzes: any }) {}