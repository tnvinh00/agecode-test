import { RatingType } from '@/types/user.type'
import React from 'react'
import RatingCard from '@/components/cards/RatingCard';

const RatingBlock = ({ ratings }: { ratings: RatingType[] }) => {
  return (
    <div className='flex flex-row flex-wrap'>
      {ratings.map((item) => (
        <RatingCard item={item} key={item.id} />
      ))}
    </div>
  )
}

export default RatingBlock