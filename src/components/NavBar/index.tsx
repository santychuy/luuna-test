import { motion } from 'framer-motion';

import { NavBarContainer, GithubIcon } from './styles';

const NavBar = () => (
  <NavBarContainer>
    <motion.a
      href="https://github.com/santychuy/luuna-test"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      <GithubIcon src="/icons/githubicon.svg" alt="Github Icon" />
    </motion.a>
  </NavBarContainer>
);

export default NavBar;
