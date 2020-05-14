import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { lightTheme, breakpoints } from "../utils"
import { BaseHeading, SectionGrid, listUnset, GradientButton, SrOnly } from "./styled"



const Description = styled.div`
  grid-row: span 2;
  align-self: center;
`
const ImageBorder = styled.a`
  align-self: start;
  border: 6px solid white;
  box-shadow: -5.84px 6.58px 20px #b0b0b0, inset 0 3px 3px #b0b0b0;
  grid-row: 1;
  @media (min-width: ${breakpoints.md}) {
    grid-row: auto;
  }
`
const ButtonGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  a {
    transition: transform 0.5s ease;
  }
  a:last-of-type {
    justify-self: end;
    transform: rotate(5deg);
    &:hover {
      transform: rotate(6deg) translateY(3px);
    }
  }
  a:first-of-type {
    justify-self: start;
    transform: rotate(-5deg);
    &:hover {
      transform: rotate(-6deg) translateY(3px);
    }
  }
`

const ProjectsContainer = styled(SectionGrid)`
  grid-row-gap: 20px;
  position: relative;
  article {
    grid-column: 2 / -2;
    max-width: 500px;
    justify-self: center;
    &:nth-of-type(3) {
      background: #fff;
      box-shadow: -5.84px 6.58px 20px #b0b0b0;
    }
    @media (min-width: ${breakpoints.md}) {
      max-width: unset;
    }
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
      &:nth-of-type(even) > ${Description} {
        grid-column: 2;
        grid-row: 1 / span 2;
      }
      &:nth-of-type(3) > ${ButtonGrid} {
        place-self: center;
        grid-row: span 2;
      }
    }
    @media (min-width: ${breakpoints.lg}) {
      &:first-of-type {
        grid-column: 2 / span 4;
        grid-row: 2 / span 2;
        grid-template-columns: auto;
        ${Description} {
          grid-row: 2;
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
        grid-row: span 1;
      }
    }
  }
`

const ProjectsHeading = styled(BaseHeading)`
  grid-column: 2 / -2;
  margin-bottom: 20px;
  text-align: center;
`

const ProjectContainer = styled.div`
  place-content: center;
  background: #f9f9ff;
  display: grid;
  grid-column: 2 / 6;
  grid-row: span 2;
  padding: 25px;
  @media (min-width: ${breakpoints.sm}) {
    padding: 45px;
  }
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
  grid-gap: 40px;
  .gatsby-image-wrapper {
    margin: 5px;
  }
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
    ) 40;
  flex-wrap: wrap;
  padding: 5px;
  li {
    padding-left: 10px;
    padding-right: 10px;
  }
`

function createDescription(project) {
  return {__html: project.description}
}

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
          <Description>
            <ProjectHeader>
              <BaseHeading as="h3" margin="1rem">
                {project.name}
              </BaseHeading>
              <p>{project.type}</p>
              <SkillList>
                {project.skills.map(skill => (
                  <li key={project.name + skill}>{skill}</li>
                ))}
              </SkillList>
            </ProjectHeader>
            <p dangerouslySetInnerHTML={createDescription(project)}/>
          </Description>
          {project.img && (
            <ImageBorder href={project.url}>
              <Img alt={project.name} fluid={project.img.childImageSharp.fluid} />
              <SrOnly>{project.name}</SrOnly>
            </ImageBorder>
          )}
          <ButtonGrid>
            {project.url && (
              <GradientButton as="a" href={project.url}>
                View Live
              </GradientButton>
            )}
            {project.github && (
              <GradientButton as="a" href={project.github}>
                View Code
              </GradientButton>
            )}
          </ButtonGrid>
        </ProjectContainer>
      ))}
    </ProjectsContainer>
  )
}

export default Projects