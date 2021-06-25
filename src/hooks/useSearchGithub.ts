import { useState, useEffect, useCallback } from 'react';

import { RepoData, UserData } from '@/types';
import { useSearchType } from '@/store/searchtype';
import { searchGithub } from '@/api';

import { useDebounce } from './useDebounce';

export const useSearchGithub = () => {
  const { search, searchType } = useSearchType();
  const [loading, setLoading] = useState(false);
  const [resultsUsers, setResultsUsers] = useState<UserData[]>();
  const [resultsRepos, setResultsRepos] = useState<RepoData[]>();

  const debounceSearch = useDebounce(search, 400);

  const getUser = useCallback(async () => {
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
  }, [debounceSearch, searchType]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return { loading, resultsRepos, resultsUsers };
};
