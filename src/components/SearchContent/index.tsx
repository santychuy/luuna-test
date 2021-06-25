import { AnimatePresence } from 'framer-motion';
import Loader from 'react-loader-spinner';

import { useSearchType } from '@/store/searchtype';
import { useSearchGithub } from '@/hooks/useSearchGithub';

import Result from './Result';
import ResultRepository from './Result/ResultRepository';
import ResultUser from './Result/ResultUser';
import { SearchContainer, SearchInput, NoResultLabel } from './styles';

const SearchContent = () => {
  const { checked, search, setSearch } = useSearchType();
  const { loading, resultsRepos, resultsUsers } = useSearchGithub();

  const handleRenderResults = () => {
    if (resultsUsers) {
      if (resultsUsers.length !== 0) {
        return (
          <Result>
            {resultsUsers?.map((user) => (
              <ResultUser user={user} key={user.login} />
            ))}
          </Result>
        );
      }

      return <NoResultLabel>No se encontró resultados</NoResultLabel>;
    }

    if (resultsRepos) {
      if (resultsRepos.length !== 0) {
        return (
          <Result>
            {resultsRepos?.map((repo) => (
              <ResultRepository repo={repo} key={repo.full_name} />
            ))}
          </Result>
        );
      }

      return <NoResultLabel>No se encontró resultados</NoResultLabel>;
    }

    return null;
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder={checked ? '🔎 react' : '🔎 santychuy'}
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
        whileHover={{ y: -5 }}
        whileFocus={{ y: -5 }}
      />
      <AnimatePresence exitBeforeEnter>
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
      </AnimatePresence>
    </SearchContainer>
  );
};

export default SearchContent;
