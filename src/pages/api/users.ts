// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MockUserData } from '@/mocks/mockUserData'
import { UserType } from '@/types/user.type'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  users: UserType[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    users: MockUserData
  })
}
