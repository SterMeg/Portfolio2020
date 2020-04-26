import React from "react";
import { breakpoints } from "../utils";
import styled from "styled-components"

import { CardFace } from "./CardFace";


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
  grid-column: 2 / -2;
  grid-row: 2 / -2;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${props =>
    props.rotated ? "rotate3d(0,1,0,180deg)" : "none"};
`

export const FlipCard = ({ rotated, index, children }) => (
<FlipCardStyles index={index}>
  <FlipCardInner rotated={rotated}>
    {children}
  </FlipCardInner>
</FlipCardStyles>);
