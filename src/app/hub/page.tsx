import SignInForm from '@/components/SignInForm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const cookiesList = await cookies()
  
  const requestUser = await fetch('http://localhost:9000/profile', {
    headers: {
      cookie: cookiesList.toString(),
    },
    cache: 'no-store',
    credentials: 'include',
  })
  
  if (requestUser.ok) {
    return redirect('/profile')
  }

  return (
    <div>
      <h1>
        Hub
      </h1>
    </div>
  )
}