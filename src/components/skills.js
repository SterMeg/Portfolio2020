import React, {useState} from "react"
import { Container } from "../utils/layout"
import { colors } from "../utils"
import styled from "styled-components"
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

const Toggle = styled.div`
  grid-column: 5;
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
       <h2>My Skills</h2>
       <Toggle>
         <input
           type="radio"
           name="skills"
           value="frontend"
           id="frontend"
           checked={skillSelect === "frontend"}
           onChange={e => setSkillSelect(e.target.value)}
         />
         <label for="frontent">Front-end</label>
         <input
           type="radio"
           name="skills"
           value="backend"
           id="backend"
           checked={skillSelect === "backend"}
           onChange={e => setSkillSelect(e.target.value)}
         />
         <label for="backend">Back-end</label>
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