import React from "react"

import Layout from "../components/layout"
import Banner from "../components/Banner"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner />
      <About />
      <Skills />
      <Projects />
    </Layout>
  )
}


export default IndexPage
