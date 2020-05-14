import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "meghan-about.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return <Img alt="Headshot of Meghan Sterling" fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default AboutImage
