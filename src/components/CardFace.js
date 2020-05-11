import React from "react"
import styled from "styled-components"
import { BaseHeading } from "./styled"
import { lightTheme, breakpoints } from "../utils"
import border from "../images/border.svg"

const ListTitle = styled(BaseHeading)`
  text-transform: uppercase;
  color: ${lightTheme.primaryColor};
`

const CardFaceStyle = styled.div`
  box-shadow: 0 0 20px #b0b0b0;
  background-color: #fff;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  margin: 20px;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: ${({ face }) =>
      face === "front"
        ? "rotate(0deg)"
        : "rotate3d(0,1,0,180deg)"};
  @media (min-width: ${breakpoints.sm}) {
    transform: ${({ face }) =>
      face === "front"
        ? "rotate(-45deg)"
        : "rotate3d(0,1,0,180deg) rotate(-45deg)"};
  }
  &:after {
    border: 4px solid #ff9400;
    border-image: url(${border});
    border-image-slice: 8;
    content: "";
    top: -2rem;
    bottom: -2rem;
    left: -2rem;
    right: -2rem;
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
    @media (min-width: ${breakpoints.sm}) {
      transform: rotate(45deg);
    }
  }
`

export const CardFace = ({ face = "front", list, title }) => (
  <CardFaceStyle face={face} key={title + face}>
    <ul>
      <ListTitle as="h3">{title}</ListTitle>
      {list.map(listItem => (
        <li key={listItem}>{listItem}</li>
      ))}
    </ul>
  </CardFaceStyle>
)