import React, {useState} from "react"
import { breakpoints } from "../utils"
import { Scallop } from "./svg"
import styled from "styled-components"
import BaseHeading from "./base-heading"
import SectionGrid from "./section-grid"
import Toggle from "./toggle"
import { SkillsGrid } from "./SkillsGrid"

const SkillsContainer = styled(SectionGrid)`
  background: linear-gradient(
    to bottom,
    #f9f9ff 5%,
    #fff 10%,
    #fff 90%,
    #f9f9ff 95%
  );
  grid-row-gap: var(--gutter);
  grid-auto-rows: minmax(var(--rowHeight), auto);
  position: relative;
`

const SkillsTitle = styled(BaseHeading)`
  grid-column: 2 / -2;
  grid-row: 1;
  place-self: center;
  text-align: center;
  @media (min-width: ${breakpoints.sm}) {
    grid-row: 1 / 5;
    min-width: 228.533px;
    place-self: end;
  }
  @media (min-width: ${breakpoints.lg}) {
    text-align: left;
  }
`

const skillToggle = {
  legend: "Choose a stack",
  id: "skills",
  inputs: [
    "frontend",
    "backend"
  ]
}

const Skills = () => {
const [skillSelect, setSkillSelect] = useState('frontend')
 return (
   <SkillsContainer>
     <SkillsTitle as="h2">
       My<br></br> Skills
     </SkillsTitle>
     <Toggle
       activeToggle={skillSelect}
       setActiveToggle={setSkillSelect}
       attributes={skillToggle}
     />
     <SkillsGrid rotate={skillSelect === "backend" ? true : false}/>
     <Scallop flip id={4} />
   </SkillsContainer>
 )
}

export default Skills