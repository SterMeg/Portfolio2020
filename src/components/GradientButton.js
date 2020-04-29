import React from "react"
import { gsap } from "gsap"
import styled from "styled-components"
import { GradientMask } from "./svg"
import { Button } from "./Button"

const ButtonContainer = styled.div`
  display: grid;
  margin: 0 auto;
  width: max-content;
`

const GradientMaskStyles = styled(GradientMask)`
  border-radius: 40px;
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  pointer-events: none;
` 

const GradientButtonStyles = styled(Button)`
  color: white;
  grid-area: 1 / 1 / -1 / -1;
`

export const GradientButton = ({ props, children }) => {
  const ref = React.createRef()
  const handleHoverFocus = () => {
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
    <ButtonContainer>
      <GradientMaskStyles ref={ref} />
      <GradientButtonStyles onMouseEnter={handleHoverFocus} onFocus={handleHoverFocus} onMouseLeave={handleLeave} onBlur={handleLeave} {...props}>
        {children}
      </GradientButtonStyles>
    </ButtonContainer>
  )
}