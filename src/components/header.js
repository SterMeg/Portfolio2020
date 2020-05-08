import React from "react"
import { SectionGrid } from "./styled"
import { Logo, Scallop } from './svg'
import styled from 'styled-components'
import { Link } from "gatsby"
import SiteLinks from "./site-links"

const HeaderContainer = styled(SectionGrid)`
  padding: 0;
  position: fixed;
  width: 100%;
  z-index: 10;
`
const Nav = styled.nav`
  align-items: center;
  display: flex;
  grid-column: 2 / -2;
  justify-content: space-between;
  padding: 10px 0 0;
`
const HomeLink = styled(Link)`
  width: 65px;
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
    <Scallop id={1}/>
  </HeaderContainer>
)

export default Header
