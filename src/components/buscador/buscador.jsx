import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Buscador = () => {
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();
    if (!keyword) {
      Swal.fire("Error", "Este campo no puede estar vacío ", "warning");
      return;
    } else if (keyword.length <= 2) {
      Swal.fire("Error", "Debes ingresar al menos 3 caracteres", "warning");
      return;
    } else {
      e.target.keyword.value = "";
      navigate(`/resultados/${keyword}`);
    }
  };
  return (
    <form
      className="col-12 col-md-4 d-flex align-items-center "
      onSubmit={submitHandle}
    >
      <div className="me-2 ">
        <input
          type="text"
          className="form-control"
          name="keyword"
          placeholder="Ingresa tu película"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Buscar
      </button>
    </form>
  );
};
export default Buscador;
