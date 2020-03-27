import React from "react"

import Layout from "../components/layout"
import Banner from "../components/banner"
import About from "../components/about"
import SEO from "../components/seo"
import { lightTheme } from "../utils"

// const skills = {
//   frontend: {
//     skills: ["HTML5", "CSS3", "JavaScript", "Typescript", "React", "Vue"],
//     tools: ["Webpack", "VS Code", "Git / GitHub"],
//     more: ["Jest", "Sass", "CSS-in-JS", "CSS Grid", "CSS Animation"],
//   },
//   backend: {
//     skills: ["Node.js", "Ruby on Rails", "PHP"],
//     tools: ["Express", "Fast JSON:API"],
//     more: ["PostgreSQL", "MongoDB", "JSON API"],
//   },
// }

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner />
      <About />
      <section style={{background: lightTheme.accentColor}}></section>
    </Layout>
  )
}


export default IndexPage
