import React from 'react'
import { TimelineType } from '@/types/timeline.type';
import TimelineCard from '@/components/cards/TimelineCard';

const TimelineBlock = ({ timelines }: { timelines: TimelineType[] }) => {
  return (
    <div>
      {timelines.map((item) => (
        <TimelineCard item={item} key={item.id} />
      ))}
    </div>
  )
}

export default TimelineBlock