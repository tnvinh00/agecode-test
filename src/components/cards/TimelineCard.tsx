import Avatar from '@/components/common/Avatar';
import { TimelineType } from '@/types/timeline.type';
import moment from 'moment';

export type TimelineCardProps = {
  item: TimelineType
}

const TimelineCard = (props: TimelineCardProps) => {
  const { item } = props

  return (
    <div className='w-full mt-2 mb-8'>
      <div className="flex items-center mb-2">
        <Avatar size='xs' rounded='md' src={item.user?.avatar} />
        <div className="pl-3">
          <p className='text-xs font-bold mb-1'>
            {item.user?.name}
          </p>
          <p className='text-xss text-gray-400'>
            {moment(item.createdAt).format('YYYY.MM.DD HH:mm')}
          </p>
        </div>
      </div>
      <p className='text-xs text-gray-600'>
        {item.content}
      </p>
    </div>
  )
}

export default TimelineCard