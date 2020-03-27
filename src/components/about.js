import React from "react"
import {useSiteMetadata} from "../hooks/useSiteMetadata"
import { Container } from "../utils/layout"
import { Scallop } from "./svg"

const About = () => {
  const { contact } = useSiteMetadata()
  return (
    <Container>
      <h2>About Meghan</h2>
      <figure>
        <figcaption>
          <h3>Meghan Sterling</h3>
          <h4>Full-Stack Developer</h4>
        </figcaption>
      </figure>
      <div>
        <p>
          I'm a full-stack developer who is passionate about creative
          problem-solving and asking questions. I read and write documentation with
          enthusiasm, and am always ready to learn something new. I am fascinated by
          the logical process of programming regardless of framework or language. I
          love puzzles and coming up with creative solutions to problems, so I face
          challenging work with drive and excitement. I have a background in English
          Literature, which has given me an eye for syntax and the ability to
          perform self-directed research when encountering unfamiliar code.
        </p>
        <p>
          When I'm not coding, I enjoy practicing circus arts, reading and talking
          about comics, playing board games, and hanging out with my two dogs.
        </p>
        <p>
          I'm currently on a mission to reduce my emissions by replacing my car with
          an e-bike, and am looking for remote opportunities so that I can achieve
          that goal.
        </p>
      </div>
      <p>
        <a href={`mailto:${contact}`}>{contact}</a>
      </p>
      <Scallop flip id={3}/>
    </Container>
)
}


export default About