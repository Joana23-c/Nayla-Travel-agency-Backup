import "./albsection.scss";
// import Card from "./Card.tsx";
import CardProps from  './CardProps.tsx';

export default function Albsection() {
  return (
    <>
      <div className="alb__header">
        <p className="alb__subtitle">Discover Albania</p>
        <p className="alb__title">An Unexplored Trasure</p>
      </div>
      <div className="cards-wrapper">
        <div className="cards-container ">
          {/* <Card /> */}
          <CardProps
            location="Albania"
            title="Ksamil Paradise"
            description="Escape to crystal-clear turquoise waters, pristine beaches and breathtaking views of the Albanian Riviera."
            price={320}
            oldPrice={400}
            discount={20}
            days={5}
            nights={4}
            image={`ksamil.jpg`}
          />

          <CardProps
            location="Albania"
            title="Theth Mountain Escape"
            description="Discover majestic mountain peaks, enchanting waterfalls and the untouched natural beauty of the Albanian Alps."
            price={240}
            oldPrice={300}
            discount={20}
            days={3}
            nights={2}
            image={`theth.png`}
          />

          <CardProps
            location="Albania"
            title="Berat Heritage Journey"
            description="Wander through charming cobblestone streets, explore historic castles and experience the magic of Albania's City of a Thousand Windows."
            price={180}
            oldPrice={0}
            discount={0}
            days={2}
            nights={1}
            image={`berat.jpg`}
          />
        </div>
      </div>
    </>
  );
}
