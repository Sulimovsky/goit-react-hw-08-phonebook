import styled from 'styled-components';

export const LinkNumber = styled.a`
  display: inline-block;
  padding: 3px 3px 3px 0;
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.main};
`;
