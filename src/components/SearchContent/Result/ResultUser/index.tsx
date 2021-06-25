import { FC } from 'react';

import { UserData } from '@/types';

import { ResultContainer, ResultImg, ResultName } from '../styles';

interface ResultUserProps {
  user: UserData;
}

const ResultUser: FC<ResultUserProps> = ({ user }) => (
  <a href={user.html_url} target="_blank" rel="noopener noreferrer">
    <ResultContainer key={user.login}>
      <ResultImg src={user.avatar_url} alt={`${user.login} Image`} />

      <ResultName>{user.login}</ResultName>
    </ResultContainer>
  </a>
);

export default ResultUser;
