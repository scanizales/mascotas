import "./header.css";
import logo from "../../assets/icons/logo-app.png";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header className="header-container">
      <section className="header-section">
        <div className="container">
          <nav className="home-nav">
            <figure className="logo-container">
              <img className="logo" src={logo}/>
            </figure>
            <Link className="btn-nav" to="/" >Home</Link>
            <Link className="btn-nav" to="about">About us</Link>
          </nav>
        </div>
        <h1>Definitive Guide to Caring for <br></br>and Getting to Know your Cat Child</h1>
      </section>
    </header>

  )
}