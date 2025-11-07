'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { ReactNode, useEffect } from 'react'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  return session ? <>{children}</> : null
}
