/* eslint-disable camelcase */

export interface UserData {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface RepoData {
  full_name: string;
  html_url: string;
  description: string;
  owner: {
    avatar_url: string;
  };
}
