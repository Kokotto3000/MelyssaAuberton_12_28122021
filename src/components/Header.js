import logo from '../assets/logo.svg';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="header_logo" src={ logo } alt="logo SportSee" />
            </Link>

            {/* changer les routes des liens et créer des pages par défault ou même lien pour tous */}
            
            <nav className="header_nav">
                <Link className="header_nav-link" to="/id">Accueil</Link>
                <Link className="header_nav-link" to="/id/profil">Profil</Link>
                <Link className="header_nav-link" to="/id/reglage">Réglage</Link>
                <Link className="header_nav-link" to="/id/communaute">Communauté</Link>
            </nav>
        </header>);
}

export default Header;