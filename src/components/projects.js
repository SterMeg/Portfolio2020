import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import BaseHeading from "./base-heading"
import { lightTheme } from "../utils"
import SectionGrid from "./section-grid"
import { listUnset } from "../utils/layout"
import { InvertedGradientButton } from "./Button"

const ProjectsContainer = styled(SectionGrid)`
  grid-row-gap: 20px;
  article {
    &:first-of-type {
      grid-column: 2 / span 4;
      grid-row: 2 / span 2;
      grid-template-columns: auto;
      a {
        order: -1;
      }
    }
    &:nth-of-type(2) {
      grid-row: 2;
      grid-column: 6 / span 8;
    }
    &:nth-of-type(3) {
      grid-row: 3;
      grid-column: 6 / span 4;
      grid-template-columns: auto;
      background: #fff;
      box-shadow: -5.84px 6.58px 20px #b0b0b0;
    }
    &:nth-of-type(4) {
      grid-row: 3 / span 2;
      grid-column: 10 / span 4;
      grid-template-columns: auto;
      a {
        order: -1;
      }
    }
    &:nth-of-type(5) {
      grid-column: 2 / span 8;
    }
  }
`

const ProjectsHeading = styled(BaseHeading)`
  grid-column: 2 / -2;
  text-align: center;
`

const ProjectContainer = styled.div`
  align-content: start;
  background: #f9f9ff;
  display: grid;
  grid-column: 2 / 6;
  padding: 45px;
  grid-template-columns: repeat(auto-fit, minmax(100px, calc(50% - 40px)));
  grid-gap: 40px;
  .gatsby-image-wrapper {
    margin: 5px;
  }
`

const ImageBorder = styled.a`
  border: 6px solid white;
  box-shadow: -5.84px 6.58px 20px #b0b0b0, inset 0 3px 3px #b0b0b0;
`

const ProjectHeader = styled.header`
  display: flex;
  flex-direction: column;
  h3,
  p {
    text-transform: uppercase;
  }
  h3 {
    color: ${lightTheme.primaryColor};
  }
  p {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
    order: -1;
  }
`

const SkillList = styled.ul`
  ${listUnset}
  align-self: flex-start;
  border-top: 2px solid ${lightTheme.secondaryColor};
  border-bottom: 2px solid ${lightTheme.secondaryColor};
  border-image: 
    linear-gradient(
      to right,
      ${lightTheme.secondaryColor},
      #ff9400 50%,
      ${lightTheme.primaryColor} 100%
    );
  border-image-slice: 1;
  flex-wrap: wrap;
  padding: 5px;
  li {
    padding-left: 10px;
    padding-right: 10px;
  }
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson(filter: { showOnPortfolio: { eq: true } }) {
        nodes {
          description
          github
          name
          skills
          type
          url
          img {
            childImageSharp {
              fluid(maxWidth: 510) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  
  return (
    <ProjectsContainer id="projects">
      <ProjectsHeading as="h2">My Work</ProjectsHeading>
      {data.allProjectsJson.nodes.map(project => (
        <ProjectContainer as="article" key={project.name}>
          <div>
            <ProjectHeader>
              <BaseHeading as="h3" margin="1rem">{project.name}</BaseHeading>
              <p>{project.type}</p>
              <SkillList>
                {project.skills.map(skill => (
                  <li key={project.name + skill}>{skill}</li>
                ))}
              </SkillList>
            </ProjectHeader>
            <p>{project.description}</p>
            <div>
              {project.url && <InvertedGradientButton as="a" href={project.url}>View Live</InvertedGradientButton>}
              {project.github && <InvertedGradientButton as="a" href={project.github}>View Code</InvertedGradientButton>}
            </div>
          </div>
          {project.img && (
            <ImageBorder href={project.url}>
              <Img fluid={project.img.childImageSharp.fluid} />
            </ImageBorder>
          )}
        </ProjectContainer>
      ))}
    </ProjectsContainer>
  )
}

export default Projects