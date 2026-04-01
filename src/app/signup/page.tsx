import SignUpForm from '@/components/SignUpForm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getApiUrl } from '@/lib/api'

export default async function SignUpPage() {
  const cookiesList = await cookies()
  
  const requestUser = await fetch(getApiUrl('/api/profile'), {
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