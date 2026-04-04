import SignUpForm from '@/components/SignUpForm'
import { backendUrl } from '@/lib/consts'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function SignUpPage() {
  const cookiesList = await cookies()

  const requestUser = await fetch(`${backendUrl}/profile`, {
    headers: {
      cookie: cookiesList.toString(),
    },
    cache: 'no-store',
    credentials: 'include',
  })

  if (requestUser.ok) {
    return redirect('/profile')
  }

  return <SignUpForm />
}