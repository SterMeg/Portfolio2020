/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { Normalize } from "styled-normalize"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { lightTheme, primaryFont, typeScale } from "../utils"


import Header from "./header"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    background: ${lightTheme.backgroundColor};
    color: ${lightTheme.textColor};
    font-family: ${primaryFont};
    font-size: ${typeScale.paragraph}
  }

  a {
    text-decoration: none;
  }
`

const PageLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
`

const Footer = styled.footer`
  align-self: end;
  text-align: center;
  padding: 16px 0;
`
const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const { title } = useSiteMetadata()

  const siteLinks = [
    'About',
    'Skills',
    'Projects',
    'Contact'
  ]

  return (
    <>
      <GlobalStyle theme={theme}/>
      <Normalize />
      <PageLayout>
        <Header 
          siteTitle={title} 
          siteLinks={siteLinks}
          theme={theme}
          setTheme={setTheme}
        />
        <main>{children}</main>
        <Footer>
          © Meghan Sterling {new Date().getFullYear()} | Photos by <a href="https://pamlau.com" target="_blank" rel="noopener noreffer">Pam Lau</a>
        </Footer>
      </PageLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
