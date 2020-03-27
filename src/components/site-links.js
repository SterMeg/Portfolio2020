import React from 'react'
import { LinkList } from '../utils/layout'

const links = ["About", "Skills", "Projects", "Contact"]
// Once blog page added,
// add check for # & render a or Gatsby link
const SiteLinks = () => (
  <LinkList>
    {links.map(link => (
      <li key={link.toLowerCase()}>
        <a href={`#${link.toLowerCase()}`}>{link}</a>
      </li>
    ))}
  </LinkList>
)

export default SiteLinks