import React from "react"

import Layout from "../components/layout"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import { BottomBanner, Banner } from "../sections"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <BottomBanner />
    </Layout>
  )
}


export default IndexPage
