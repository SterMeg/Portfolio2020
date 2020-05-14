import styled, { css } from 'styled-components'
import {lightTheme, breakpoints} from "../../utils"

export const SrOnly = styled.span`
  &:not(:focus):not(:active) {
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
  }
`

export const SectionGrid = styled.section`
  /* Only 2 colors used, prop to alternate instead of sending color?  */
  background: ${props => props.background || lightTheme.backgroundColor};
  display: grid;
  grid-template-columns:
    calc(50vw - ((var(--max-width) / 2)))
    repeat(12, 1fr)
    calc(50vw - ((var(--max-width) / 2)));
    grid-column-gap: var(--gutter);
  padding: var(--lgPad) 0;
  position: relative;
`

export const listUnset = css`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const LinkList = styled.ul`
  ${listUnset}
  a {
    color: inherit;
    display: block;
    font-size: 1.3rem;
    font-weight: 700;
    padding: 5px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    @media (min-width: ${breakpoints.sm}) {
      padding: 10px;
    }
    &:hover, &:focus {
      background: linear-gradient(to right, #f40e67 0%, #fccd11);
      color: ${lightTheme.textColorInverted};
    }
  }
`