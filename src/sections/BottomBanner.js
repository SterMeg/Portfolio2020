import React from "react"
import styled from "styled-components"
import { lightTheme, breakpoints } from "../utils"
import { Scallop } from "../components/svg"
import BannerImage from "../components/BannerImage"
import { LightButton, BaseHeading, SectionGrid } from "../components/styled"

const BottomBannerStyles = styled(SectionGrid)`
  grid-template-rows: 40px 1fr;
  @media (min-width: ${breakpoints.md}) {
    grid-template-rows: 1fr 40px 4fr;
  }
  padding: 0;
  &:before {
    content: "";
    background: #fff;
    grid-column: 1 / -1;
    grid-row: 1;
  }
  `

const BannerImageWrapper = styled.div`
  display: none;
  @media (min-width: ${breakpoints.md}) {
    display: block;
    grid-column: 8 / span 6;
    grid-row: 1 / -1;
  }
`
const UpperScallop = styled(Scallop)`
  position: static;
  grid-column: 1 / -1;
  grid-row: 2;
  z-index: unset;
`

const BannerText = styled.div`
  grid-column: 2 / -2;
  color: #fff;
  grid-row: 3;
  align-self: center;
  padding: 20px 0 60px;
  @media (min-width: ${breakpoints.md}) {
    grid-column: 2 / 8;
  }
`

export const BottomBanner = () => (
         <BottomBannerStyles background={lightTheme.mainGradient}>
          <UpperScallop />
          <BannerText>
            <BaseHeading
              as="h2"
              css={`font-size: 4rem; margin-bottom: 40px;`}
            >
              Chat about coding, comics, or coffee!
            </BaseHeading>
            <LightButton>
              Contact Me  
            </LightButton>
          </BannerText>
           <BannerImageWrapper>
             <BannerImage />
           </BannerImageWrapper>
           <Scallop flip />
         </BottomBannerStyles>
       )