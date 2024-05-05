interface SvgProps {
  width?: number
  height?: number
}

const Telegram: React.FC<SvgProps> = ({ width = 32, height = 32 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.2122 14.7936L25.7304 5.92611C26.6953 5.50911 27.7408 6.32055 27.5763 7.35874L24.7709 25.0601C24.5976 26.1534 23.2444 26.5716 22.4845 25.7666L18.0396 21.0265C17.1367 20.0702 17.066 18.5984 17.8729 17.5598L20.9646 13.2396C21.1504 13.0004 20.857 12.6858 20.6054 12.8545L14.1423 17.1903C13.0456 17.926 11.7148 18.2287 10.4077 18.0396L5.5503 17.3371C4.21965 17.1447 3.97803 15.327 5.2122 14.7936Z"
        stroke="#28303F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default Telegram
