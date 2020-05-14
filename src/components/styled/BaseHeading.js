import styled from 'styled-components'

export const BaseHeading = styled.h1`
  font-size: ${({ as, looksLike }) => looksLike ? `var(--${looksLike})` : `var(--${as})`};
  margin: 0;
  margin-bottom: ${({ margin }) => margin || 0};
  font-weight: ${({as}) => (as === "h1" || "h2") ? 900 : 700};
  line-height: 1;
`