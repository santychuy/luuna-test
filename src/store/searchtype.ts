import create from 'zustand';

type SearchState = {
  search: string;
  setSearch: (value: string) => void;
  checked: boolean;
  setChecked: (checked: boolean) => void;
  searchType: 'users' | 'repositories';
  setSearchType: (type: 'users' | 'repositories') => void;
};

export const useSearchType = create<SearchState>((set) => ({
  search: '',
  setSearch: (value) => set({ search: value }),
  checked: false,
  setChecked: (checked) => set({ checked }),
  searchType: 'users',
  setSearchType: (type) => set({ searchType: type }),
}));
