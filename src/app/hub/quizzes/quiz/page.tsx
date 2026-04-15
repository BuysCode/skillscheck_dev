import HubHeader from "@/components/HubHeader";
import { QuizPage } from "@/components/QuizPage";
import { redirect } from "next/navigation";
import { getProfileAction } from "@/lib/actions/auth";

export default async function Quiz() {
  const user = await getProfileAction()

  if (!user) {
    return redirect('/signin')
  }

  return (
    <div className="overflow-y-hidden">
      <HubHeader />
      <QuizPage />
    </div>
  )
}

