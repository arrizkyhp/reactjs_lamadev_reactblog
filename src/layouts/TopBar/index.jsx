import "./topbar.css"

export default function TopBar() {
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
            <li className="nav__list__item">Home</li>
            <li className="nav__list__item">About</li>
            <li className="nav__list__item">Write</li>
            <li className="nav__list__item">Logout</li>
          </ul>
        </div>
        <div className="nav__right">
          <img className="nav__image" src="https://picsum.photos/id/1005/100/" alt="profile" />
          <i className="nav__iconSearch fas fa-search"></i>
        </div>
      </nav>
    );
}
