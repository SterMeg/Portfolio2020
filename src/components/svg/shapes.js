import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils"

const ShapesSvg = styled.svg`
  width: 100%;
  @media (min-width: ${breakpoints.md}) {
    left: -11%;
    position: absolute;
    top: -21%;
  }
`

export const Shapes = () => (
         <ShapesSvg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 506.013 302.466"
           aria-hidden="true" 
           focusable="false" 
         >
             <defs>
               <filter
                 id="shapeA"
                 x="332.302"
                 y="118.001"
                 width="94"
                 height="87.996"
                 filterUnits="userSpaceOnUse"
               >
                 <feOffset dx="-17.366" dy="17.983" />
                 <feGaussianBlur stdDeviation="7.5" result="blur" />
                 <feFlood floodColor="#aeaeae" floodOpacity=".502" />
                 <feComposite operator="in" in2="blur" />
                 <feComposite in="SourceGraphic" />
               </filter>
               <filter
                 id="shapeB"
                 x="0"
                 y="228.811"
                 width="60.035"
                 height="60.037"
                 filterUnits="userSpaceOnUse"
               >
                 <feOffset dx="-17.366" dy="17.983" />
                 <feGaussianBlur stdDeviation="7.5" result="blur-2" />
                 <feFlood floodColor="#aeaeae" floodOpacity=".502" />
                 <feComposite operator="in" in2="blur-2" />
                 <feComposite in="SourceGraphic" />
               </filter>
               <filter
                 id="shapeC"
                 x="385.235"
                 y="32.009"
                 width="74.002"
                 height="73.977"
                 filterUnits="userSpaceOnUse"
               >
                 <feOffset dx="-17.366" dy="17.983" />
                 <feGaussianBlur stdDeviation="7.5" result="blur-3" />
                 <feFlood floodColor="#aeaeae" floodOpacity=".502" />
                 <feComposite operator="in" in2="blur-3" />
                 <feComposite in="SourceGraphic" />
               </filter>
               <filter
                 id="shapeD"
                 x="95.086"
                 y="129.791"
                 width="65.036"
                 height="65.04"
                 filterUnits="userSpaceOnUse"
               >
                 <feOffset dx="-17.366" dy="17.983" />
                 <feGaussianBlur stdDeviation="7.5" result="blur-4" />
                 <feFlood floodColor="#aeaeae" floodOpacity=".502" />
                 <feComposite operator="in" in2="blur-4" />
                 <feComposite in="SourceGraphic" />
               </filter>
               <filter
                 id="shapeE"
                 x="147.238"
                 y="0"
                 width="69.022"
                 height="68.996"
                 filterUnits="userSpaceOnUse"
               >
                 <feOffset dx="-17.366" dy="17.983" />
                 <feGaussianBlur stdDeviation="7.5" result="blur-5" />
                 <feFlood floodColor="#aeaeae" floodOpacity=".502" />
                 <feComposite operator="in" in2="blur-5" />
                 <feComposite in="SourceGraphic" />
               </filter>
             </defs>
             <g transform="translate(-977.887 -242.484)">
               <g transform="translate(977.89 242.48)" filter="url(#shapeA)">
                 <path
                   data-name="Shape 11"
                   d="M421.165 165.52h-11.542v-9.871h-9.8v-9.873h-9.8V135.9h-9.8v-9.872h-8.059v-3.508h11.546v9.872h9.8v9.873h9.8v9.873h9.8v9.872h8.06z"
                   fill="#222"
                 />
               </g>
               <g transform="translate(977.89 242.48)" filter="url(#shapeB)">
                 <path
                   data-name="Shape 12"
                   d="M47.381 243.279l-5.089 5.09-2.428-2.427 5.09-5.091-5.09-5.091 2.428-2.428 5.089 5.091 5.089-5.091 2.428 2.428-5.09 5.091 5.09 5.091-2.428 2.427z"
                   fill="#222"
                 />
               </g>
               <g transform="translate(977.89 242.48)" filter="url(#shapeC)">
                 <path
                   data-name="Shape 13"
                   d="M444.434 65.507l-19.336-19.319 29-9.659zm-12.776-17.771l11.227 11.216 5.612-16.824z"
                   fill="#ff9400"
                 />
               </g>
               <g transform="translate(977.89 242.48)" filter="url(#shapeD)">
                 <path
                   data-name="Shape 14"
                   d="M154.986 144.33l-10.018 10.022-10.018-10.022 10.018-10.018z"
                   fill="#ff9400"
                 />
               </g>
               <g transform="translate(977.89 242.48)" filter="url(#shapeE)">
                 <path
                   data-name="Shape 15"
                   d="M196.732 28.285l14.159-14.145a12.14 12.14 0 01.233 2.223L198.957 28.52a12.244 12.244 0 01-2.225-.235zm14.265-10.005a12.015 12.015 0 01-10.12 10.111zm-17.408 8.9l16.193-16.174a11.736 11.736 0 01.73 1.725l-15.194 15.178a11.807 11.807 0 01-1.729-.733zm-2.511-1.737l16.966-16.947a12.135 12.135 0 011.075 1.382l-16.658 16.638a11.934 11.934 0 01-1.383-1.077zm-1.97-2.277L205.763 6.52a11.973 11.973 0 011.384 1.073L190.18 24.542a12.05 12.05 0 01-1.07-1.38zm-1.4-2.854l15.195-15.178a11.848 11.848 0 011.728.73l-16.192 16.174a12.048 12.048 0 01-.729-1.73zm-.61-3.636L199.267 4.52a12.06 12.06 0 012.225.233l-14.158 14.142a12.023 12.023 0 01-.232-2.223zm10.246-12.027l-10.12 10.111a12.014 12.014 0 0110.123-10.114z"
                   fill="#f41265"
                 />
               </g>
               <circle
                 data-name="Shape 17"
                 cx="8.01"
                 cy="8.01"
                 r="8.01"
                 transform="translate(1467.88 528.93)"
                 fill="#f41166"
               />
             </g>
         </ShapesSvg>
       )