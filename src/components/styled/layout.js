import styled, { css } from 'styled-components'
import {lightTheme} from "../../utils"

export const SectionGrid = styled.section`
  /* Only 2 colors used, prop to alternate instead of sending color?  */
  background: ${props => props.background || lightTheme.backgroundColor};
  display: grid;
  grid-template-columns:
    calc(50vw - ((var(--max-width) / 2)))
    repeat(12, 1fr)
    calc(50vw - ((var(--max-width) / 2)));
    grid-column-gap: var(--gutter);
  padding: 150px 0;
  position: relative;
` 

export const GradientText = styled.span`
  font-weight: 900;
  background: -webkit-linear-gradient(0deg, #f40e67 0%, #fccd11 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
    padding: 10px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
      background: linear-gradient(to right, #f40e67 0%, #fccd11);
      color: ${lightTheme.textColorInverted};
    }
  }
`