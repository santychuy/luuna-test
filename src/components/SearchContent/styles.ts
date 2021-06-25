import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  width: 75vw;
  max-width: 600px;
`;

export const SearchInput = styled(motion.input)`
  text-align: center;
  border: none;
  height: 45px;
  min-width: 250px;
  width: 75vw;
  max-width: 580px;
  border-radius: 5px;
  background-color: transparent;
  &::placeholder {
    color: #8b8b8b;
  }
  border: 2px solid #ebebeb;
  -webkit-box-shadow: 0px 6px 13px 0px rgba(107, 107, 107, 0.5);
  box-shadow: 0px 6px 13px 0px rgba(107, 107, 107, 0.5);
  caret-color: aliceblue;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: 1.2rem;
    height: 60px;
  }
`;

export const NoResultLabel = styled.p`
  font-size: 1rem;
  margin-top: 20px;
`;
