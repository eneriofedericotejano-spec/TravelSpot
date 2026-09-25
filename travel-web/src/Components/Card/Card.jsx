import "./Card.css";
import { Bookmark } from "lucide-react";
import { MapPin } from "lucide-react";

export default function Card({
  image,
  category,
  name,
  location,
  description,
  rating,
}) {
  return (
    <div className="card">
      <div className="image-container">
        <img className="place-img" src={image} alt={name} />
        <div className="upper-card">
          <span className="category">{category}</span>
          <button className="save-btn">
            <Bookmark />
          </button>
        </div>
      </div>
      <div className="lower-card">
        <div className="information-container">
          <h3 className="name">{name}</h3>
          <p className="location">
            <MapPin />
            {location}
            </p>
          <p className="description">{description}</p>
        </div>
        <span className="rating">⭐ {rating}</span>
      </div>
    </div>
  );
}
