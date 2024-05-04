interface SvgProps {
  width?: number
  height?: number
}

const Instagram: React.FC<SvgProps> = ({ width = 32, height = 32 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.66699"
        y="2.66602"
        width="26.6667"
        height="26.6667"
        rx="4"
        stroke="#28303F"
        stroke-width="1.5"
      />
      <circle cx="24.0003" cy="7.99935" r="1.33333" fill="#28303F" />
      <circle cx="15.9997" cy="16.0007" r="6.66667" stroke="#28303F" stroke-width="1.5" />
    </svg>
  )
}

export default Instagram
