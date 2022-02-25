import logo from '../assets/logo.svg';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

/**
 * Navigation isn't already functional
 * @returns header with horizontal navigation bar
 */

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="header_logo" src={ logo } alt="logo SportSee" />
            </Link>
            
            <nav className="header_nav">
                <Link className="header_nav-link" to="/id/accueil">Accueil</Link>
                <Link className="header_nav-link" to="/id/profil">Profil</Link>
                <Link className="header_nav-link" to="/id/reglage">Réglage</Link>
                <Link className="header_nav-link" to="/id/communaute">Communauté</Link>
            </nav>
        </header>);
}

export default Header;