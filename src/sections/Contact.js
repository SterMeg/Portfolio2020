import React, { createRef } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { TextLink, BaseHeading, SectionGrid, GradientButton } from "../components/styled"
import { lightTheme, breakpoints } from "../utils";
import { GradientMask, Scallop } from "../components/svg"

const ContactForm = styled.form`
    display: grid;
    grid-column: 2 / -2;
    grid-gap: 15px;
    grid-auto-rows: 75px;
    @media (min-width: ${breakpoints.md}) {
        grid-template-columns: 1fr 2fr;
    }
    textarea {
        width: calc(100% - 20px);
        height: calc(100% - 20px);
    }
`;

export const InputGroupStyle = styled.label`
    position: relative;
    border-radius: 4px;
    &:last-of-type {
        grid-row: span 3;
    }
    @media (min-width: ${breakpoints.md}) {
        grid-column: 1;
        &:last-of-type {
        grid-column: 2;
        grid-row: 1 / span 3;
        }
    }
    display: grid;
    text-transform: capitalize;
    &::before {
                    content: '';
                    border-radius: 4px;
                    position: absolute;
                    top: 2px;
                    bottom: 2px;
                    left: 2px;
                    right: 2px;
                    background: #fff;
                }
    span {
        border-radius: 4px;
        position: absolute;
        background: ${lightTheme.textColorInverted};
        top: 0;
        left: 10px;
        transform: translateY(-50%);
        padding: 0 5px;
        font-size: 1.4rem;
    }
    > input, textarea {
        background: ${lightTheme.accentColor};
        border: none;
        display: block;
        padding: 15px;
        margin: 10px;
        border-radius: inherit;
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        z-index: 2;
        resize: none;
    } 
`;

const ContactTitle = styled(BaseHeading)`
    grid-column: 2 / -2; 
    text-align: center; 
    margin-bottom: 20px;
`

const SubmitButton = styled(GradientButton)`
    box-shadow: -14px 14px 20px 0px rgba(176, 176, 176, 0.5);
    justify-self: center; 
    grid-column: 1 / -1;
    transition: box-shadow 0.2s ease-in;
    &:hover, &:focus {
        box-shadow: -6px 6px 5px 0px rgba(98, 98, 98, 0.2);
    }
`


const InputGroup = ({name, type}) => {
    const ref = createRef()
    const handleFocus = () => {
        gsap.to(ref.current, {
            duration: 0.5,
            attr: {offset: 1},
            ease: "powerOne.in"
        })
    }

    const handleBlur = () => {
        gsap.to(ref.current, {
            duration: 0.5,
            attr: { offset: 0 },
            ease: "powerOne.out"
          })
    }

    return (
        <InputGroupStyle>
            <GradientMask 
                ref={ref}
                css={`
                    border-radius: 4px;
                    grid-row: 1 / -1;
                    grid-column: 1 / -1; 
                    width: 100%; 
                    height: 100%;
                `} />
            <span>{name}</span>
            {type === "textarea" ? 
            <textarea onFocus={handleFocus} onBlur={handleBlur} name={name} id={name} ></textarea> :
            <input onFocus={handleFocus} onBlur={handleBlur} type={type} name={name} id={name}></input>
            }
        </InputGroupStyle>
    )
}



export const Contact = () => {
    const { contact } = useSiteMetadata()
    return (
        <SectionGrid
            id="contact"
            css={`
            align-content: center;
            background: linear-gradient(
                to bottom,
                #fff 90%,
                #f9f9ff 95%
            );
            grid-column: 2 / -2; 
            grid-row-gap: 20px;  
            min-height: 100vh; 
            `}>
            <ContactTitle as="h2">
                Contact Me
            </ContactTitle>
            <TextLink href={`mailto:${contact}`} css={`grid-column: 2 / -2; text-align: center;`}>{contact}</TextLink>
            <p css={`grid-column: 2 / -2; text-align: center; text-transform: uppercase; margin: 0;`}>-or-</p>
            <ContactForm name="contact" netlify>
                <InputGroup name="name" type="text" />
                <InputGroup name="email" type="email" />
                <InputGroup name="subject" type="text"/>
                <InputGroup name="message" type="textarea" />
                <SubmitButton type="submit" css={`margin-top: 20px;`}>Send Message</SubmitButton>
            </ContactForm>
            <Scallop flip/>
        </SectionGrid>
    )
}
