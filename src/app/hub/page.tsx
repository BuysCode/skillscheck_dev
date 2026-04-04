import Footer from '@/components/Footer'
import HubContent from '@/components/HubContent'
import HubHeader from '@/components/HubHeader'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { backendUrl } from '@/lib/consts'

export default async function Home() {
  const cookiesList = await cookies()

  const requestUser = await fetch(`${backendUrl}/profile`, {
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
      <main className='bg-gray-200'>
        <HubContent />
      </main>
      <Footer />
    </div>
  )
}