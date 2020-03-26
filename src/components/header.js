import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, GradientText, LinkList } from "../utils/layout"
import styled from 'styled-components'

const Swoop = styled.svg`
  width: 100%;
  height: 40px;
  position: absolute;
  top: calc(100% - 20px);
  grid-column: 1 / -1;
`
const HeaderContainer = styled(Container)`
  position: fixed;
  width: 100%;
`

const Nav = styled.nav`
  align-items: center;
  display: flex;
  grid-column: 2 / span 4;
  justify-content: space-between;
  padding: 10px 0px 20px;
`
const Logo = styled(Link)`
  padding: 10px;
  font-size: 2rem;
`

const Header = ({ siteLinks }) => (
  <HeaderContainer as="header">
    <Nav>
      <Logo to="/">
        <GradientText>mS</GradientText>
      </Logo>
      <LinkList>
        {siteLinks.map(link => (
          <li key={link.toLowerCase()}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </LinkList>
    </Nav>
    <Swoop>
      <pattern
        id="swoop"
        x="0"
        y="0"
        width="100"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path d="M 0,20 Q 25,40, 50,20" fill="#fff"></path>
        <path d="M 50,20 Q 75,0 100,20" fill="#F9F9FF"></path>
      </pattern>
      <rect x="0" y="0" width="100%" height="40" fill="url(#swoop)"></rect>
    </Swoop>
    {/* <label>
      Light
      <input
        type="radio"
        name="theme"
        value="light"
        checked={theme === "light"}
        onChange={e => setTheme(e.target.value)}
      />
    </label>
    <label>
      Dark
      <input
        type="radio"
        name="theme"
        value="dark"
        checked={theme === "dark"}
        onChange={e => setTheme(e.target.value)}
      />
    </label> */}
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteLinks: PropTypes.array
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
