import React from 'react'
import styled from 'styled-components'
import { SVGUniqueID } from 'react-svg-unique-id'

const ScallopPattern = styled.svg`
  top: 100%;
  /* This transform fixes a gradient artifact on Safari. I have no fucking idea why. */
  transform: translateY(0);
  ${props =>  props.flip && `
    transform: translateY(-100%);
  `}
  position: absolute;
  z-index: 5;
`

export const Scallop = ({ flip, className }) => (
  <SVGUniqueID>
    <ScallopPattern xmlns="http://www.w3.org/2000/svg" flip={flip} className={className} width="100%" height="40">
      <pattern
        id="swoop"
        x="0"
        y="0"
        width="100"
        height="40"
        patternUnits="userSpaceOnUse"
        viewBox="0 0 100 40"
      >
        <path
          d="M 0, 20 Q 25,40, 50,20 Q 75,0 100,20 L 100, 40 L 0,40 Z"
          fill={flip ? `#fff` : `#000`}
        ></path>
        <path
          d="M 0,20 Q 25,40, 50,20 Q 75,0 100,20 L 100, 0 L 0,0 Z"
          fill={flip ? `#000` : `#fff`}
        ></path>
      </pattern>
      <mask id="swoopMask" x="0" y="0" width="100%" height="40">
        <rect
          x="0"
          y="0"
          width="100%"
          height="40"
          fill="url(#swoop)"
        />
      </mask>
      <rect
        x="0"
        y="0"
        width="100%"
        height="40"
        fill="#fff"
        mask="url(#swoopMask)"
      />
    </ScallopPattern>
  </SVGUniqueID>
       )