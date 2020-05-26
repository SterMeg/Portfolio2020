import React from "react"
import Layout from "../components/layout"
import { BottomBanner, Banner, Contact, Skills, Projects, About } from "../sections"
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
      <Contact />
    </Layout>
  )
}


export default IndexPage
