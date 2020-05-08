import React from "react"
import styled from "styled-components"
import { BaseHeading } from "./styled"
import { lightTheme } from "../utils"
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
      ? "rotate(-45deg)"
      : "rotate3d(0,1,0,180deg) rotate(-45deg)"};
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