import { StyledSpan, StyledParagraph, StyledSubtitle, StyledTitle, StyledLink, StyledNavLink } from './styles.js'

export const Text = ({ children, type, ...props }) => {
  switch (type) {
    case 'title':
      return <StyledTitle { ...props }>{ children }</StyledTitle>
    case 'subtitle':
      return <StyledSubtitle { ...props }>{ children }</StyledSubtitle>
    case 'paragraph':
      return <StyledParagraph { ...props }>{ children }</StyledParagraph>
    case 'span':
      return <StyledSpan { ...props }>{ children }</StyledSpan>
    case 'link':
      return <StyledLink { ...props }>{ children }</StyledLink>
    case 'navlink':
      return <StyledNavLink { ...props }>{ children }</StyledNavLink>
    default:
      return <StyledParagraph { ...props }>{ children }</StyledParagraph>
  }
}