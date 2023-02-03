import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkShared = styled(NavLink)`
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: ${props =>
    props.theme.palette.mode === 'light'
      ? props.theme.palette.common.black
      : props.theme.palette.common.white};

  &.active {
    color: ${props => props.theme.palette.secondary.main};
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${props => props.theme.palette.secondary.main};
  }
`;
