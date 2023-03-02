import Image from 'next/image'
import React, { useMemo } from 'react'

export type IAvatarProps = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  src: string
  alt: string
  rounded: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
  className?: string
}

const Avatar = (props: IAvatarProps) => {
  const { size, src, alt, rounded, className } = props

  const sizeMap = useMemo(() => ({
    xs: 'w-10 h-10',
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24',
  }), [])

  return (
    <Image
      width={500}
      height={500}
      className={`object-cover ${sizeMap[size]} rounded-${rounded} ${className}`}
      src={src}
      alt={alt}
    />
  )
}

const defaultProps: IAvatarProps = {
  size: 'md',
  src: '',
  alt: 'Avatar',
  rounded: 'xl',
  className: 'rounded-xl ',
}

Avatar.defaultProps = defaultProps

export default Avatar