import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledParagraph = styled.p`
  font-size: ${ ({ size }) => size ? `${ size }` : '1.5rem' };
  font-weight: ${ ({ weight }) => weight ? weight : '400' };
  color: ${ ({ theme, color }) => color ? theme[color] : theme.text };
  text-align: ${ ({ align }) => align ? align : 'left' };
  
  ${ ({ hover }) => hover && `
    transition: color 0.4s ease-in-out;
    cursor: pointer;
    
    &:hover {
      color: ${ ({ theme }) => theme.accent };
    }
  ` }
`;

export const StyledSpan = styled.span`
  font-size: ${ ({ size }) => size ? `${ size }` : '1.5rem' };
  font-weight: ${ ({ weight }) => weight ? weight : '400' };
  color: ${ ({ theme, color }) => color ? theme[color] : theme.text };
  text-align: ${ ({ align }) => align ? align : 'left' };

  ${ ({ hover }) => hover && `
    transition: color 0.4s ease-in-out;
    cursor: pointer;
    
    &:hover {
      color: ${ ({ theme }) => theme.accent };
    }
  ` }
`;

export const StyledTitle = styled.h1`
  font-size: ${ ({ size }) => size ? `${ size }` : '2.5rem' };
  font-weight: ${ ({ weight }) => weight ? weight : '700' };
  color: ${ ({ theme, color }) => color ? theme[color] : theme.text };
  text-align: ${ ({ align }) => align ? align : 'left' };

  ${ ({ hover }) => hover && `
    transition: color 0.4s ease-in-out;
    cursor: pointer;
    
    &:hover {
      color: ${ ({ theme }) => theme.accent };
    }
  ` }
`;

export const StyledSubtitle = styled.h2`
  font-size: ${ ({ size }) => size ? `${ size }` : '1.8rem' };
  font-weight: ${ ({ weight }) => weight ? weight : '700' };
  color: ${ ({ theme, color }) => color ? theme[color] : theme.text };
  text-align: ${ ({ align }) => align ? align : 'left' };

  ${ ({ hover }) => hover && `
    transition: color 0.4s ease-in-out;
    cursor: pointer;
    
    &:hover {
      color: ${ ({ theme }) => theme.accent };
    }
  ` }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: ${ ({ size }) => size ? `${ size }` : '1.5rem' };
  font-weight: ${ ({ weight }) => weight ? weight : '500' };
  color: ${ ({ theme, color }) => color ? theme[color] : theme.text };
  text-align: ${ ({ align }) => align ? align : 'left' };
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${ ({ theme }) => theme.accent };
  }
`;

export const StyledLink = styled(Link)`
  font-size: ${ ({ size }) => size ? `${ size }` : '1.5rem' };
  font-weight: ${ ({ weight }) => weight ? weight : '500' };
  color: ${ ({ theme, color }) => color ? theme[color] : theme.text };
  text-align: ${ ({ align }) => align ? align : 'left' };
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${ ({ theme }) => theme.accent };
  }
`;
