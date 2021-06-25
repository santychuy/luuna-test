import create from 'zustand';

type SearchState = {
  searchType: 'users' | 'repositories';
  setSearchType: (type: 'users' | 'repositories') => void;
};

export const useSearchType = create<SearchState>((set) => ({
  searchType: 'users',
  setSearchType: (type) => set({ searchType: type }),
}));
