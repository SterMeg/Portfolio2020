import React, {forwardRef } from "react"
import { SVGUniqueID } from 'react-svg-unique-id'

export const GradientMask = forwardRef(({className}, ref) => (
  <SVGUniqueID>
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
            stopColor="white"
            stopOpacity="0"
          />
          <stop
            offset="0.5"
            stopColor="white"
            stopOpacity="1"
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
  </SVGUniqueID>
))