import styled from "styled-components"
import {lightTheme} from "../utils"

export const TextLink = styled.a`
  color: inherit;
  &:hover {
    color: ${lightTheme.linkHover}
  }
`