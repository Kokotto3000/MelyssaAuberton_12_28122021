import yoga from '../assets/yoga.svg';
import swim from '../assets/swim.svg';
import cycle from '../assets/cycle.svg';
import bodybuilding from '../assets/bodybuilding.svg';
import '../styles/Aside.css';
import { Link } from 'react-router-dom';

/**
 * 
 * Aside vertical navigation bar isn't already functional
 * @returns aside vertical navigation bar
 */

function Aside() {
    return (
        <aside className="aside">
            <nav className="aside_nav">
                <Link className="aside_nav-link" to="/id/yoga">
                    <img className="aside_logo" src={ yoga } alt="logo Yoga" />
                </Link>
                <Link className="aside_nav-link" to="/id/swim">
                    <img className="aside_logo" src={ swim } alt="logo Swim" />
                </Link>
                <Link className="aside_nav-link" to="/id/cycle">
                    <img className="aside_logo" src={ cycle } alt="logo Cycle" />
                </Link>
                <Link className="aside_nav-link" to="/id/bodybuilding">
                    <img className="aside_logo" src={ bodybuilding } alt="logo Bodybuilding" />
                </Link>
            </nav>

            <Link className='aside_copy' to="/id">Copyright, SportSee 2020</Link>            
        </aside>);
}

export default Aside;