
import './Card.css';

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
      <div className="upper-card">
        <img className="place-img" src={image} alt={name} />
        <span className="category">{category}</span>
        <button className="save-btn">Save</button>
      </div>
      <div className="lower-card">
        <h3 className="name">{name}</h3>
        <p className="location">{location}</p>
        <p className="description">{description}</p>
        <span className="rating">⭐ {rating}</span>
      </div>
    </div>
  );
}
