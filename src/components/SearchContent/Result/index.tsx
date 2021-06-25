import { FC } from 'react';

import { Container } from './styles';

const Result: FC = ({ children }) => (
  <Container
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </Container>
);

export default Result;
