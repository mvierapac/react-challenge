import { Link } from "react-router-dom";
import "./PhoneCard.css";

export const PhoneCard = ({ phone }) => {
  console.log(phone);
  return (
    <li className="phone-card">
      <Link to={`/detalle/${phone.id}`} className="phone-card__link">
        <div className="phone-card__overlay" aria-hidden="true"></div>
        <img
          src={phone.imageUrl}
          alt={`${phone.name}`}
          className="phone-card__image"
        />
        <div className="phone-card__content">
          <p className="phone-card__brand">{phone.brand.toUpperCase()}</p>
          <div className="phone-card__info-row">
            <p className="phone-card__model">{phone.name.toUpperCase()}</p>
            <p className="phone-card__price">{phone.basePrice} EUR</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
