import React from "react";
import { breakpoints } from "../utils";
import { CardFace } from "./CardFace"
import styled from "styled-components"

const skillsets = [
  {
    title: "skills",
    frontend: ["HTML5", "CSS3", "JavaScript", "Typescript", "React", "Vue"],
    backend: ["Node.js", "Express", "Ruby", "Ruby on Rails", "PHP"],
  },
  {
    title: "tools",
    frontend: ["Webpack", "VS Code", "Git / GitHub", "Gulp", "Command Line"],
  },
  {
    title: "more",
    frontend: ["Jest", "Sass", "CSS-in-JS", "CSS Grid", "CSS Animation"],
    backend: ["PostgreSQL", "MongoDB", "JSON API", "Fast JSON:API"],
  }
]

const FlipCardStyles = styled.div`
  --boxOffset: 12;
  --span: var(--boxOffset);
  --startLine: 3;
  --gridColumnStart: 2;
  --gridRowStart: calc(
    ${({ index }) => index} * var(--boxOffset) + var(--startLine)
  );

  background-color: transparent;
  display: grid;
  grid: repeat(6, 1fr) / repeat(6, 1fr);
  grid-column: var(--gridColumnStart) / span var(--span);
  grid-row: var(--gridRowStart) / span var(--span);
  perspective: 1000px;
  @media (min-width: ${breakpoints.sm}) {
    --startLine: 2;
    --boxOffset: 4;
    --span: calc(var(--boxOffset) * 2);
    --gridColumnStart: var(--gridRowStart);
    overflow: hidden;
  }
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.lg}) {
    &:last-of-type {
      --gridColumnStart: 2;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    --boxOffset: 3;
  }
`

const FlipCardInner = styled.div`
  display: grid;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  @media (min-width: ${breakpoints.sm}) {
    grid-column: 2 / -2;
    grid-row: 2 / -2;
  }
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${({flip}) =>
    flip ? "rotate3d(0,1,0,180deg)" : "none"};
`

export const SkillsGrid = ({ rotate }) => (
  skillsets.map(({title, frontend, backend}, index) => (
      <FlipCardStyles index={index} key={title}>
        <FlipCardInner flip={ backend && rotate }>
          <CardFace
              face="front"
              list={frontend}
              title={title}
              hideFromSr={rotate}
            />
          {backend && 
          <CardFace 
            face="back"
            list={backend}
            title={title}
            hideFromSr={!rotate}
          />
          }
        </FlipCardInner>
      </FlipCardStyles>
    ))
)
  
