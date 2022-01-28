import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@prisma/client'
import { prisma } from './auth/[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users: User[] = await prisma.user.findMany({})
  res.json(users)
}
