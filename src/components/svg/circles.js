import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils"

const CirclesSvg = styled.svg`
  display: none;
  @media (min-width: ${breakpoints.md}) {
    display: block;
    position: absolute;
    width: 110%;
    top: -35%;
    left: -22%;
  }
  @media (min-width: ${breakpoints.lg}) {
    width: 130%;
  }
`

export const Circles = () => (
  <CirclesSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695 695" aria-hidden="true" focusable="false">
    <defs>
      <filter
        id="a"
        x="0"
        y="0"
        width="695"
        height="695"
        filterUnits="userSpaceOnUse"
      >
        <feOffset />
        <feGaussianBlur stdDeviation="20" result="blur" />
        <feFlood floodColor="#8a8a8a" floodOpacity=".102" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="b"
        x="63"
        y="63"
        width="570"
        height="570"
        filterUnits="userSpaceOnUse"
      >
        <feOffset />
        <feGaussianBlur stdDeviation="20" result="blur-2" />
        <feFlood floodColor="#8a8a8a" floodOpacity=".102" />
        <feComposite operator="in" in2="blur-2" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="c"
        x="113"
        y="113"
        width="470"
        height="470"
        filterUnits="userSpaceOnUse"
      >
        <feOffset />
        <feGaussianBlur stdDeviation="20" result="blur-3" />
        <feFlood floodColor="#8a8a8a" floodOpacity=".102" />
        <feComposite operator="in" in2="blur-3" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g filter="url(#a)">
      <circle
        data-name="Circle 03"
        cx="287.5"
        cy="287.5"
        r="287.5"
        transform="translate(60 60)"
        fill="#f9f9ff"
      />
    </g>
    <g filter="url(#b)">
      <circle
        data-name="Circle 02"
        cx="225"
        cy="225"
        r="225"
        transform="translate(123 123)"
        fill="#f9f9ff"
      />
    </g>
    <g filter="url(#c)">
      <circle
        data-name="Circle 01"
        cx="175"
        cy="175"
        r="175"
        transform="translate(173 173)"
        fill="#fff"
      />
    </g>
  </CirclesSvg>
)