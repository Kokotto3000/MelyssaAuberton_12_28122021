import '../styles/Banner.css';

function Banner(props) {
    return(
        <div className='banner'>
            <h1>Bonjour <span>{ props.firstName }</span></h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>        
    );
}

export default Banner;