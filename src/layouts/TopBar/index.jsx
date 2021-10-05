import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user = false;
    return (
      <nav>
        <div className="nav__left">
          <i className="nav__icon fab fa-facebook-square"></i>
          <i className="nav__icon fab fa-twitter-square"></i>
          <i className="nav__icon fab fa-pinterest-square"></i>
          <i className="nav__icon fab fa-instagram-square"></i>
        </div>
        <div className="nav__center">
          <ul className="nav__list">
            <li className="nav__list__item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__list__item">
              <Link to="/">About</Link>
            </li>
            <li className="nav__list__item">
              <Link to="/write">write</Link>
            </li>
            <li className="nav__list__item">{user && "Logout"}</li>
          </ul>
        </div>
        <div className="nav__right">
          {user ? (
            <img className="nav__image" src="https://picsum.photos/id/1005/100/" alt="profile" />
          ) : (
            <ul className="nav__list">
              <li className="nav__list__item">
              <Link to="/register">Sign Up</Link>
              </li>
              <li className="nav__list__item">
              <Link to="/login">Sign In</Link>
              </li>
            </ul>
          )}
          <i className="nav__iconSearch fas fa-search"></i>
        </div>
      </nav>
    );
}
