import styled from 'styled-components';

export const TypeSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 60px;
  width: 70%;
  max-width: 300px;
  @media (min-width: 768px) {
    margin: 50px 0 70px;
  }
`;

export const TypeSearchLabel = styled.p`
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
