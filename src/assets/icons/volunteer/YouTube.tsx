interface SvgProps {
  width?: number
  height?: number
}

const YouTube: React.FC<SvgProps> = ({ width = 32, height = 32 }) => {
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
        y="4"
        width="26.6667"
        height="24"
        rx="4"
        stroke="#28303F"
        stroke-width="1.5"
      />
      <path
        d="M13.4472 11.3896L20.8778 15.1049C21.6149 15.4734 21.6149 16.5253 20.8778 16.8938L13.4472 20.6091C12.7823 20.9415 12 20.458 12 19.7146V12.284C12 11.5407 12.7823 11.0572 13.4472 11.3896Z"
        stroke="#28303F"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  )
}

export default YouTube
