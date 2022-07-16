export default function Card(props) {
    let badgeText = false
    if (props.openSpots == 0) {
        badgeText = <div className="card__badge">SOLD OUT</div>
    } else if (props.location == 'Online') {
        badgeText = <div className="card__badge">Online</div>
    }
    return (
        <div className="card">
            {badgeText}
            <img className="card__img" src={`./images/${props.coverImg}`} alt="card" />
            <div className="card__header">
                <img className="card__header__star" src="star.png" alt="star" />
                <span className="card__header__rating">{props.rating}</span>
                <span className="card__header__nbComments">{props.reviewCount} •</span>
                <span className="card__header__country">{props.location}</span>
            </div>
        <div className="card__title">{props.title}</div>
        <div><span className="card__price">From {props.price}$</span><span> / person</span></div>
        </div>
    )
}