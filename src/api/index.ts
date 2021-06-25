import axios from 'axios';

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
    throw new Error(e);
  }
};
