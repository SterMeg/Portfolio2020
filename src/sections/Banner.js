import React from 'react'
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMediumM, faTwitter, faCodepen, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Scallop, Circles, Shapes } from "../components/svg"
import { lightTheme, breakpoints } from "../utils"
import BannerImage from "../components/BannerImage"
import { GradientText, LinkList, SectionGrid } from "../components/styled"


const socialLinks = [
  { name: "Github", url: "https://github.com/SterMeg" },
  { name: "Codepen", url: "https://codepen.io/megster/" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/meghan-sterling-237559125/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/meghasomething",
  },
  {
    name: "Medium",
    url: "https://medium.com/@sterling.meghan",
  },
]

const NameCard = styled.div`
  grid-row-start: 1;
  align-self: end;
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 12;
  text-align: center;
  padding-bottom: 100px;
  z-index: 1;
  @media (min-width: ${breakpoints.md}) {
    padding-bottom: 0;
    align-self: center;
    align-items: flex-start;
    grid-column: 2 / span 7;
    text-align: left;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-column: 2 / span 6;
  }
  h3 {
    text-transform: uppercase;
  }
`

const H1 = styled(GradientText)`
  font-size: 8rem;
  line-height: 1.1;
  margin: 0;
  position: relative;
  &::before,
  &::after {
    display: block;
    background: ${lightTheme.textColor};
    color: ${lightTheme.textColorInverted};
    font-weight: 600;
    font-size: 2rem;
    position: absolute;
    -webkit-text-fill-color: #fff;
    @media (min-width: ${breakpoints.sm}) {
    }
  }
  &::before {
    border-radius: 50% 50% 50% 0;
    content: "Hello";
    padding: 30px 15px;
    left: 1%;
    top: -46%;
    @media (min-width: ${breakpoints.sm}) {
      left: unset;
      right: -13%;
      top: -35%;
    }
  }
  &::after {
    border: 2px solid #fff;
    border-radius: 50% 50% 0 50%;
    content: "I am";
    padding: 20px 10px;
    left: 20%;
    top: -25%;
    @media (min-width: ${breakpoints.sm}) {
      left: unset;
      right: -20%;
      top: -2%;
    }
  }
`

const ExternalLinks = styled(LinkList)`
  a {
    background: #fff;
    cursor: pointer;
    margin-right: 2px;
    width: 50px;
    height: 50px;
    padding: 0;
    display: grid;
    place-content: center;
  }
`

const BannerContainer = styled(SectionGrid)`
  min-height: 100vh;
  padding: 0;
`

const ImageContainer = styled.div`
  padding-top: 100px;
  grid-column: 2 / -2;
  grid-row: 1;
  position: relative;
  .gatsby-image-wrapper {
    display: none;
  }
  @media (min-width: ${breakpoints.md}) {
    padding-top: 0;
    grid-column: 9 / span 5;
    align-self: end;
    max-width: 418px;
    left: 50%;
    transform: translateX(-50%);
    .gatsby-image-wrapper {
      display: block;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-column: 8 / span 6;
  }
`

const linkIcon = linkName => {
  const linkMap = {
    'github': faGithub,
    'codepen': faCodepen,
    'linkedin': faLinkedinIn,
    'twitter': faTwitter,
    'medium': faMediumM
  }

  return linkMap[linkName];
}

export const Banner = () => (
  <BannerContainer background={lightTheme.accentColor}>
    <NameCard>
      <H1 as="h1">
        Meghan<br/>
        Sterling
      </H1>
      <h3>Full-Stack Developer</h3>
      <ExternalLinks>
        {socialLinks.map(link => (
          <li key={link.name}>
            <a href={link.url}><FontAwesomeIcon width="13" height="13" icon={linkIcon(link.name.toLowerCase())}/></a>
          </li>
        ))}
      </ExternalLinks>
    </NameCard>
    <ImageContainer>
      <Circles />
      <Shapes />
      <BannerImage />
    </ImageContainer>
    <Scallop flip id={2}/>
  </BannerContainer>
)