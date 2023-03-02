import AudioType from '@/types/audio.type'
import Image from 'next/image'
import React from 'react'
import ButtonOutline from '@/components/common/ButtonOutline'

export type IAudioCardProps = {
  item: AudioType
}

const AudioCard = (props: IAudioCardProps) => {
  const { item } = props

  return (
    <a
      href={item.url}
      target="_blank"
      className="flex items-center bg-slate-100 mb-4 rounded-lg shadow hover:bg-gray-100"
    >
      <div className="relative">
        <Image
          width={500}
          height={500}
          className="object-cover h-24 w-24 rounded-none rounded-l-lg rounded-t-lg"
          src={item.cover}
          alt={item.title}
        />
        <Image
          width={500}
          height={500}
          className="absolute h-9 w-9 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          src="/images/play.svg"
          alt="play"
        />

      </div>
      <div className="flex flex-col justify-between p-2 pl-4 leading-normal">
        <h5 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {item.title}
        </h5>
        <p className="mb-2 text-xss font-normal text-gray-700 dark:text-gray-400">
          {item.artist}
        </p>
        <ButtonOutline
          size='xs'
          text="Streaming options"
        />
      </div>
    </a>
  )
}

const defaultProps: IAudioCardProps = {
  item: {
    id: '1',
    title: 'Audio Image',
    cover: '',
    artist: 'Artist Name',
    url: '',
    duration: 129,
  }
}

AudioCard.defaultProps = defaultProps

export default AudioCard