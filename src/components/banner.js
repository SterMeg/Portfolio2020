import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMediumM, faTwitter, faCodepen, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import BannerImage from "./banner-image"
import { Container, GradientText, LinkList } from "../utils/layout"
import { Scallop, Circles, Shapes } from "./svg"
import { lightTheme } from "../utils"
import styled from "styled-components"

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
  align-self: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 4;
  @media (min-width: 550px) {
    grid-column: 2 / span 2;
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
  }
  &::before {
    border-radius: 50% 50% 50% 0;
    content: "Hello";
    padding: 30px 15px;
    right: -13%;
    top: -35%;
  }
  &::after {
    border: 2px solid #fff;
    border-radius: 50% 50% 0 50%;
    content: "I am";
    padding: 20px 10px;
    right: -20%;
    top: -2%;
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

const BannerContainer = styled(Container)`
  min-height: 100vh;
  /* grid-template-rows: 1fr max-content 1fr; */
`

const ImageContainer = styled.div`
  display: none;
  @media (min-width: 550px) {
    display: block;
    grid-column: 4 / span 2;
    grid-row: 1;
    align-self: end;
    position: relative;
    max-width: 418px;
    left: 50%;
    transform: translateX(-50%)
    /* > div {
      max-width: 418px;
      margin: auto;
    } */
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

const Banner = () => (
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
            <a href={link.url}><FontAwesomeIcon icon={linkIcon(link.name.toLowerCase())}/></a>
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

export default Banner;