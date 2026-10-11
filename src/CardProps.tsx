import "./Card.scss";

type CardProps = {
  location: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  days: number;
  nights: number;
  image: string;
};

export default function Card({
  location,
  title,
  description,
  price,
  oldPrice,
  discount,
  days,
  nights,
  image,
}: CardProps) {
  return (
    <div className="card">
      <div
        className="card__Img"
        style={{ backgroundImage: `url("${image}")` }}
      >
        {discount !== undefined && discount > 0 && (
          <div className="discount">
            <p>-{discount}%</p>
          </div>
        )}
      </div>

      <div className="card__content">
        <div className="content-wrapper">
          <div className="card-txt">
            <p className="location">{location}</p>
            <p className="card-title">{title}</p>
            <p className="card-description">{description}</p>
          </div>

          <div className="card-price">
            {oldPrice !== undefined && oldPrice > 0 && (
              <p className="prior-price">€ {oldPrice}</p>
            )}
            <p className="price">€ {price}</p>
          </div>
        </div>

        <div className="end-infos">
          <div className="days">
            <p>{days} Days · {nights} Nights</p>
          </div>
          <button className="card-btn">View More</button>
        </div>
      </div>
    </div>
  );
}