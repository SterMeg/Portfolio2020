import React from "react"
import { SectionGrid } from "./styled"
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
  grid-column: 2 / -2;
  padding: 10px 0 0;
  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: 65px 1fr;
  }
`
const HomeLink = styled(Link)`
  width: 10vw;
  transform: rotate(-20deg);
  @media (min-width: ${breakpoints.sm}) {
    transform: none;
    width: 65px;
  }
`

const Header = ({ siteLinks }) => (
  <HeaderContainer as="header">
    <Nav>
      <HomeLink to="/">
        <Logo/>
      </HomeLink>
      <SiteLinks 
        links={siteLinks}
      />
    </Nav>
    <Scallop/>
  </HeaderContainer>
)

export default Header
