import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <>
      <section className="header">
        <div className="header-left">
          <img src={logo} alt="TravelSpot Logo" />
          <p className="header-title">TravelSpot</p>
        </div>

        <div className="header-right">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/savetrips"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Save Trips
          </NavLink>
        </div>
      </section>
    </>
  );
}
