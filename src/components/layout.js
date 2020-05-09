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
import { lightTheme, primaryFont, typeScale, breakpoints } from "../utils"


import Header from "./header"

const GlobalStyle = createGlobalStyle`
  html {
    --max-width: 114rem;
    --gutter: 2rem;
    --wrapper: calc(100vw - ( 2 * var(--gutter)));
    --allColumns: 14;
    --noOfColumns: 12;
    --noOfGutters: 11;
    --ratioA: 1;
    --ratioB: 1;
    --factor: calc(var(--ratioB) / var(--ratioA));
    --rowHeight: calc(( (var(--wrapper) - (var(--noOfGutters) * var(--gutter))) / var(--noOfColumns)) * var(--factor));

    @media (min-width: 1140px) {
      --wrapper: 1140px;
      --noOfGutters: 13;
    }

    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: ${lightTheme.backgroundColor};
    color: ${lightTheme.textColor};
    font-family: ${primaryFont};
    font-size: ${typeScale.paragraph};
    line-height: 1.6;
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

  return (
    <>
      <GlobalStyle theme={theme}/>
      <Normalize />
      <PageLayout>
        <Header 
          siteTitle={title}
          theme={theme}
          setTheme={setTheme}
        />
        <main>{children}</main>
        <Footer>
          © Meghan Sterling {new Date().getFullYear()} | Photos by <a href="https://pamlau.com">Pam Lau</a>
        </Footer>
      </PageLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
