import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Detalle = () => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=6f226fce4c6f51cb125546af1fbd646d&language=en-US`;
    axios
      .get(endpoint)
      .then((res) => setMovie(res.data))
      .catch((err) =>
        Swal.fire("Error", "No hay datos para mostrar ", "warning")
      );
  }, [id, navigate]);

  return (
    <>
      {!movie && <p>...Cargando</p>}
      {React.Children.toArray(
        movie && (
          <>
            <h2>{movie.title}</h2>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-12 col-md-4">
                  <img
                    src={
                      !movie.poster_path
                        ? "https://i.imgur.com/IISoPIG.jpg"
                        : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    }
                    className="img-fluid rounded-start"
                    alt={movie.title}
                  />
                </div>
                <div className="col-12 col-md-8">
                  <div className="card-body">
                    <h2 className="card-title">{movie.original_title}</h2>
                    <h3 className="card-text">
                      Puntación: {movie.vote_average}{" "}
                    </h3>
                    <h3 className="card-text">
                      Votos totales: {movie.vote_count}{" "}
                    </h3>
                    <p className="card-text fs-1">{movie.overview}</p>
                    <h3 className="card-text fs-2">
                      Géneros:
                      {movie.genres.map((elem) => (
                        <span className="card-text fs-3"> - {elem.name} </span>
                      ))}
                    </h3>
                    <p className="card-text fs-4">
                      <small className="text-muted">
                        Fecha de estreno: {movie.release_date}{" "}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};
export default Detalle;
