import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import Switch from 'react-switch';

import NavBar from '@/components/NavBar';
import { useDebounce } from '../hooks/useDebounce';
import { searchGithub } from '../api';
import { UserData, RepoData } from '../types';
import { useSearchType } from '../store/searchtype';

const Body = styled.div`
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

const TypeSearchContainer = styled.div`
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

const TypeSearchLabel = styled.p`
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  width: 75vw;
  max-width: 600px;
`;

const SearchInput = styled.input`
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

const ResultContainer = styled.div`
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

const Result = styled.div`
  display: flex;
  align-items: center;
  min-height: 60px;
  max-width: 600px;
  height: fit-content;
  border-bottom: 1px solid #f5f5f5;
  padding: 10px 0;
`;

const ResultLabelContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultName = styled.p`
  font-size: 1rem;
  color: #000000;
`;

const ResultDescription = styled.p`
  color: #b1b1b1;
  margin-top: 5px;
`;

const ResultImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 15px;
`;

const Home = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultsUsers, setResultsUsers] = useState<UserData[]>();
  const [resultsRepos, setResultsRepos] = useState<RepoData[]>();
  const [checked, setChecked] = useState(false);

  const { searchType, setSearchType } = useSearchType();
  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    const getUser = async () => {
      const modifiedSearch = debounceSearch.toLowerCase().trim();
      if (modifiedSearch !== '') {
        setLoading(true);
        const results = await searchGithub(modifiedSearch, searchType);
        if (searchType === 'users') {
          const userRes: UserData[] = results.items;
          setResultsUsers(userRes);
        } else {
          const reposRes: RepoData[] = results.items;
          setResultsRepos(reposRes);
        }
      } else {
        setResultsRepos(undefined);
        setResultsUsers(undefined);
      }
      setLoading(false);
    };
    getUser();
  }, [debounceSearch, searchType]);

  const handleRenderResults = () => {
    if (resultsUsers) {
      return (
        <ResultContainer>
          {resultsUsers?.map((result) => (
            <a href={result.html_url} target="_blank" rel="noopener noreferrer">
              <Result key={result.login}>
                <ResultImg
                  src={result.avatar_url}
                  alt={`${result.login} Image`}
                />

                <ResultName>{result.login}</ResultName>
              </Result>
            </a>
          ))}
        </ResultContainer>
      );
    }

    if (resultsRepos) {
      return (
        <ResultContainer>
          {resultsRepos?.map((result) => (
            <a href={result.html_url} target="_blank" rel="noopener noreferrer">
              <Result key={result.full_name}>
                <ResultImg
                  src={result.owner.avatar_url}
                  alt={`${result.full_name} Image`}
                />
                <ResultLabelContent>
                  <ResultName>{result.full_name}</ResultName>
                  <ResultDescription>{result.description}</ResultDescription>
                </ResultLabelContent>
              </Result>
            </a>
          ))}
        </ResultContainer>
      );
    }

    return null;
  };

  return (
    <div>
      <NavBar />
      <Body>
        <Title>Zebrands Technical Interview</Title>
        <TypeSearchContainer>
          <Switch
            checked={checked}
            onChange={(check) => {
              setSearchType(check ? 'repositories' : 'users');
              setSearch('');
              setChecked(check);
            }}
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={48}
            onColor="#ebca8d"
            onHandleColor="#ad7428"
          />
          <TypeSearchLabel>
            {checked ? 'Repositories 📦' : 'Usernames 👨‍💻'}
          </TypeSearchLabel>
        </TypeSearchContainer>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder={checked ? '🔎 react' : '🔎 santychuy'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {loading ? (
            <Loader
              type="ThreeDots"
              color="#ffffff"
              height={40}
              width={40}
              visible
            />
          ) : (
            handleRenderResults()
          )}
        </SearchContainer>
      </Body>
    </div>
  );
};

export default Home;
