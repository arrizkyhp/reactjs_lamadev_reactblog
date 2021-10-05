import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
      <main className="login">
        <h1 className="login__title">Login</h1>
        <form className="login__form">
          <label htmlFor="email">Email</label>
          <input type="text" className="login__form__input" name="email" id="email" placeholder="Enter your email...." />
          <label htmlFor="password">Password</label>
          <input type="password" className="login__form__input" name="password" id="password" placeholder="Enter your password...." />
          <button className="login__button">Sign In</button>
        </form>
        <button className="login__register__button">
          <Link to="/register">Sign Up</Link>
        </button>
      </main>
    );
}
