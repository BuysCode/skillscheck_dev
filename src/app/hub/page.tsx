import Footer from '@/components/Footer'
import HubContent from '@/components/HubContent'
import HubHeader from '@/components/HubHeader'
import { redirect } from 'next/navigation'
import { getProfileAction } from '@/lib/actions/auth'

export default async function Home() {
  const user = await getProfileAction()

  if (!user) {
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