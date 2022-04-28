import React from "react";
import { Link } from "react-router-dom";
import Buscador from "../buscador/buscador";

const Header = () => {
  return (
    <header className="container-fluid bg-black p-3">
      <div className="row d-flex">
        <div className="col-12 col-md-2 fs-2 font-monospace text-white">
          AlkeFlix
        </div>
        <nav className="nav col-12 col-md-6 justify-content-around fs-5">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/listado" className="nav-link">
            Listas
          </Link>
          <Link to="/contacto" className="nav-link">
            Contacto
          </Link>
        </nav>
        <Buscador />
      </div>
    </header>
  );
};

export default Header;
