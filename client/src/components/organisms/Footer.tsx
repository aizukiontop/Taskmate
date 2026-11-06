import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <div className="footer__logo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <span className="footer__brand-name">TaskMate</span>
        <span className="footer__tagline">Organize your tasks. Stay on track.</span>
      </div>

      <nav className="footer__links" aria-label="Footer navigation">
        <NavLink to="/" end className="footer__link">Dashboard</NavLink>
        <NavLink to="/tasks" className="footer__link">Tasks</NavLink>
        <NavLink to="/about" className="footer__link">About</NavLink>
      </nav>

      <span className="footer__copy">© 2026 TaskMate</span>
    </footer>
  );
}
