import AudioType from '@/types/audio.type'
import React from 'react'
import AudioCard from '@/components/cards/AudioCard'

const AudioBlock = ({ audios }: { audios: AudioType[] }) => {
  return (
    <>
      <h1 className='text-xl font-bold text-gray-900 my-4'>
        オーディオ
      </h1>
      {audios.map((audio) => (
        <AudioCard key={audio.id} item={audio} />
      ))}
    </>
  )
}

export default AudioBlock