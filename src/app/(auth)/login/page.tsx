'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export default function Login() {
  const { data: session, status } = useSession()

  const router = useRouter();

  if (status === 'authenticated') {
    setTimeout(() => router.push("/dashboard"), 0);
    return (
      <p>
        Loading...
      </p>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center rounded-xl bg-gradient-to-br from-purple-800 via-purple-900 to-black p-4">
      <div className="w-full max-w-md rounded-lg bg-gray-800 p-8 text-white shadow-lg">
        <h1 className="mb-4 text-center text-2xl font-bold">
          Sign in to W-stack
        </h1>
        <p className="mb-6 text-center text-gray-400">
          Welcome back! Please sign in to continue
        </p>

        <div className="flex space-x-4">
          <button
            onClick={() => signIn('google')}
            className="flex w-1/2 items-center justify-center rounded-md border border-gray-700 bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <Image
              className="mr-2 h-5 w-5"
              src="/google-icon.png"
              alt="Google Icon"
              width={20}
              height={20}
            />
            Google
          </button>

          <button
            onClick={() => signIn('github')}
            className="flex w-1/2 items-center justify-center rounded-md border border-gray-700 bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <Image
              className="mr-2 h-5 w-5"
              src="/github-icon.png"
              alt="GitHub Icon"
              width={20}
              height={20}
            />
            GitHub
          </button>
        </div>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700" />
          </div>
        </div>
      </div>
    </div>
  )
}
