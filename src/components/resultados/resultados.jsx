import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "../listado/listado.css";

const Resultados = ({ addOrRemoveFavories }) => {
  let { keyword } = useParams();
  const [movieResults, setMovieResults] = useState([]);
  const uri = `https://api.themoviedb.org/3/search/movie?api_key=6f226fce4c6f51cb125546af1fbd646d&language=en-US&page=1&include_adult=false&query=${keyword}`;

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        if (res.data.results.length === 0) {
          Swal.fire(
            "Error",
            "No se encontraron resultados de tu búsqueda",
            "warning"
          );
        }
        setMovieResults(res.data.results);
      })
      .catch((err) =>
        Swal.fire("Error", "No se pudo ubicar la información", "warning")
      );
  }, [uri]);

  return (
    <>
      {movieResults.length === 0 && <h3>No hay resultados</h3>}
      <div className="container">
        <div className="row">
          {React.Children.toArray(
            movieResults.map((elem) => {
              return (
                <div className="col-12 col-md-3">
                  <div className="card m-2">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                      className="card-img-top"
                      alt={elem.original_title}
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
export default Resultados;
