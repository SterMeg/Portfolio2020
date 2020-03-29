import React from "react"
import {useSiteMetadata} from "../hooks/useSiteMetadata"
import { Container } from "../utils/layout"
import { Scallop } from "./svg"
import AboutImage from "./about-image"
import styled from "styled-components"

const NameCard = styled.figure`
  grid-column: 2 / span 3;
  grid-row: 2 / span 2;
  box-shadow: -20.84px 21.58px 30px #b0b0b0;
  align-self: start;
  margin: 0;
  figcaption {
    text-align: center;
    padding: 50px;
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
      margin-bottom: 32px;
      a {
        font-weight: 400;
      }
    }
  }
`

const Button = styled.button`
  background: linear-gradient(to right, #f40e67 0%, #fccd11 100%);
  color: #fff;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 15px 50px;
  border-radius: 40px;
  &:hover {
    color: #fff;
  }
`

const AboutContainer = styled(Container)`
  grid-template-columns: 1fr repeat(8, minmax(17.5px, 127.5px)) 1fr;
  grid-template-rows: 69px 115px auto;
  padding: 150px 0;
  text-align: justify;
`

const AboutBlurb = styled.div`
  grid-column: 6 / span 4;
  grid-row: 3;
`
const H2 = styled.h2`
  font-size: 7.2rem;
  grid-column: 4;
  grid-row: 1 / span 2;
  line-height: 1;
  margin: 0;
  margin-left: 35%;
  z-index: 5;
`
 
const About = () => {
  const { contact } = useSiteMetadata()
  return (
    <AboutContainer>
      <H2>About Meghan</H2>
      <NameCard>
        <AboutImage />
        <figcaption>
          <h3>Meghan Sterling</h3>
          <h4>Full-Stack Developer</h4>
          <p>
            email: <a href={`mailto:${contact}`}>{contact}</a>
          </p>
          <Button as="a" href="#contact">Contact Me</Button>
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
          When I'm not coding, I enjoy practicing circus arts, reading and
          talking about comics, playing board games, and hanging out with my two
          dogs.
        </p>
        <p>
          I'm currently on a mission to reduce my emissions by replacing my car
          with an e-bike, and am looking for remote opportunities so that I can
          achieve that goal.
        </p>
      </AboutBlurb>
      <Scallop flip id={3} />
    </AboutContainer>
  )
}


export default About