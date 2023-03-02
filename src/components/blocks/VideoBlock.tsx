import VideoType from '@/types/video.type'
import React from 'react'
import VideoCard from '@/components/cards/VideoCard'

const VideoBlock = ({ videos }: { videos: VideoType[] }) => {
  return (
    <div>
      <h1 className='text-xl font-bold text-gray-900 my-4'>
        ビデオ
      </h1>
      {videos.map((video) => (
        <VideoCard key={video.id} item={video} />
      ))}
    </div>
  )
}

export default VideoBlock