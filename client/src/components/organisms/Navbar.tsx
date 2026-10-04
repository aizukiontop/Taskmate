import { NavLink } from 'react-router-dom';
import './Navbar.css';

type NavbarProps = {
  username: string;
  onLogout: () => void;
};

export default function Navbar({ username, onLogout }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" aria-label="TaskMate home">
          <img
            src={`${import.meta.env.BASE_URL}taskmate-logo.png`}
            alt="TaskMate"
            className="navbar__logo"
          />
          <span className="navbar__name">TaskMate</span>
        </NavLink>

        <nav aria-label="Main navigation">
          <ul className="navbar__links">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
                }
              >
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
                }
              >
                About
              </NavLink>
            </li>
            <li className="navbar__user">
              <span className="navbar__username">{username}</span>
              <button className="navbar__signout" onClick={onLogout}>
                Sign out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}