import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const headerItems = [
  { to: '/', title: 'Home', state: { isSearchOpen: true } },
  { to: '/movies', title: 'Movies' },
];

export const Header = () => {
  return (
    <nav className={style.nav}>
      <ul>
        {headerItems.map((headerItem) => (
          <li key={headerItem.title}>
            <NavLink
              className={({ isActive }) => (isActive ? style.nav_active : null)}
              state={headerItem.state}
              to={headerItem.to}
            >
              {headerItem.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
