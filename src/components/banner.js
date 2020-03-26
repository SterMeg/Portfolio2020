import React from 'react'
import Image from "../components/image"
import { Container, GradientText, LinkList } from "../utils/layout"
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
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 2;
  grid-row: 2;
  h3 {
    text-transform: uppercase;
  }
`

const H1 = styled(GradientText)`
  font-size: 8rem;
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

`

const BannerContainer = styled(Container)`
  min-height: 100vh;
  grid-template-rows: 1fr max-content 1fr;
`

const ImageContainer = styled.div`
  grid-row: 2 / span 2;
  grid-column: 4 / span 2;
  align-self: end;
  > div {
    max-width: 375px;
    margin: auto;
  }
`

const Banner = () => (
  <BannerContainer background={lightTheme.accentColor}>
    <NameCard>
      <H1 as="h1">
        Meghan<br/>
        Sterling
      </H1>
      <h3>Full-Stack Developer</h3>
      {/* Social buttons */}
      <ExternalLinks>
        {socialLinks.map(link => (
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ExternalLinks>
    </NameCard>
    <ImageContainer>
      <Image />
    </ImageContainer>
  </BannerContainer>
)

export default Banner;