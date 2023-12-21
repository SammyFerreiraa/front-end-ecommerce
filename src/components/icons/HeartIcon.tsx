import React from 'react'

const HeartIcon = ({ fill }: { fill: string }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.35 17.1302C10.59 17.8202 9.42003 17.8202 8.66003 17.1202L8.55003 17.0202C3.30003 12.2702 -0.129969 9.16017 3.10168e-05 5.28017C0.060031 3.58017 0.930031 1.95017 2.34003 0.990166C4.98003 -0.809834 8.24003 0.0301659 10 2.09017C11.76 0.0301659 15.02 -0.819834 17.66 0.990166C19.07 1.95017 19.94 3.58017 20 5.28017C20.14 9.16017 16.7 12.2702 11.45 17.0402L11.35 17.1302Z"
        fill={fill}
      />
    </svg>
  )
}

export default HeartIcon
