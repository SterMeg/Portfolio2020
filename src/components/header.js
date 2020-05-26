import React from "react"
import { SectionGrid, SrOnly } from "./styled"
import { Logo, Scallop } from './svg'
import styled from 'styled-components'
import { Link } from "gatsby"
import SiteLinks from "./site-links"
import { breakpoints } from "../utils"

const HeaderContainer = styled(SectionGrid)`
  padding: 0;
  position: fixed;
  width: 100%;
  z-index: 10;
`
const Nav = styled.nav`
  align-items: center;
  display: grid;
  grid-column: 1 / -1;
  padding: 10px 0 0;
  grid-template-columns: 45px 1fr;
  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: 65px 1fr;
    grid-column: 2 / -2;
  }
`
const HomeLink = styled(Link)`
  z-index: 20;
  transform: rotate(90deg) translateX(25%);
  @media (min-width: ${breakpoints.sm}) {
    transform: none;
  }
`

const Header = ({ siteLinks }) => (
  <HeaderContainer as="header">
    <Nav>
      <HomeLink to="/">
        <Logo/>
        <SrOnly>Home</SrOnly>
      </HomeLink>
      <SiteLinks 
        links={siteLinks}
      />
    </Nav>
    <Scallop/>
  </HeaderContainer>
)

export default Header
