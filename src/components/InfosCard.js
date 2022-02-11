import '../styles/InfosCard.css';
import { PropTypes } from 'prop-types';

/**
 * 
 * @param {number|string} amount
 * @param {string} icon
 * @param {string} type
 * @returns user infos cards
 */

function InfosCard({ icon, type, amount }) {
    return(
        <div className="infos">
            <img className="aside_logo" src={ icon } alt={`logo ${ type }`} />
            <p><span>{ amount }</span><br />{ type }</p>
        </div>
    );
}

InfosCard.propTypes = {
    icon: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default InfosCard;