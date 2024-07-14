import React, { useState, ReactNode } from 'react'

interface FilterAccordionProps {
  title: string
  children: ReactNode
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="filter-accordion">
      <div className="filter-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      {isOpen && <div className="filter-content">{children}</div>}
    </div>
  )
}

export default FilterAccordion
