import React from 'react'
import styled from 'styled-components'

const ScallopPattern = styled.svg`
  width: 100%;
  bottom: ${props => (props.flip ? "0" : "unset")};
  height: 40px;
  position: absolute;
  top: ${props => (props.flip ? "unset" : "100%")};
  grid-column: 1 / -1;
  z-index: 5;
`

export const Scallop = ({ flip, id, className }) => (
         <ScallopPattern xmlns="http://www.w3.org/2000/svg" flip={flip} className={className}>
           <pattern
             id={`swoop${id}`}
             x="0"
             y="0"
             width="100"
             height="40"
             patternUnits="userSpaceOnUse"
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
           <mask id={`swoop-mask${id}`} x="0" y="0" width="100%" height="40">
             <rect
               x="0"
               y="0"
               width="100%"
               height="40"
               fill={`url(#swoop${id})`}
             />
           </mask>
           <rect
             x="0"
             y="0"
             width="100%"
             height="40"
             fill="#fff"
             mask={`url(#swoop-mask${id})`}
           />
         </ScallopPattern>
       )