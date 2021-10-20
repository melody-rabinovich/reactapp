import "./css/NavBar.css";
import logo192 from "./../assets/imagenes/logo192.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex" exact to="/">
            <img src={logo192} className="logoNav" alt="logoReact"></img>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <Link className="nav-link navItemsStyles" to="/categoria/taylor">
                Guitarras Taylor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navItemsStyles" to="/categoria/martin">
                Guitarras Martin & Co
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link navItemsStyles"
                to="/categoria/gibson"
              >
                Guitarras Gibson
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navItemsStyles" to="/categoria/fender">
                Guitarras Fender
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="# ">
                <CartWidget />
              </a>
            </li>
          </ul>
        </div>
        </div>
    </nav>
  );
}

export default NavBar;