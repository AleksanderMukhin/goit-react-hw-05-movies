import { NavLink } from 'react-router-dom';
import css from './Haeder.module.css';

const Header = () => {
  return (
    <nav className={css.navigation}>
      <NavLink className={css.navlink} to="/">
        Home
      </NavLink>
      <NavLink className={css.navlink} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Header;
