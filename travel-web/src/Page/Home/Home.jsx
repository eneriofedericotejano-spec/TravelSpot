import Card from "../../Components/Card/Card.jsx";
import { places } from "../../Data/Places.js";
import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [category, setCategory] = useState("All");

  const filteredPlaces = category === "All"
  ? places
  : places.filter((place) => place.category === category);

  const filters = [
    "All",
    "Beach",
    "Mountain",
    "Island",
    "Heritage",
    "Waterfall",
  ];

  return (
    <section className="home-wrapper">
    <div className="home">
      <div className="filtering">
        {filters.map((filter) => (
          <button
          key={filter}
          onClick={() => setCategory(filter)} 
          className={`filter-button ${category  === filter ? "active" : ""}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="home-grid">
        {filteredPlaces.map((place) => (
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
    </div>
    </section>
  );
}
