'use client'
import { useState } from 'react'
import Login from './(auth)/login/page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Image from 'next/image'
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Spotlight } from "@/components/spotlight-new";

export default function Home() {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col items-center justify-between p-6 md:p-16 bg-black/[0.96] text-white relative overflow-hidden">
        <Spotlight />
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-gradient-to-b from-zinc-900 pb-6 pt-8 backdrop-blur-2xl md:static md:w-auto md:rounded-xl md:border md:bg-gray-900 md:p-4">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">src/app/page.tsx</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black md:static md:h-auto md:w-auto md:bg-none">
            <Link
              className="pointer-events-none flex place-items-center gap-2 p-8 md:pointer-events-auto md:p-0"
              href="https://github.com/mambacodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              By <Image src="/mamba-white.svg" alt="Wstack Logo" width={150} height={66} priority />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative flex place-items-center mb-8 md:mt-12 mt-24">
            <Image
              src="/wstack-white.svg"
              alt="Wstack Logo"
              width={240}
              height={50}
              priority
              className="relative dark:drop-shadow-[0_0_1.2rem_#ffffff70]"
            />
            <span className='text-xs font-medium text-cyan-200'>BETA</span>
          </div>

          <h1 className={` text-2xl md:text-3xl lg:text-4xl mb-6 max-w-3xl`}>
            The only starter kit you need to launch your startup—period.
          </h1>
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left gap-8 max-w-5xl">
          <Link
            href="https://github.com/MambaCodes/wstack"
            className="group rounded-lg border border-gray-800 px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-900"
          >
            <h2 className={`  mb-3 text-2xl font-semibold`}>
              Tech Stack{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                <ArrowRight className="inline h-5 w-5" />
              </span>
            </h2>
            <p className={`  m-0 max-w-[30ch] text-sm opacity-70`}>
              See why we chose this stack.
            </p>
          </Link>

          <Link
            href="https://github.com/MambaCodes/wstack-docs"
            className="group rounded-lg border border-gray-800 px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-900"
          >
            <h2 className={`  mb-3 text-2xl font-semibold`}>
              Documentation{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                <ArrowRight className="inline h-5 w-5" />
              </span>
            </h2>
            <p className={`  m-0 max-w-[30ch] text-sm opacity-70`}>
              Find in-depth information about Wstack features and API.
            </p>
          </Link>

          <Link
            href="https://github.com/MambaCodes/wstack"
            className="group rounded-lg border border-gray-800 px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-900"
          >
            <h2 className={`  mb-3 text-2xl font-semibold`}>
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                <ArrowRight className="inline h-5 w-5" />
              </span>
            </h2>
            <p className={`  m-0 max-w-[30ch] text-sm opacity-70`}>
              Discover and deploy boilerplate example Wstack projects.
            </p>
          </Link>

          <Link
            href="https://github.com/MambaCodes/wstack-docs"
            className="group rounded-lg border border-gray-800 px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-900"
          >
            <h2 className={`  mb-3 text-2xl font-semibold`}>
              Prompts{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                <ArrowRight className="inline h-5 w-5" />
              </span>
            </h2>
            <p className={`  m-0 max-w-[30ch] text-sm opacity-70`}>
              AI-focused starter kit with pre-built prompts.
            </p>
          </Link>

          <Link
            href="/login"
            className="group rounded-lg border border-gray-800 px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-900"
          >
            <h2 className={`  mb-3 text-2xl font-semibold`}>
              Authentication{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                <ArrowRight className="inline h-5 w-5" />
              </span>
            </h2>
            <p className={`  m-0 max-w-[30ch] text-sm opacity-70`}>
              See how we use NextAuth for Wstack.
            </p>
          </Link>

          <Link
            href="#contact"
            className="group rounded-lg border border-gray-800 px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-900"
          >
            <h2 className={`  mb-3 text-2xl font-semibold`}>
              Contact{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                <ArrowRight className="inline h-5 w-5" />
              </span>
            </h2>
            <p className={`  m-0 max-w-[30ch] text-sm opacity-70`}>
              Get in touch with us on Discord.
            </p>
          </Link>
        </div>
    </div>
    </QueryClientProvider>
  )
}
