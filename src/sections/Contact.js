import React from "react"
import { TextLink, BaseHeading, SectionGrid } from "../components/styled"

export const Contact = () => (
    <SectionGrid>
        <BaseHeading as="h2">
            Contact Me
        </BaseHeading>
        <TextLink href="mailto:hi@meghansterling.ca">
            hi@meghansterling.ca
        </TextLink>
    </SectionGrid>
)