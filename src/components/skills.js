import React, {useState} from "react"
import { Container, Heading2 } from "../utils/layout"
import { colors } from "../utils"
import styled, { keyframes } from "styled-components"
import { Scallop } from "./svg"
import border from "../images/border.svg"

const SkillsContainer = styled(Container)`
  background: linear-gradient(
    to bottom,
    #f9f9ff 5%,
    #fff 10%,
    #fff 90%,
    #f9f9ff 95%
  );
  padding: 150px 0;
  grid-template-rows: repeat(4, 285px);
  place-items: center;
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

const Toggle = styled.fieldset`
  border: none;
  grid-column: 5;
  padding: 0;
  white-space: nowrap;
  margin-top: 20px;
  legend {
    font-size: 0.2rem;
    opacity: 0;
    position: absolute;
  }
`

const FlipCard = styled.div`
  background-color: transparent;
  perspective: 1000px;
  grid-column: ${props => props.boxNumber + 2} / span 2;
  grid-row: ${props => props.boxNumber + 1} / span 2;
  width: calc(100% - 35%);
  height: calc(100% - 35%);
`

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${props =>
    props.selectedSkill === "backend" ? "rotate3d(0,1,0,180deg)" : "none"};
`

const FlipCardStyles = styled.div`
  box-shadow: 0 0 20px #b0b0b0;
  background-color: #fff;
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 20px;
  right: 20px;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: ${props =>
    props.currentSkill === "frontend"
      ? "rotate(-45deg)"
      : "rotate3d(0,1,0,180deg) rotate(-45deg);"};

  &:after {
    border: 4px solid #ff9400;
    border-image: url(${border});
    border-image-slice: 8;
    content: '';
    top: -20px;
    bottom: -20px;
    left: -20px;
    right: -20px;
    position: absolute;
  }
  ul {
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    transform: rotate(45deg);
  }
`

const SkillHeading = styled.div`
  grid-column: 5;
  grid-row: 1 / span 2;
`
const slideRight = keyframes`
  0 {
    width: 3rem;
    transform: translateX(0);
  }
  50% {
    width: 6rem;
    transform: translateX(-.5rem);
  }
  100% {
    width: 3rem;
    transform: translateX(-3rem);
  }
`

const slideLeft = keyframes`
  0% {
    width: 3rem;
    transform: translateX(-3rem);
  }
  50% {
    width: 6rem;
    transform: translateX(-.5rem);
  }
  100% {
    width: 3rem;
    transform: translateX(0);
  }
`

const RadioInput = styled.input`
  opacity: 0;
  position: absolute;
  &:first-of-type:checked ~ label:first-of-type:after {
    background-color: #dddddd;
  }
  &:first-of-type:checked ~ label:first-of-type:before {
    animation: ${slideRight} 0.8s forwards ease-in-out;
  }
  &:first-of-type:not(:checked) ~ label:first-of-type:before {
    animation: ${slideLeft} 0.8s forwards ease-in-out;
  }
  &:last-of-type:checked ~ label:last-of-type {
    z-index: 1;
  }
`

const RadioLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  font-size: 1.4rem;
  line-height: 3;
  position: relative;
  z-index: 2;
  &:first-of-type {
    padding-right: 8rem;
  }
  &:last-child {
    margin-left: -7rem;
    padding-left: 8rem;
  }
  &:first-of-type:before,
  &:first-of-type:after {
    content: "";
    height: calc(100% - 1.2rem);
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    vertical-align: middle;
    width: 6rem;
  }
  &:first-of-type:before {
    background: linear-gradient(to right, #fccd11 0%, #f40e68 100%);
    border-radius: 5rem;
    position: absolute;
    top: 0.6rem;
    right: 0.25rem;
    /* transform: translateX(2rem); */
    /* transform: translate(0em) scaleX(0.5); */
    /* width: 3rem; */
    z-index: 2;
  }
  &:first-of-type:after {
    border: 1px solid #eee;
    background-color: #222;
    border-radius: 5rem;
    padding: 0.5rem;
    background-clip: content-box;
    transition: background-color 1s ease-in-out;
    /* width: 6rem; */
    margin: 0 1rem;
  }
`

const SkillBox = ({ skillSet, title, selectedSkill, boxNumber }) => (
  <FlipCard boxNumber={boxNumber}>
    <FlipCardInner selectedSkill={selectedSkill}>
      {Object.keys(skillSet).map(key => (
        <FlipCardStyles
          currentSkill={key}
          selectedSkill={selectedSkill}
          key={title + key}
        >
          <ul>
            <h3>{title}</h3>
            {skillSet[key].map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </FlipCardStyles>
      ))}
    </FlipCardInner>
  </FlipCard>
)

const Skills = () => {
const [skillSelect, setSkillSelect] = useState('frontend')
 return (
   <SkillsContainer>
     <SkillHeading>
      <Heading2>My Skills</Heading2>
       <Toggle>
         <legend>
           Choose a stack
         </legend>
         <RadioInput
           type="radio"
           name="skills"
           value="frontend"
           id="frontend"
           checked={skillSelect === "frontend"}
           onChange={e => setSkillSelect(e.target.value)}
         />
         <RadioLabel for="frontend">Front-end</RadioLabel>
         <RadioInput
           type="radio"
           name="skills"
           value="backend"
           id="backend"
           checked={skillSelect === "backend"}
           onChange={e => setSkillSelect(e.target.value)}
         />
         <RadioLabel for="backend">Back-end</RadioLabel>
       </Toggle>
     </SkillHeading>
     {Object.keys(allSkills).map((key, index) => (
       <SkillBox
         skillSet={allSkills[key]}
         title={key}
         selectedSkill={skillSelect}
         key={key}
         boxNumber={index}
       />
     ))}
     <p style={{ gridRow: "4", gridColumn: "2" }}>
       Don't see a skill you are looking for? I can learn it! I'm always ready
       to learn new things, and I've proven that I can quickly and effectively
       become productive with new tools and languages.
     </p>
     <Scallop flip id={4} />
   </SkillsContainer>
 )
}

export default Skills