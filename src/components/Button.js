import styled from "styled-components"
import { mainGradient, lightTheme } from "../utils"

export const Button = styled.button`
  background: none;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 15px 50px;
`

// export const GradientButton = styled(Button)`
//   background: ${mainGradient};
//   color: #fff;
//   &:hover {
//     color: #fff;
//   }
//   &:after {
//     content: "";
//     background: ${lightTheme.primaryColor};
//   }
// `
export const InvertedGradientButton = styled(Button)`
    position: relative;
    /* transform: rotate(2deg); */
    /* z-index: 1; */
  background-image: linear-gradient(white, white), ${mainGradient};
  border: double 2px transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;

  &:hover {
    background-image: ${mainGradient}
  }
  `