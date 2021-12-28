import { Link } from 'react-router-dom';

function NotFound() {

    return (
        <main className="not-found">
            <div>
                <h1 className="not-found_title">404</h1>
                <h2 className="not-found_subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            

            <Link to="/id" className="not-found_link">
                Essayer plutôt avec ce compte...
            </Link>
        </main>            
    );
}

export default NotFound;