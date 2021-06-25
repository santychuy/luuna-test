import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  padding: 10px 20px;
  @media (min-width: 768px) {
    padding: 30px 50px;
  }
`;

export const GithubIcon = styled(motion.img)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
