import React, { useEffect, useState } from 'react'

export type TabsProps = {
  children?: React.ReactNode
  currentTab?: number
  onChange?: (index: number) => void
}

const Tabs = ({ children, currentTab, onChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(currentTab)
  const [tabContent, setTabContent] = useState<React.ReactNode>(null)
  const [tabList, setTabList] = useState<string[]>([])

  useEffect(() => {
    setActiveTab(currentTab)
  }, [currentTab])

  const handleTabClick = (index: number) => {
    setActiveTab(index)
    onChange && onChange(index)
  }

  useEffect(() => {
    setTabList([])
    React.Children.map(children, (child: any, index) => {
      if (index === activeTab) {
        // set tabContent
        setTabContent(child)
      }
      // push label to tabList
      setTabList((prev) => [...prev, child.props.label])
    })
  }, [activeTab, children])

  return (
    <>
      <ul className="tab-button inline-flex w-full items-center bg-gray-200 rounded-3xl p-0.5">
        {tabList.map((label, index) => (
          <li
            key={index}
            className={`tab-button-item cursor-pointer w-full text-center text-xs py-2 border-gray-200 text-gray-500 rounded-3xl inline ${index === activeTab ? 'active bg-white font-bold' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {label}
          </li>
        ))}
      </ul>
      <div className="tab-content pt-3">
        {tabContent}
      </div>
    </>
  )
}

export default Tabs