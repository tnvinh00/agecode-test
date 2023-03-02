import VideoType from '@/types/video.type'
import Image from 'next/image'
import React from 'react'

export type IVideoCardProps = {
  item: VideoType
}

const VideoCard = (props: IVideoCardProps) => {
  const { item } = props

  return (
    <a
      href={item.url}
      target="_blank"
      className="flex items-center bg-slate-100 mb-4 rounded-lg shadow hover:bg-gray-100"
    >
      <div className='relative w-full'>
        <Image
          width={500}
          height={500}
          className="object-cover h-48 w-full rounded-lg"
          src={item.thumbnail}
          alt={item.title}
        />
        <p className='absolute z-2 top-1 left-2 text-xs text-gray-200 mt-2'>
          {item.title}
        </p>
        <Image
          width={500}
          height={500}
          className="absolute h-10 w-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          src="/images/play_gray.svg"
          alt="play"
        />
      </div>
    </a>
  )
}

export default VideoCard