import "./globalsection.scss";
// import Card from "./Card.tsx";
import CardProps from "./CardProps.tsx";

export default function Globalsection() {
  return (
    <>
      <div className="global__header">
        <p className="global__subtitle">Curated Escapes</p>
        <p className="global__title">Featured destinations</p>
      </div>
      <div className="cards-wrapper">
        <div className="cards-container ">
          {/* <Card /> */}
          <CardProps
            location="Greece"
            title="Corfu Escape"
            description="Crystal-clear beaches, charming towns and unforgettable sunsets."
            price={560}
            oldPrice={700}
            discount={20}
            days={7}
            nights={6}
            image={`${import.meta.env.BASE_URL}corfu.jpg`}
          />

          <CardProps
            location="Italy"
            title="Rome Getaway"
            description="Explore ancient landmarks, charming streets of Italy's Eternal City."
            price={600}
            oldPrice={0}
            discount={0}
            days={4}
            nights={3}
            image={`${import.meta.env.BASE_URL}rome.png`}
          />

          <CardProps
            location="United Arab Emirates"
            title="Dubai Experience"
            description="Discover iconic skyscrapers and golden deserts of Dubai."
            price={960}
            oldPrice={1200}
            discount={20}
            days={6}
            nights={5}
            image={`${import.meta.env.BASE_URL}dubai.png`}
          />
        </div>
      </div>
    </>
  );
}
