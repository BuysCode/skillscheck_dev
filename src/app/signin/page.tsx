import SignInForm from '@/components/SignInForm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getApiUrl } from '@/lib/api'

export default async function SignInPage() {
  const cookiesList = await cookies()
  
  const requestUser = await fetch(getApiUrl('/api/profile'), {
    headers: {
      cookie: cookiesList.toString(),
    },
    cache: 'no-store',
    credentials: 'include',
  })
  
  if (requestUser.ok) {
    return redirect('/hub')
  }

  return <SignInForm />
}