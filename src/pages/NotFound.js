import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

function NotFound() {
    return (
        <section className="not-found">
            <div>
                <h1 className="not-found_title">404</h1>
                <h2 className="not-found_subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            

            <Link to="/id" className="not-found_link">
                Essayer plutôt avec ce compte...
            </Link>
        </section>            
    );
}

export default NotFound;