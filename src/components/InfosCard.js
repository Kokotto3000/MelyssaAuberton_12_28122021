import '../styles/InfosCard.css';

function InfosCard(props) {
    return(
        <div className="infos">
            <img className="aside_logo" src={ props.icon } alt="logo Yoga" />
            <p><span>{ props.amount }</span><br />{ props.type }</p>
        </div>
    );
}

export default InfosCard;