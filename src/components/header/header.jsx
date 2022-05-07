import React from "react";
import { Link } from "react-router-dom";
import Buscador from "../buscador/buscador";

const Header = ({ favorites }) => {
  return (
    <header className="container-fluid bg-black p-3">
      <div className="row d-flex">
        <div className="col-12 col-md-2 fs-2 font-monospace text-white">
          AlkeFlix
        </div>
        <nav className="nav col-12 col-md-6 justify-content-around fs-5">
          <Link to="/listado" className="nav-link">
            Listas
          </Link>

          <Link to="/favoritos" className="nav-link">
            Favoritos
            {favorites.length > 0 && (
              <sup className="bg-warning text-white ms-1 border-0 ps-1 pe-1 fs-6 rounded-circle">
                {favorites.length}
              </sup>
            )}
          </Link>
        </nav>
        <Buscador />
      </div>
    </header>
  );
};

export default Header;
