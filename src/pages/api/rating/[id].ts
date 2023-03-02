// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MockRatingData } from '@/mocks/mockRatingData'
import { RatingType } from '@/types/user.type'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ratings: RatingType[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //get the id from the query string
  const id = req.query.id
  res.status(200).json({
    ratings: MockRatingData
  })
}
