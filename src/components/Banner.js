import '../styles/Banner.css';
import PropTypes from 'prop-types';

function Banner(props) {
    return(
        <div className='banner'>
            <h1>Bonjour <span>{ props.firstName }</span></h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>        
    );
}

Banner.propTypes = {
    firstName: PropTypes.string.isRequired
};

export default Banner;