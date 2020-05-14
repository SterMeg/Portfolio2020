import styled from "styled-components"
import { lightTheme, orange, breakpoints } from "../../utils"

export const Button = styled.button`
  background: none;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 15px 40px;
  text-decoration: none;
  @media (min-width: ${breakpoints.sm}) {
    padding: 15px 50px;
  }
`

export const LightButton = styled(Button)`
         background: ${lightTheme.textColorInverted};
         box-shadow: -14px 14px 20px 0px rgba(98, 98, 98, 0.2);
         &:hover, &:focus {
           box-shadow: -6px 6px 5px 0px rgba(98, 98, 98, 0.2);
         }
       `

export const GradientButton = styled(Button)`
  background: ${lightTheme.primaryColor};
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
    background-image: linear-gradient(
      45deg,
      ${lightTheme.linkHover} 5%, 
      ${lightTheme.primaryColor},
      ${orange} 85%,
      ${lightTheme.secondaryColor}
    );
    z-index: -1;
    transition: transform 0.8s ease;
    will-change: transform;
  }
  &:hover, &:focus {
    &:before {
      transform: translateX(50%);
    }
  }
`