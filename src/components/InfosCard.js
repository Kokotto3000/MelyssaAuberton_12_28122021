import '../styles/InfosCard.css';
import { PropTypes } from 'prop-types';

/**
 * 
 * @param {number|string} amount
 * @param {string} icon
 * @param {string} type
 * @returns user infos cards
 */

function InfosCard(props) {
    console.log(props)
    return(
        <div className="infos">
            <img className="aside_logo" src={ props.icon } alt={`logo ${props.type}`} />
            <p><span>{ props.amount }</span><br />{ props.type }</p>
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