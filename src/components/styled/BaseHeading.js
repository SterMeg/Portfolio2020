import styled from 'styled-components'
import { typeScale } from "../../utils"

export const BaseHeading = styled.h1`
  font-size: ${({ as }) => typeScale[as]};
  margin: 0;
  margin-bottom: ${({ margin }) => margin || 0};
  font-weight: 700;
  line-height: 1;
`