import React from "react"
import Typewriter from "typewriter-effect"
import {useSiteMetadata} from "../hooks/useSiteMetadata"
import { Scallop } from "./svg"
import SectionGrid from './section-grid'
import BaseHeading from "./base-heading"
import AboutImage from "./about-image"
import styled from "styled-components"
import { GradientButton }  from "./Button"
import { TextLink } from "./TextLink"

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
  grid-column: 2 / span 5;
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

// const Button = styled.button`
//   background: linear-gradient(to right, #f40e67 0%, #fccd11 100%);
//   color: #fff;
//   display: inline-block;
//   font-size: 1.4rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   padding: 15px 50px;
//   border-radius: 40px;
//   &:hover {
//     color: #fff;
//   }
// `

const AboutContainer = styled(SectionGrid)`
  grid-template-rows: 69px 115px auto;
  position: relative;
  text-align: justify;
`

const AboutBlurb = styled.div`
  grid-column: 8 / span 6;
  grid-row: 3;
`
const AboutHeading = styled(BaseHeading)`
  grid-column: 6 / -2;
  grid-row: 1 / span 2;
  z-index: 5;
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
          When I'm not coding, I enjoy practicing circus arts, reading and
          talking about comics, playing board games, and hanging out with my two
          dogs.
        </p>
        <p>
          I'm on a mission to reduce my emissions by replacing my car
          with an e-bike, and am particularly interested in remote opportunities so that I can
          achieve that goal.
        </p>
        <svg
          viewBox="0 0 1219 138"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path
            d="M35.689 91.566s122.114 96.957 244.583 0c122.47-96.957 227.82 0 227.82 0m.32 0s122.114 96.957 244.582 0c122.473-96.957 218.01 0 218.01 0m.102 0s122.115 96.957 244.582 0"
            fill="none"
            stroke="#707070"
            strokeWidth="1.2809"
          />
          <g transform="matrix(.32922 0 0 .32922 5.14 45.47)" fill="none">
            <ellipse cx="98" cy="92.5" rx="98" ry="92.5" />
            <ellipse
              cx="98"
              cy="92.5"
              rx="93"
              ry="87.5"
              stroke="#020202"
              strokeWidth="10"
            />
          </g>
          <path
            d="M338.444 89.313l-1.878 2.615-9.661 13.468-57.687 86.132m-48.469 26.342l47.503-26.085"
            fill="none"
            stroke="#222"
            strokeWidth="20"
            strokeLinecap="round"
            transform="matrix(.32922 0 0 .32922 5.14 4.536)"
          />
          <path
            d="M0 0l44 139"
            fill="none"
            stroke="#222"
            strokeWidth="10"
            transform="matrix(.32922 0 0 .32922 63.248 28.186)"
          />
          <path
            d="M73.788 23.998c1.95.027 2.245 2.82.343 3.253l-18.663 4.245a1.655 1.655 0 01-2.004-1.433l-.475-4.5a1.655 1.655 0 011.66-1.82l19.14.255z"
            fill="#222"
            fillRule="nonzero"
          />
          <path
            d="M72.637 78.098L43.8 75.311c-2.054-.2-1.948-3.231.115-3.284l35.808-.952h.1c.262.01.509.082.726.201.53-.084 1.075-.127 1.63-.127 5.45 0 9.876 4.204 9.876 9.382 0 5.179-4.425 9.383-9.876 9.383-5.45 0-9.877-4.204-9.877-9.383 0-.841.117-1.657.336-2.433z"
            fill="#222"
          />
          <ellipse
            cx="17"
            cy="17.5"
            rx="17"
            ry="17.5"
            fill="#222"
            transform="matrix(.32922 0 0 .32922 31.808 71.149)"
          />
          <g transform="matrix(.32922 0 0 .32922 5.14 45.47)" fill="none">
            <ellipse cx="98" cy="92.5" rx="98" ry="92.5" />
            <ellipse
              cx="98"
              cy="92.5"
              rx="95.5"
              ry="90"
              stroke="#222"
              strokeWidth="5"
            />
          </g>
          <path
            d="M0 0l21.718 57.646 6 15.917L66 184"
            fill="none"
            stroke="#222"
            strokeWidth="10"
            transform="matrix(.32922 0 0 .32922 113.29 18.31)"
          />
          <path
            d="M191.5 129.837l-101 91m114 10l-114-5"
            fill="none"
            stroke="#222"
            strokeWidth="5"
            transform="matrix(.32922 0 0 .32922 5.14 4.536)"
          />
          <path
            d="M107.5-4.758C105.11-4.671 95.345.278 86.919.33c-9.5.059-26.5 0-26.5 0L14.47.027C-.693-.073-4.34 16.531-4.34 16.531"
            fill="none"
            stroke="#222"
            strokeWidth="5"
            strokeLinecap="round"
            transform="matrix(.32922 0 0 .32922 15.686 40.886)"
          />
          <path
            d="M19 0L0 104"
            fill="none"
            stroke="#222"
            strokeWidth="3"
            transform="matrix(.32922 0 0 .32922 36.91 41.684)"
          />
          <path
            d="M0 0l61 86"
            fill="none"
            stroke="#222"
            strokeWidth="3"
            strokeLinecap="round"
            transform="matrix(.32922 0 0 .32922 14.853 45.634)"
          />
          <path
            d="M17 0L0 20"
            fill="none"
            stroke="#222"
            strokeWidth="10"
            strokeLinecap="round"
            transform="matrix(.32922 0 0 .32922 113.29 11.725)"
          />
          <path
            d="M0 46L79 0"
            fill="none"
            stroke="#222"
            strokeWidth="10"
            strokeLinecap="round"
            transform="matrix(.32922 0 0 .32922 101.437 6.786)"
          />
          <g transform="matrix(.32922 0 0 .32922 100.614 45.47)" fill="none">
            <ellipse cx="98" cy="92.5" rx="98" ry="92.5" />
            <ellipse
              cx="98"
              cy="92.5"
              rx="93"
              ry="87.5"
              stroke="#222"
              strokeWidth="10"
            />
          </g>
          <ellipse
            cx="17"
            cy="17.5"
            rx="17"
            ry="17.5"
            fill="#222"
            transform="matrix(.32922 0 0 .32922 127.61 71.149)"
          />
          <path
            d="M108.205 43.831a3.623 3.623 0 00-.977-5.027 3.623 3.623 0 00-5.028.977l-8.1 12.01a3.623 3.623 0 00.977 5.027 3.623 3.623 0 005.028-.978l8.1-12.009z"
            fill="#222"
          />
          <g>
            <path
              d="M107.904 35.336c.874-.4 1.91-.214 2.59.466.68.679.866 1.716.465 2.59l-1.156 2.521a2.303 2.303 0 01-.465.668 2.316 2.316 0 01-3.258 0l-1.366-1.365a2.316 2.316 0 010-3.26c.194-.193.42-.35.67-.464l2.52-1.156z"
              fill="#222"
              fillRule="nonzero"
            />
          </g>
          <g>
            <path
              d="M93.042 96.005c0-.818-.664-1.482-1.481-1.482h-7.902a1.482 1.482 0 000 2.963h7.902c.817 0 1.481-.664 1.481-1.481z"
              fill="#222"
            />
            <path
              d="M0 0l12 25"
              fill="#222"
              fillRule="nonzero"
              stroke="#222"
              strokeWidth="8"
              transform="matrix(.32922 0 0 .32922 83.989 87.774)"
            />
          </g>
        </svg>
      </AboutBlurb>
      <Scallop id={3} />
    </AboutContainer>
  )
}


export default About