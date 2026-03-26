import HubHeader from "@/components/HubHeader";
import { QuizPage } from "@/components/QuizPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Quiz() {
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
    <div className="overflow-y-hidden">
      <HubHeader />
      <QuizPage />
    </div>
  )
}

