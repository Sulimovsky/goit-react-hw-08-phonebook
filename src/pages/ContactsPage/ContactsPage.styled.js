import styled from 'styled-components';

export const Section = styled.section`
  padding: 110px 0 0 0;

  > *:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  text-align: center;
`;

export const PlaceholderEmptyList = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 21px;
`;
