import React from 'react'

export type IButtonOutlineProps = {
  icon: React.ReactNode
  text: string
  size: 'xs' | 'sm' | 'md' | 'lg'
  onClick: () => void
  className?: string
  rounded: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
}

const ButtonOutline = (props: IButtonOutlineProps) => {
  const { icon, text, size, className, rounded, onClick } = props

  const mapSize = (size: string) => {
    switch (size) {
      case 'xs':
        return 'py-1.5 px-4 text-xss'
      case 'sm':
        return 'py-2 px-2 text-xss'
      case 'md':
        return 'py-3 px-4 text-base'
      case 'lg':
        return 'py-4 px-8 text-md'
      default:
        return 'py-2.5 px-5 text-base'
    }
  }

  return (
    <button
      type="button"
      className={`flex items-center justify-center border font-medium border-black text-black rounded-${rounded} ${mapSize(size)} ${className}`}
    >
      {text}
    </button >
  )
}

const defaultProps: IButtonOutlineProps = {
  icon: null,
  text: 'Button',
  size: 'md',
  rounded: '3xl',
  onClick: () => { },
  className: '',
}

ButtonOutline.defaultProps = defaultProps

export default ButtonOutline