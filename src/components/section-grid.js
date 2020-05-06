import styled from 'styled-components'
import { lightTheme } from "../utils"

const SectionGrid = styled.section`
  /* Only 2 colors used, prop to alternate instead of sending color?  */
  background: ${props => props.background || lightTheme.backgroundColor};
  display: grid;
  grid-template-columns:
    calc(50vw - ((var(--max-width) / 2)))
    repeat(12, 1fr)
    calc(50vw - ((var(--max-width) / 2)));
    grid-column-gap: var(--gutter);
  padding: 150px 0;
` 

export default SectionGrid;