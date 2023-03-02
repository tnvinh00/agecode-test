import { RatingType } from '@/types/user.type'
import React from 'react'
import Rating from '@/components/common/Rating'
import moment from 'moment'
import Link from 'next/link'

export type IRatingCardProps = {
  item: RatingType
}

const RatingCard = (props: IRatingCardProps) => {
  const { item } = props

  return (
    <div className='w-full mt-2 mb-6'>
      <div className='flex items-center justify-between'>
        <div className="flex items-center mb-2">
          <Link href={`/user/${item.user.id}`} className='text-xs mr-2 font-bold hover:underline'>
            {item.user.name}
          </Link>
          <Rating size='sm' rate={item.rate} />
        </div>
        <span className='text-xs text-gray-400'>
          {moment(item.createdAt).format('YYYY.MM.DD')}
        </span>
      </div>
      <div className="flex">
        <p className='text-xs text-gray-600'>{item.comment}</p>
      </div>
    </div>
  )
}

export default RatingCard