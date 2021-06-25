import { NavBarContainer, GithubIcon } from './styles';

const NavBar = () => (
  <NavBarContainer>
    <a
      href="https://github.com/santychuy/luuna-test"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon src="/icons/githubicon.svg" alt="Github Icon" />
    </a>
  </NavBarContainer>
);

export default NavBar;
