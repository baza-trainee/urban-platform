interface SvgProps {
  width?: number
  height?: number
  stroke?: string
}

const BurgerClosed: React.FC<SvgProps> = ({ width = 32, height = 32, stroke = '#FFC700' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0877 18.2983C15.3569 19.5675 17.4146 19.5675 18.6838 18.2983C19.9531 17.0291 19.9531 14.9713 18.6838 13.7021M14.0877 18.2983C12.8184 17.0291 12.8184 14.9713 14.0877 13.7021C15.3569 12.4329 17.4146 12.4329 18.6838 13.7021M14.0877 18.2983L7.19336 25.1926M18.6838 13.7021L25.5781 6.80785"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        fill="none"
      />
      <path
        d="M18.6833 18.2978C19.9525 17.0286 19.9525 14.9709 18.6833 13.7017C17.4141 12.4324 15.3564 12.4324 14.0872 13.7017M18.6833 18.2978C17.4141 19.567 15.3564 19.567 14.0872 18.2978C12.8179 17.0286 12.8179 14.9709 14.0872 13.7017M18.6833 18.2978L25.5776 25.1921M14.0872 13.7017L7.19286 6.80736"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        fill="none"
      />
    </svg>
  )
}

export default BurgerClosed
