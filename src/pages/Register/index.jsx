import { Link } from 'react-router-dom';
import './register.css'

export default function Register() {
    return (
      <main className="register">
        <h1 className="register__title">Register</h1>
        <form className="register__form">
          <label htmlFor="username">Username</label>
          <input type="text" className="register__form__input" name="username" id="username" placeholder="Enter your username...." />
          <label htmlFor="email">Email</label>
          <input type="text" className="register__form__input" name="email" id="email" placeholder="Enter your email...." />
          <label htmlFor="password">Password</label>
          <input type="password" className="register__form__input" name="password" id="password" placeholder="Enter your password...." />
          <button className="register__button">Sign Up</button>
        </form>
        <button className="register__login__button">
          <Link to="/login">Sign In</Link>
        </button>
      </main>
    );
}
