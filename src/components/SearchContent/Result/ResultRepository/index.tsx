import { FC } from 'react';

import { RepoData } from '@/types';

import {
  ResultContainer,
  ResultDescription,
  ResultImg,
  ResultLabelContent,
  ResultName,
} from '../styles';

interface ResultRepositoryProps {
  repo: RepoData;
}

const ResultRepository: FC<ResultRepositoryProps> = ({ repo }) => (
  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
    <ResultContainer key={repo.full_name}>
      <ResultImg src={repo.owner.avatar_url} alt={`${repo.full_name} Image`} />
      <ResultLabelContent>
        <ResultName>{repo.full_name}</ResultName>
        <ResultDescription>{repo.description}</ResultDescription>
      </ResultLabelContent>
    </ResultContainer>
  </a>
);

export default ResultRepository;
