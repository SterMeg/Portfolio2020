import React, {Fragment} from "react"
import styled, { keyframes } from "styled-components"
import { breakpoints } from "../utils"

//Grid positioning should be passed in
const ToggleStyle = styled.fieldset`
  border: none;
  margin: 0;
  grid-column: 2 / -2;
  top: calc(100vh - 62px);
  background: white;
  z-index: 5;
  text-align: center;
  padding: 10px 0;
  white-space: nowrap;
  position: sticky;
  @media (min-width: ${breakpoints.sm}) {
    position: static;
    text-align: left;
    transform: translateY(0);
    justify-self: end;
    grid-row: 5 / span 2;
    padding: 0;
    background: none;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-row: 5;
  }
  legend {
    font-size: 0.2rem;
    opacity: 0;
    position: absolute;
  }
`

const RadioInput = styled.input`
  opacity: 0;
  position: absolute;
  &:first-of-type:checked ~ label:first-of-type:after {
    background-color: #dddddd;
  }
  &:first-of-type:checked ~ label:first-of-type:before {
    transform: translateX(-3rem);
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
  text-transform: capitalize;
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
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    vertical-align: middle;
    width: 7rem;
  }
  &:first-of-type:before {
    background: linear-gradient(to right, #fccd11 0%, #f40e68 100%);
    border-radius: 5rem;
    position: absolute;
    height: calc(100% - 1.2rem);
    top: 0.6rem;
    right: 0.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 2;
    width: 3rem;
  }
  &:first-of-type:after {
    border: 1px solid #eee;
    background-color: #222;
    border-radius: 5rem;
    padding: 0.5rem;
    height: 100%;
    background-clip: content-box;
    transition: background-color 1s ease-in-out;
    margin: 0 1rem;
  }
`


const Toggle = ({ activeToggle, setActiveToggle, attributes }) => (
  <ToggleStyle>
    <legend>{attributes.legend}</legend>
    {attributes.inputs.map(input => (
      <Fragment key={input}>
        <RadioInput
          type="radio"
          name={attributes.name}
          value={input}
          id={input}
          checked={activeToggle === input}
          onChange={e => setActiveToggle(e.target.value)}
        />
        <RadioLabel htmlFor={input}>
          {input}
        </RadioLabel>
      </Fragment>
    ))}
  </ToggleStyle>
)

export default Toggle