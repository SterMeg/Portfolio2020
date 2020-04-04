import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Heading2, Container } from "../utils/layout"

const ProjectsContainer = styled(Container)`
  grid-gap: 60px;
  padding: 150px 0;
`

const ProjectsHeading = styled(Heading2)`
  grid-column: 2 / 6;
  text-align: center;
`

const ProjectContainer = styled.div`
  background: #f9f9ff;
  display: grid;
  grid-column: 2 / 6;
  padding: 60px;
  grid-template-columns: repeat(auto-fit, minmax(300px, calc(50% - 40px)));
  grid-auto-flow: dense;
  grid-gap: 40px;
  &:nth-of-type(even) > a {
    grid-column: 2 / span 1;
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
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  
  return (
    <ProjectsContainer id="projects">
      <ProjectsHeading>My Work</ProjectsHeading>
      {data.allProjectsJson.nodes.map(project => (
        <ProjectContainer key={project.name}>
          <a href={project.url}><Img fluid={project.img.childImageSharp.fluid}/></a>
          <div>  
            <h4>{project.name}</h4>
            <h3>{project.type}</h3>
            <ul>{project.skills.map(skill => (
              <li key={skill.name}>{skill}</li>
            ))}</ul>
            <p>{project.description}</p>
            <div>
              {project.url && <a href={project.url}>View Live</a>}
              {project.github && <a href={project.github}>View Code</a>}
            </div>
          </div>
        </ProjectContainer>
      ))}
    </ProjectsContainer>
  )
}

export default Projects