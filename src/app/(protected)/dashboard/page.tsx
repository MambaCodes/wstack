'use client'

import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
export default function Dashboard() {
  const { data: session, status } = useSession();

    return (
      <div className="flex min-h-screen animate-pulse flex-col items-center justify-center bg-gradient-to-br from-purple-800 via-purple-900 to-black">
        <h1 className="mb-4 text-2xl font-bold text-white">
          Welcome, {session?.user?.name}!
        </h1>
        <div className="flex flex-col gap-y-3">
          <p className="text-lg text-gray-300">You are now logged in.</p>
          <p className="text-md text-gray-400 text-center">
            Learn how to use Wstack by visiting our{' '}
            <a
              href="https://github.com/MambaCodes/wstack-docs"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              documentation
            </a>
          </p>
          <button
            onClick={() => signOut({
              redirect: true, 
              callbackUrl: process.env.NEXT_PUBLIC_BASE_URL,
            })}
            className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      </div>
    )

  
}
