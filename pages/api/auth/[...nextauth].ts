import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaClient } from '@prisma/client'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export const prisma = new PrismaClient()

// all requests to /api/auth/* will automatically be handled by NextAuth.js
export default NextAuth({
  // an adapter connects the application to whatever database or backend system to store data for users, their accounts, sessions, etc.
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.SECRET,
})
