import styled from 'styled-components'
import {lightTheme} from "../utils"

export const Container = styled.section`
  background: ${props => props.background || lightTheme.backgroundColor};
  display: grid;
  grid-template-columns: 1fr repeat(4, minmax(55px, 275px)) 1fr;
  grid-column-gap: 20px;
`

export const GradientText = styled.span`
  font-weight: 900;
  background: -webkit-linear-gradient(0deg, #f40e67 0%, #fccd11 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const LinkList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
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