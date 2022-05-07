import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Favoritos = ({ addOrRemoveFavories, favorites }) => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    !token &&
      Swal.fire(
        "Error",
        "Debes ingresar tu cuenta para acceder a este sitio",
        "warning"
      ) &&
      navigate("/");
  }, []);

  return (
    <>
      {favorites.length === 0 && (
        <p className="position-absolute top-50 start-50 translate-middle">
          No tienes favoritos en tu lista
        </p>
      )}
      <div className="container">
        <div className="row">
          {React.Children.toArray(
            favorites.map((elem) => {
              return (
                <div className="col-12 col-md-3">
                  <div className="card m-2 position-relative">
                    <img
                      src={elem.imageUrl}
                      className="card-img-top"
                      alt={elem.title}
                    />
                    <button
                      className="btn-like"
                      onClick={addOrRemoveFavories}
                      data-movie-id={elem.id}
                    >
                      🖤
                    </button>
                    <div className="card-body">
                      <h5 className="card-title">{elem.original_title}</h5>
                      <p className="card-text">
                        {elem.overview.substring(0, 50)}...
                      </p>
                      <Link
                        to={`/movie/${elem.id}`}
                        className="btn btn-primary"
                      >
                        Detalle
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Favoritos;
