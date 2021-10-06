import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar( {user} ) {

    return (
      <nav>
        <div className="nav__left">
          <i className="nav__icon fab fa-facebook-square" data-testid="icon-social"></i>
          <i className="nav__icon fab fa-twitter-square" data-testid="icon-social"></i>
          <i className="nav__icon fab fa-pinterest-square" data-testid="icon-social"></i>
          <i className="nav__icon fab fa-instagram-square" data-testid="icon-social"></i>
        </div>
        <div className="nav__center">
          <ul className="nav__list">
            <li className="nav__list__item">
              <Link to="/">home</Link>
            </li>
            <li className="nav__list__item">
              <Link to="/">about</Link>
            </li>
            <li className="nav__list__item">
              <Link to="/write">write</Link>
            </li>
            <li className="nav__list__item">{user && "logout"}</li>
          </ul>
        </div>
        <div className="nav__right">
          {user ? (
            <img className="nav__image" src="https://picsum.photos/id/1005/100/" alt="profile" />
          ) : (
            <ul className="nav__list">
              <li className="nav__list__item">
                <Link to="/register">sign up</Link>
              </li>
              <li className="nav__list__item">
                <Link to="/login">sign in</Link>
              </li>
            </ul>
          )}
          <i className="nav__iconSearch fas fa-search" data-testid="icon-search"></i>
        </div>
      </nav>
    );
}

TopBar.defaultProps = {
  user: true,
}
