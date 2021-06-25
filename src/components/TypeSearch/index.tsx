import Switch from 'react-switch';

import { useSearchType } from '@/store/searchtype';

import { TypeSearchContainer, TypeSearchLabel } from './styles';

const TypeSearch = () => {
  const { checked, setSearchType, setSearch, setChecked } = useSearchType();

  return (
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
  );
};

export default TypeSearch;
