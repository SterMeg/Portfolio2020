import React, {useState} from "react"
import { breakpoints } from "../utils"
import { Scallop } from "./svg"
import styled from "styled-components"
import BaseHeading from "./base-heading"
import SectionGrid from "./section-grid"
import Toggle from "./toggle"
import { FlipCard } from "./FlipCard"

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

const allSkills = {
  skills: { 
    frontend: ["HTML5", "CSS3", "JavaScript", "Typescript", "React", "Vue"],
    backend: ["Node.js", "Express", "Ruby", "Ruby on Rails", "PHP"]
  },
  tools: {
    frontend: ["Webpack", "VS Code", "Git / GitHub", "Gulp", "Command Line"],
    backend: ["Webpack", "VS Code", "Git / GitHub", "Gulp", "Command Line"]
  },
  more: {
    frontend: ["Jest", "Sass", "CSS-in-JS", "CSS Grid", "CSS Animation"],
    backend: ["PostgreSQL", "MongoDB", "JSON API", "Fast JSON:API"]
  }
}

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
     {Object.keys(allSkills).map((key, index) => (
       <FlipCard
         list={allSkills[key]}
         title={key}
         rotated={skillSelect === "backend"}
         index={index}
         key={key}
       />
     ))}
     <Scallop flip id={4} />
   </SkillsContainer>
 )
}

export default Skills