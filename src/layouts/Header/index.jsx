import './header.css'

export default function Header() {
    return (
      <header>
        <div className="header__titles">
          <span className="title__small">React & Node</span>
          <span className="title__large">Blog</span>
        </div>
        <img src="https://picsum.photos/id/101/2000" alt="header" className="header__image" />
      </header>
    );
}
