import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 28px;
  color: ${props => props.theme.palette.text.primary};
`;
