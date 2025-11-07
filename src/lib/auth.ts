import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { ObjectId } from 'mongodb'
import NextAuth, { NextAuthOptions } from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import { prisma } from './db'

// Create a standard Prisma adapter first
const prismaAdapter = PrismaAdapter(prisma)

// Then extend it with your custom functionality
export const authOptions: NextAuthOptions = {
  adapter: {
    ...prismaAdapter,
    // @ts-expect-error - data is typed in the adapter
    createUser: async (data: {
      id: string
      name: string | null
      email?: string | null // Change to string | null
      image: string | null
      emailVerified?: Date | null
    }): Promise<AdapterUser> => {
      // Ensure the return type is AdapterUser
      const id = new ObjectId().toHexString()
      const user = await prisma.user.create({
        data: {
          ...data,
          id,
        },
      })
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        emailVerified: user.emailVerified,
      } as AdapterUser // Cast to AdapterUser
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user = {
          ...session.user,
          id: token.sub,
        } as AdapterUser
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
}

export const { auth } = NextAuth(authOptions)
