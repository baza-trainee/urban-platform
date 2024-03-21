import React from 'react'

interface SvgProps {
  width?: number
  height?: number
  stroke: boolean
}

const CloseBox: React.FC<SvgProps> = ({ width = 24, height = 24, stroke }) => {
  const active = stroke ? '#F7F2ED' : '#000710'
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732"
        stroke={active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default CloseBox
