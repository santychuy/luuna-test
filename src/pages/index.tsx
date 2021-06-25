import styled from 'styled-components';
import { motion } from 'framer-motion';

import NavBar from '@/components/NavBar';
import TypeSearch from '@/components/TypeSearch';
import SearchContent from '@/components/SearchContent';

const Body = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  @media (min-width: 375px) {
    padding: 0 40px;
  }
  @media (min-width: 768px) {
    margin-top: 200px;
  }
  @media (min-height: 1000px) {
    margin-top: 230px;
  }
  @media (min-height: 1200px) {
    margin-top: 400px;
  }
`;

const Title = styled.h1`
  text-align: center;
  @media (min-width: 375px) {
    font-size: 1.6rem;
    line-height: 2rem;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Home = () => (
  <>
    <NavBar />
    <Body
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Title>Zebrands Technical Interview</Title>
      <TypeSearch />
      <SearchContent />
    </Body>
  </>
);

export default Home;
