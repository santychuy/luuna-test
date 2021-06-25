import axios from 'axios';
import toast from 'react-hot-toast';

export const searchGithub = async (
  search: string,
  searchType: 'users' | 'repositories'
) => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/search/${searchType}?q=${search}&per_page=10`
    );
    return data;
  } catch (e) {
    return toast.error('Llegaste al límite de llamadas a la API');
  }
};
