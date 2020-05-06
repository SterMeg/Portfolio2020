import React from "react"
import SectionGrid from "../components/section-grid"
import { lightTheme } from "../utils"
import { Scallop } from "../components/svg"
import BaseHeading from "../components/base-heading"

export const BottomBanner = () => (
         <SectionGrid background={lightTheme.mainGradient}>
           <BaseHeading
             as="h2"
             css={`
               font-size: 4rem;
               color: #fff;
               grid-column: 2 / 8;
             `}
           >
             Chat about coding, comics, or coffee!
           </BaseHeading>
           <Scallop id={6} flip />
         </SectionGrid>
       )