import { NavLink } from 'react-router-dom';
import c from './AppBar.module.css';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <header className={c.header}>
      <nav>
        {navItems.map(({ href, text }) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              isActive ? `${c.active}` : `${c.link}`
            }
          >
            {text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default AppBar;
