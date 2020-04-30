import React from "react"
import { gsap } from "gsap"
import styled from "styled-components"
import { GradientMask } from "./svg"
import { Button } from "./Button"
import { lightTheme, orange } from "../utils"

const GradientMaskStyles = styled(GradientMask)`
  border-radius: 40px;
  left: 0;
  top: 0;
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
` 

const GradientButtonStyles = styled(Button)`
  color: white;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    width: 200%;
    top: 0;
    right: 0;
    height: 100%;
    background-image: linear-gradient(45deg, ${lightTheme.primaryColor} 20%, ${orange} 85%, ${lightTheme.secondaryColor});
    z-index: -1;
    transition: transform 0.8s ease;
    will-change: transform;
  }
  &:hover {
    &:before {
      transform: translateX(50%);
    }
  }
`

export const GradientButton = ({ children, ...rest }) => {
  const ref = React.createRef()
  const handleHoverFocus = () => {
    console.log(ref)
    gsap.to(ref.current, {
      duration: 0.5,
      attr: {offset: 1},
      ease: "powerOne.in"
    })
  }

  const handleLeave = () => {
    gsap.to(ref.current, {
      duration: 0.5,
      attr: { offset: 0 },
      ease: "powerOne.out"
    })
  }

  return (
      <GradientButtonStyles
        // onMouseEnter={handleHoverFocus}
        // onFocus={handleHoverFocus}
        // onMouseLeave={handleLeave}
        // onBlur={handleLeave}
        {...rest}
      >
        {/* <GradientMaskStyles ref={ref} /> */}
        {children}
      </GradientButtonStyles>
  )
}