import '../styles/Banner.css';
import PropTypes from 'prop-types';

/**
 * 
 * @param { string } firstName 
 * @returns Greetings Banner with user first name
 */

function Banner({ firstName }) {
    return(
        <div className='banner'>
            <h1>Bonjour <span>{ firstName }</span></h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>        
    );
}

Banner.propTypes = {
    firstName: PropTypes.string.isRequired
};

export default Banner;