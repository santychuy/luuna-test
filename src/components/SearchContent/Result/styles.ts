import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  background-color: #ffffff;
  padding: 0 10px;
  margin-top: 2px;
  height: auto;
  max-height: 200px;
  min-width: 250px;
  width: 75vw;
  max-width: 600px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  border-radius: 5px;
  -webkit-box-shadow: 0px 6px 13px 0px rgba(107, 107, 107, 0.5);
  box-shadow: 0px 6px 13px 0px rgba(107, 107, 107, 0.5);
  @media (min-width: 768px) {
    padding: 0 20px;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 60px;
  max-width: 600px;
  height: fit-content;
  border-bottom: 1px solid #f5f5f5;
  padding: 10px 0;
`;

export const ResultLabelContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultName = styled.p`
  font-size: 1rem;
  color: #000000;
`;

export const ResultDescription = styled.p`
  color: #b1b1b1;
  margin-top: 5px;
`;

export const ResultImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 15px;
`;
