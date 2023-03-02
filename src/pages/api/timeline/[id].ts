// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MockTimelineData } from '@/mocks/mockTimelineData'
import { MockUserData } from '@/mocks/mockUserData'
import { TimelineType } from '@/types/timeline.type'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  timelines: TimelineType[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //get the id from the query string
  const id = req.query.id
  const user = MockUserData.find((user) => user.id == id)
  res.status(200).json({
    timelines: MockTimelineData.map((timeline) => ({
      ...timeline,
      user,
    })),
  })
}
