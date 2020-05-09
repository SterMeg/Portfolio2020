import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { TextLink, BaseHeading, SectionGrid } from "../components/styled"

export const ContactForm = styled.form`
    display: grid;
    grid-column: 2 / -2;
    grid-gap: 10px;
    grid-template-columns: 1fr 3fr;
    > label {
        grid-column: 1;
        &:last-of-type {
            grid-column: 2;
            grid-row: 1;
        }
    }
    textarea {
        width: 100%;
        height: 100%;
    }
`;

export const Contact = () => {
    const { contact } = useSiteMetadata()
    return (
        <SectionGrid css={`grid-column: 2 / -2; min-height: 80vh;`}>
            <BaseHeading as="h2" css={`grid-column: 2 / -2; text-align: center;`}>
                Contact Me
            </BaseHeading>
            <TextLink href={`mailto:${contact}`} css={`grid-column: 2 / -2; text-align: center;`}>{contact}</TextLink>
            <p css={`grid-column: 2 / -2; text-align: center;`}>-or-</p>
            <ContactForm>
                <label htmlFor="">
                    Name
                    <input type="text"/>
                </label>
                <label htmlFor="">
                    Email Address
                    <input type="text"/>
                </label>
                <label htmlFor="">
                    Subject 
                    <input type="text"/>
                </label>
                <label htmlFor="">
                    Message
                    <textarea name="" id=""></textarea>
                </label>
            </ContactForm>
        </SectionGrid>
    )
}
