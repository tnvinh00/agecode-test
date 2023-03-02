import { LinkType } from '@/types/link.type'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export type ILinkProps = {
  item: LinkType
}

const CustomLink = (props: ILinkProps) => {
  const { item } = props

  return (
    <a
      href={item.url}
      target="_blank"
      className="flex items-center bg-slate-100 rounded-lg shadow hover:bg-gray-100 mb-4"
    >
      <div className="relative">
        <Image
          width={500}
          height={500}
          className="object-cover h-20 w-24 rounded-none rounded-l-lg rounded-t-l"
          src={item.cover}
          alt={item.title}
        />

      </div>
      <div className="flex flex-col justify-between p-2 pl-4 leading-normal">
        <h5 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {item.title}
        </h5>
        <p className="mb-2 text-xss font-normal text-gray-700 dark:text-gray-400">
          {item.description}
        </p>
      </div>
    </a>
  )
}

const defaultProps: ILinkProps = {
  item: {
    id: '1',
    title: 'Link Title',
    cover: 'https://images.unsplash.com/photo-1616489953149-8e1b0b2b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    description: ''
  }
}

CustomLink.defaultProps = defaultProps

export default CustomLink