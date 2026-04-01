import HubHeader from "@/components/HubHeader";
import { QuizPage } from "@/components/QuizPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getApiUrl } from "@/lib/api";

export default async function Quiz() {
  const cookiesList = await cookies()
      
  const requestUser = await fetch(getApiUrl('/api/profile'), {
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

