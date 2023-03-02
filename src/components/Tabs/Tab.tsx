import React from 'react'

export type TabProps = {
  children?: React.ReactNode,
  label?: string
}

const Tab = ({ children, label }: TabProps) => {
  return (
    <>
      {children}
    </>
  )
}

export default Tab