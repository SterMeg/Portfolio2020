import React from "react";
import { lightTheme, breakpoints } from "../utils";
import styled from "styled-components"
import BaseHeading from "./base-heading";
import border from "../images/border.svg"

const FlipCardStyles = styled.div`
  --boxOffset: 12;
  --span: var(--boxOffset);
  --rowStart: 3;
  --gridColumnStart: 2;
  --gridRowStart: calc(
    ${({ index }) => index} * var(--boxOffset) + var(--rowStart)
  );

  background-color: transparent;
  perspective: 1000px;
  display: grid;
  grid: repeat(6, 1fr) / repeat(6, 1fr);
  grid-column: var(--gridColumnStart) / span var(--span);
  grid-row: var(--gridRowStart) / span var(--span);
  @media (min-width: ${breakpoints.sm}) {
    --rowStart: 2;
    --boxOffset: 4;
    --span: calc(var(--boxOffset) * 2);
    --gridColumnStart: var(--gridRowStart);
    &:last-of-type {
      --gridColumnStart: 2;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    --boxOffset: 3;
    &:last-of-type {
      --gridColumnStart: var(--gridRowStart);
    }
  }
`

const FlipCardInner = styled.div`
  display: grid;
  grid-column: 2 / -2;
  grid-row: 2 / -2;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${props =>
    props.rotated ? "rotate3d(0,1,0,180deg)" : "none"};
`

const FlipCardFace = styled.div`
         box-shadow: 0 0 20px #b0b0b0;
         background-color: #fff;
         grid-row: 1 / -1;
         grid-column: 1 / -1;
         margin: 20px;
         -webkit-backface-visibility: hidden;
         -moz-backface-visibility: hidden;
         backface-visibility: hidden;
         transform: ${props =>
           props.rotated
             ? "rotate3d(0,1,0,180deg) rotate(-45deg);"
             : "rotate(-45deg)"};
         &:after {
           border: 4px solid #ff9400;
           border-image: url(${border});
           border-image-slice: 8;
           content: "";
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

const ListTitle = styled(BaseHeading)`
  text-transform: uppercase;
  color: ${lightTheme.primaryColor};
`


export const FlipCard = ({ list, title, rotated, index }) => (
<FlipCardStyles index={index}>
  <FlipCardInner rotated={rotated}>
    {Object.keys(list).map(key => (<FlipCardFace rotated={rotated} key={title + key}>
      <ul>
        <ListTitle as="h3">
          {title}
        </ListTitle>
        {list[key].map(listItem => (<li key={listItem}>{listItem}</li>))}
      </ul>
    </FlipCardFace>))}
  </FlipCardInner>
</FlipCardStyles>);
