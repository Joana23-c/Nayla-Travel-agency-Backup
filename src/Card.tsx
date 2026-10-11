import "./Card.scss";


export default function Card() {
  return (
    <>
      <div className="card">
        <div className="card__Img">
          <div className="discount">
            <p>- 20%</p>
          </div>
        </div>

        <div className="card__content">

          <div className="content-wrapper">
            <div className="card-txt">
              <p className="location">Greece</p>
              <p className="card-title">Corfu Escape</p>
              <p className="card-description">
                Crystal-clear beaches, charming towns and unforgettable sunsets
                in one of Greece's most beautiful islands
              </p>
            </div>
            <div className="card-price">
              <p className="prior-price">€ 700</p>
            
            <p className="price">€ 560</p>
            </div>
          </div>

          <div className="end-infos">
            <div className="days">
              <p>7 Days · 6 Nights</p>
            </div>
            <button className="card-btn">View More</button>
          </div>
        </div>
      </div>
    </>
  );
}
