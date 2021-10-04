import './sidebar.css'

export default function Sidebar() {
    return (
      <aside className="sidebar">
        <div className="sidebar__item">
          <h1 className="sidebar__title">About Me</h1>
          <img src="https://picsum.photos/id/1012/200/" alt="about" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi soluta voluptas amet assumenda rerum eius cum ullam obcaecati pariatur iusto ab eveniet dicta quidem, temporibus doloribus corporis esse. Autem
            tempora at eveniet cum quam. Maxime officiis officia repellendus vero.
          </p>
        </div>
        <div className="sidebar__item">
          <h1 className="sidebar__title">Categories</h1>
          <ul className="sidebar__list">
            <li className="sidebar__list__item">Life</li>
            <li className="sidebar__list__item">Music</li>
            <li className="sidebar__list__item">Style</li>
            <li className="sidebar__list__item">Sport</li>
            <li className="sidebar__list__item">Tech</li>
            <li className="sidebar__list__item">Cinema</li>
          </ul>
        </div>
        <div className="sidebar__item">
          <h1 className="sidebar__title">Follow Us</h1>
          <div className="sidebar__social">
            <i className="sidebar__social__icon fab fa-facebook-square"></i>
            <i className="sidebar__social__icon fab fa-twitter-square"></i>
            <i className="sidebar__social__icon fab fa-pinterest-square"></i>
            <i className="sidebar__social__icon fab fa-instagram-square"></i>
          </div>
        </div>
      </aside>
    );
}
