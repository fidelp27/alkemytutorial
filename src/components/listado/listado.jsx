import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Listado = () => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=6f226fce4c6f51cb125546af1fbd646d&language=en-US&page=1";
    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data;
        setMoviesList(apiData.results);
      })
      .catch((err) =>
        Swal.fire("Error", "No hay datos para mostrar ", "warning")
      );
  }, [setMoviesList]);

  return (
    <div>
      {!token && navigate("/")}
      <div className="container">
        <div className="row">
          {React.Children.toArray(
            moviesList.map((elem) => {
              return (
                <div className="col-12 col-md-3">
                  <div className="card m-2">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                      className="card-img-top"
                      alt={elem.original_title}
                    />
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
    </div>
  );
};
export default Listado;
