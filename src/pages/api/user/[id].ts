// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MockUserData } from '@/mocks/mockUserData'
import { UserType } from '@/types/user.type'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  user: UserType
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //get the id from the query string
  const id = req.query.id
  //find the user with the id
  const user = MockUserData.find(user => user.id == id) || {}
  //return the user
  res.status(200).json({
    user: user
  })
}
