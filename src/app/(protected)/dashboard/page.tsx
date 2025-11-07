'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { useEffect } from 'react'
export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session?.user?.name}</p>
      <button
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: 'http://localhost:3000/login',
          })
        }
      >
        logout
      </button>
    </div>
  )
}
