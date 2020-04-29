import React, {forwardRef } from "react"

export const GradientMask = forwardRef(({className}, ref) => (
  <svg
    viewBox="0 0 200 50"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <defs>
      <linearGradient id="Gradient">
        <stop
          ref={ref}
          offset="0"
          stop-color="white"
          stop-opacity="0"
        />
        <stop
          offset="1"
          stop-color="white"
          stop-opacity="1"
        />
      </linearGradient>
      <mask id="Mask">
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#Gradient)"
        />
      </mask>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="#f40e67" />
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="#fccd11"
      mask="url(#Mask)"
    />
  </svg>
))