import "./Hero.scss";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-overlay">
          <div className="heroContent">
            <p className="subtitle">Nayla Travel</p>
            <p className="title">Go Where You Feel Most Alive</p>
            <p className="subdesc">
              Discover handpicked destinations, unforgettable escapes, and
              travel experiences designed to turn every journey into a story
              worth telling.
            </p>
            <button className="btn">Explore</button>
          </div>
        </div>
      </div>
    </>
  );
}
