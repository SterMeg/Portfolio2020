import React from "react";
import { lightTheme, breakpoints } from "../utils";
import styled from "styled-components"
import BaseHeading from "./base-heading";
import border from "../images/border.svg"

const FlipCardStyles = styled.div`
  background-color: transparent;
  perspective: 1000px;
  display: grid;
  grid: repeat(6, 1fr) / repeat(6, 1fr);
  grid-column: 2 / -2;
  grid-row: span var(--noOfColumns);
  @media (min-width: ${breakpoints.sm}) {
    --box-columns: calc(var(--noOfColumns) / 1.5);
    --box-shift: calc(var(--box-columns) / 2);
    grid-column: calc(${({index}) =>
      index} * var(--box-shift) + 2) / span var(--box-columns);
    ${({ index }) =>
      (index % 2 === 0) &&
      `
      grid-column-start: 2;
    `}
    grid-row: ${props => props.index * 4 + 3} / span var(--box-columns);
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-column: ${props => props.index * 3 + 2} / span 6;
    grid-row: ${props => props.index * 3 + 1} / span 6;
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
