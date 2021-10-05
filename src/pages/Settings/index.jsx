import Sidebar from 'layouts/Sidebar'
import './settings.css'

export default function Settings() {
    return (
      <main className="settings">
        <div className="setting__wrapper">
          <div className="setting__title">
            <span className="setting__title__update">Update Your Account</span>
            <span className="setting__title__delete">Delete Account</span>
          </div>
          <form className="setting__form">
            <label htmlFor="profile__picture">Profile Picture</label>
            <div className="setting__profilePicture">
              <img src="https://picsum.photos/id/1005/100/" alt="profile" />
            <label htmlFor="profile__file__input">
              <i className="profile__input__icon far fa-user-circle"></i>
            </label>
            </div>
            <input type="file" name="file__input" id="profile__file__input" style={{ display: "none" }} />
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="arrizkyhp" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="arrizkyhp@ymail.com" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button className="setting__button">Update</button>
          </form>
        </div>
        <Sidebar />
      </main>
    );
}
