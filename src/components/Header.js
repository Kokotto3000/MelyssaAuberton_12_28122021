import logo from '../assets/logo.svg';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="header_logo" src={ logo } alt="logo SportSee" />
            </Link>
            
            <nav className="header_nav">
                <Link className="header_nav-link" to="/">Accueil</Link>
                <Link className="header_nav-link" to="/profil">Profil</Link>
                <Link className="header_nav-link" to="/reglage">Réglage</Link>
                <Link className="header_nav-link" to="/communaute">Communauté</Link>
            </nav>
        </header>);
}

export default Header;