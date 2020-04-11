import styled from 'styled-components'
import { typeScale } from "../utils"

const BaseHeading = styled.h1`
  font-size: ${({ as }) => typeScale[as]};
  margin: 0;
  margin-bottom: ${({ margin }) => margin || 0};
  font-weight: 700;
`

export default BaseHeading;