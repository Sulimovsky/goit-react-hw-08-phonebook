import styled from 'styled-components';

export const LogOutBtn = styled.button`
  padding: 5px;
  font-size: 1rem;
  font-weight: 600;
  color: ${props =>
    props.theme.palette.mode === 'light'
      ? props.theme.palette.common.black
      : props.theme.palette.common.white};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${props => props.theme.palette.secondary.main};
  }
`;

export const AccountCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 35px;
  height: 35px;
  font-size: 21px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  color: ${props => props.theme.palette.common.white};
  background-color: ${props => props.theme.palette.secondary.main};
  border-radius: 50%;
`;
