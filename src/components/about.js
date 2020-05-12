import React from "react"
import Typewriter from "typewriter-effect"
import styled from "styled-components"

import {useSiteMetadata} from "../hooks/useSiteMetadata"
import { Scallop, BikeOnPath } from "./svg"
import { SectionGrid, BaseHeading, GradientButton, TextLink } from "./styled"
import AboutImage from "./about-image"
import { breakpoints } from "../utils"

const typewriter = [
  "Full-Stack Developer",
  "Aerial Artist",
  "Enthusiastic Learner",
  "Coffee Conniseur",
  "Avid Googler",
  "Pug Lover",
  "Comic Book Fanatic",
  "Shower Singer"
]

const NameCard = styled.figure`
  box-shadow: -6.84px 3.58px 21px #b0b0b0;
  display: grid;
  grid-column: 2 / -2;
  grid-row: span 2;
  @media (min-width: ${breakpoints.sm}) {
    box-shadow: none;
    grid-template-columns: 2fr 0.25fr 2fr;
    grid-row: 2 / span 2;
    grid-template-rows: 115px auto 50px;
    .gatsby-image-wrapper {
      grid-row: 1 / span 2;
      grid-column: 1 / span 2;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    box-shadow: -20.84px 21.58px 30px #b0b0b0;
    grid-column: 2 / span 5;
  }
  align-self: start;
  margin: 0;
  figcaption {
    display: grid;
    align-content: center;
    justify-items: center;
    padding: 50px;
    text-align: center;
    @media (min-width: ${breakpoints.sm}) {
      box-shadow: -20.84px 21.58px 30px #b0b0b0;
      grid-row: 2 / span 2;
      grid-column: 2 / span 2;
      background: white;
      z-index: 1;
    }
    @media (min-width: ${breakpoints.lg}) {
      box-shadow: none;
      grid-column: 1;
      grid-row: auto;
    }
    h3 {
      text-transform: uppercase;
    }
    h3,
    h4,
    p {
      margin: 0;
    }
    h4 {
      font-weight: 400;
      margin-bottom: 30px;
    }
    p {
      font-weight: 700;
      margin: 32px 0;
      a {
        font-weight: 400;
      }
    }
  }
`

const AboutContainer = styled(SectionGrid)`
  grid-row-gap: 20px;
  grid-template-rows: 115px auto;
  position: relative;
  @media (min-width: ${breakpoints.sm}) {
    grid-template-rows: 69px 115px auto;
  }
  @media (min-width: ${breakpoints.lg}) {
    text-align: justify;
  }
`

const AboutBlurb = styled.div`
  grid-column: 2 / -2;
  @media (min-width: ${breakpoints.lg}) {
    grid-column: 8 / span 6;
    grid-row: 3;
  }
`
const AboutHeading = styled(BaseHeading)`
  grid-column: 2 / -2;
  text-align: right;
  transform: rotate(-8deg);
  z-index: 5;
  @media (min-width: ${breakpoints.sm}) {
    grid-column: 6 / -2;
    grid-row: 1 / span 2;
    text-align: left;
    transform: rotate(0);
  }
`
 
const About = () => {
  const { contact } = useSiteMetadata()
  return (
    <AboutContainer id="about">
      <AboutHeading as="h2">About<br></br>Meghan</AboutHeading>
      <NameCard>
        <AboutImage />
        <figcaption>
          <h3>Meghan Sterling</h3>
          <Typewriter 
            options={{
              strings: typewriter,
              autoStart: true,
              loop: true
            }}
          />
          <p>
            email: <TextLink href={`mailto:${contact}`}>{contact}</TextLink>
          </p>
          <GradientButton as="a" href="#contact">
            Contact Me
          </GradientButton>
        </figcaption>
      </NameCard>
      <AboutBlurb>
        <p>
          I'm a full-stack developer who is passionate about creative
          problem-solving and asking questions. I read and write documentation
          with enthusiasm, and am always ready to learn something new. I am
          fascinated by the logical process of programming regardless of
          framework or language. I love puzzles and coming up with creative
          solutions to problems, so I face challenging work with drive and
          excitement. I have a background in English Literature, which has given
          me an eye for syntax and the ability to perform self-directed research
          when encountering unfamiliar code.
        </p>
        <p>
          When I'm not coding, I enjoy practicing aerial arts, reading and
          talking about comics, playing board games, and hanging out with my two
          dogs.
        </p>
        <p>
          I'm on a mission to reduce my emissions by replacing my car
          with an e-bike, and am particularly interested in remote opportunities so that I can
          achieve that goal.
        </p>
        <BikeOnPath />
      </AboutBlurb>
      <Scallop />
    </AboutContainer>
  )
}


export default About