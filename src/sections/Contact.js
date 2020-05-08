import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { TextLink, BaseHeading, SectionGrid } from "../components/styled"

export const Contact = () => {
    const { contact } = useSiteMetadata()
    return (
        <SectionGrid>
            <BaseHeading as="h2">
                Contact Me
            </BaseHeading>
            <TextLink href={`mailto:${contact}`}>{contact}</TextLink>
        </SectionGrid>
    )
}
