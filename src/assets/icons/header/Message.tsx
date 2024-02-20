interface SvgProps {
  width?: number
  height?: number
  stroke?: string
}

const Message: React.FC<SvgProps> = ({ width = 32, height = 32, stroke = '#FFC700' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99984 10.6667L13.0414 14.0277C14.8329 15.222 17.1668 15.222 18.9582 14.0277L23.9998 10.6667M7.99984 28H23.9998C26.9454 28 29.3332 25.6122 29.3332 22.6667V9.33333C29.3332 6.38781 26.9454 4 23.9998 4H7.99984C5.05432 4 2.6665 6.38781 2.6665 9.33333V22.6667C2.6665 25.6122 5.05432 28 7.99984 28Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default Message
