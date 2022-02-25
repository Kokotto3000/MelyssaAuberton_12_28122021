import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

/**
 * 
 * @returns main with an 404 error message when page is not found
 */

function NotFound() {
    return (
        <section className="not-found">
            <div>
                <h1 className="not-found_title">404</h1>
                <h2 className="not-found_subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            

            <Link to="/12" className="not-found_link">
                Essayer plutôt avec le compte de Karl...
            </Link>

        </section>            
    );
}

export default NotFound;