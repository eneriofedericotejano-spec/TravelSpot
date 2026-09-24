import Card from "../../components/Card/Card.jsx";
import { places } from "../../data/Places.js";
import "./Home.css"

export default function Home() {
  return (
    <section className="home">
      <div className="home-grid">
        {places.map((place) => (
          <Card
            key={place.id}
            image={place.image}
            category={place.category}
            name={place.name}
            location={place.location}
            description={place.description}
            rating={place.rating}
          />
        ))}
      </div>
    </section>
  );
}
